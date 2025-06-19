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
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Accept-Encoding': 'gzip, deflate, br',
                'DNT': '1',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1',
                'Sec-Fetch-Dest': 'document',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-Site': 'none',
                'Sec-Fetch-User': '?1'
            },
            timeout: 10000
        });

        // Extract Apollo state from the script tag
        const apolloStateMatch = data.match(/window\.__APOLLO_STATE__\s*=\s*({[\s\S]*?});<\/script>/);
        if (!apolloStateMatch) {
            throw new Error('Could not find Apollo state in page');
        }

        const apolloState = JSON.parse(apolloStateMatch[1]);

        // Extract products
        const products = Object.entries(apolloState)
            .filter(([key]) => key.startsWith("Product:"))
            .map(([_, product]) => ({
                id: product.id,
                title: product.title,
                url: `https://www.redbubble.com${product.url}`,
                image: product.images?.large,
                price: product.prices?.[0]?.price || 'N/A'
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
