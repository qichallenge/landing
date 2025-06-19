const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const REDBUBBLE_SHOP_URL = 'https://www.redbubble.com/people/qichallenge/shop?asc=u';
const OUTPUT_FILE = path.join(__dirname, '../data/products.json');

async function fetchProducts() {
    try {
        // Create data directory if it doesn't exist
        const dataDir = path.dirname(OUTPUT_FILE);
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Fetch the Redbubble shop page
        const { data } = await axios.get(REDBUBBLE_SHOP_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        // Parse the HTML
        const $ = cheerio.load(data);
        
        // Extract the JSON data from the script tag
        const scriptContent = $('script:contains("window.__INITIAL_STATE__")').html();
        if (!scriptContent) {
            throw new Error('Could not find initial state in page');
        }

        // Extract the JSON string
        const jsonMatch = scriptContent.match(/window\.__INITIAL_STATE__\s*=\s*({.*?});/s);
        if (!jsonMatch) {
            throw new Error('Could not parse initial state');
        }

        const initialState = JSON.parse(jsonMatch[1]);
        
        // Extract products from the state
        const products = Object.values(initialState.shop.products.entities).map(product => ({
            id: product.id,
            title: product.title,
            url: `https://www.redbubble.com${product.url}`,
            image: product.thumbnail_url || product.assets[0]?.url,
            price: product.price?.formatted || 'N/A'
        }));

        // Write to file
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(products, null, 2));
        console.log(`Successfully wrote ${products.length} products to ${OUTPUT_FILE}`);

    } catch (error) {
        console.error('Error fetching products:', error.message);
        process.exit(1);
    }
}

fetchProducts();
