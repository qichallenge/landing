const whatsappStylesheet = document.createElement('link');
whatsappStylesheet.rel = 'stylesheet';
whatsappStylesheet.href = 'css/whatsapp.css';
document.head.appendChild(whatsappStylesheet);

// Route high-value outbound actions through first-party paths so Cloudflare
// HTTP Analytics can count conversion intent before the visitor leaves the site.
document.querySelectorAll('a').forEach(link => {
  const href = link.getAttribute('href') || '';

  if (href.startsWith('https://whatsapp.com/channel/0029Vb2xBcOCHDyldNBb5W0D')) {
    link.setAttribute('href', '/go/whatsapp/');
  } else if (href === 'media-kit.html' || href === '/media-kit.html') {
    link.setAttribute('href', '/go/media-kit/');
  } else if (href.startsWith('mailto:partenariats@qichallenge.com')) {
    link.setAttribute('href', '/go/partnership/');
  }
});

const shopConversionLink = document.querySelector('.shop-copy a[href^="https://qichallenge.tpopsite.com/"]');
if (shopConversionLink) shopConversionLink.setAttribute('href', '/go/shop/');

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
