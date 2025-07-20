/**
 * QI Challenge - Mini-portail Néon Futuriste
 * JavaScript principal avec animations et interactions
 * High-tech Intellect - Comme un QI challenge dans la Matrice
 */

// ===== VARIABLES GLOBALES =====
let currentSlide = 0;
let isLoading = true;
let iqCounterValue = 0;
let hallOfFameData = [];
let currentCategory = 'all';

// ===== UTILITAIRES =====

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => {
    if (document.body.contains(announcement)) {
      document.body.removeChild(announcement);
    }
  }, 1000);
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const navHeight = document.querySelector('.nav-container').offsetHeight;
    const targetPosition = section.offsetTop - navHeight - 20;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    setTimeout(() => {
      const sectionContent = section.querySelector('.section-content');
      if (sectionContent && sectionContent.classList.contains('collapsed')) {
        toggleSection(section);
      }
    }, 500);
  }
}

// ===== ANIMATION DE CHARGEMENT =====

function animateIQCounter() {
  const iqNumberElement = document.getElementById('iq-number');
  if (!iqNumberElement) {
    console.warn('Élément #iq-number non trouvé. Abandon de l'animation.');
    hideLoadingScreen();
    return;
  }
  
  const targetIQ = 200;
  const duration = 2000;
  const startTime = Date.now();
  
  function updateCounter() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    iqCounterValue = Math.floor(easeOutCubic * targetIQ);
    iqNumberElement.textContent = iqCounterValue.toString().padStart(3, '0');
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      setTimeout(hideLoadingScreen, 500);
    }
  }
  
  requestAnimationFrame(updateCounter);
}

function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');
  
  if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      isLoading = false;
    }, 500);
  }
  
  if (mainContent) {
    mainContent.style.opacity = '1';
  }
}

// ===== INITIALISATION DES COMPOSANTS =====

function initializeCoreApp() {
  console.log('✨ Initialisation des fonctionnalités principales de l'application...');
  initializeEntryAnimations();
  initializeNavigation();
  initializeSections();
  initializeCarousel();
  initializeHallOfFame();
  initializeLazyLoading();
  enhanceAccessibility();
  enhanceHoverEffects();
  optimizePerformance();
  
  if (window.innerWidth > 768) {
    addParticleEffects();
  }
  
  announceToScreenReader('QI Challenge chargé. Bienvenue dans l'univers néon futuriste !');
  console.log('✅ Application initialisée.');
}

function initializeEntryAnimations() {
  const animatedElements = document.querySelectorAll('.content-section');
  animatedElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('animate-in');
    }, index * 200);
  });
}

function initializeNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      announceToScreenReader(isExpanded ? 'Menu fermé' : 'Menu ouvert');
    });
  }
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('data-section');
      if (sectionId) {
        scrollToSection(sectionId);
        if (navMenu && navMenu.classList.contains('active')) {
          navToggle.click();
        }
      }
    });
  });
}

function toggleSection(section) {
  const sectionContent = section.querySelector('.section-content');
  const sectionToggle = section.querySelector('.section-toggle');
  const isExpanded = sectionToggle.getAttribute('aria-expanded') === 'true';
  
  if (sectionContent && sectionToggle) {
    sectionToggle.setAttribute('aria-expanded', !isExpanded);
    if (isExpanded) {
      sectionContent.style.maxHeight = sectionContent.scrollHeight + 'px';
      requestAnimationFrame(() => {
        sectionContent.classList.add('collapsed');
        sectionContent.style.maxHeight = '0';
      });
    } else {
      sectionContent.classList.remove('collapsed');
      sectionContent.style.maxHeight = sectionContent.scrollHeight + 'px';
      if (section.id === 'posts-viraux' && typeof window.instgrm !== 'undefined') {
        setTimeout(() => window.instgrm.Embeds.process(), 300);
      }
      setTimeout(() => {
        sectionContent.style.maxHeight = 'none';
      }, 500);
    }
  }
}

function initializeSections() {
  const sectionHeaders = document.querySelectorAll('.section-header');
  sectionHeaders.forEach(header => {
    header.addEventListener('click', () => toggleSection(header.closest('.content-section')));
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleSection(header.closest('.content-section'));
      }
    });
  });
}

function initializeCarousel() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const indicators = document.querySelectorAll('.indicator');
  
  const updateCarousel = () => {
    const track = document.getElementById('carousel-track');
    if(track) track.style.transform = `translateX(${-currentSlide * 100}%)`;
    indicators.forEach((ind, i) => ind.classList.toggle('active', i === currentSlide));
  };
  
  const next = () => {
    const total = indicators.length;
    currentSlide = (currentSlide + 1) % total;
    updateCarousel();
  };
  
  const prev = () => {
    const total = indicators.length;
    currentSlide = (currentSlide - 1 + total) % total;
    updateCarousel();
  };
  
  if(prevBtn) prevBtn.addEventListener('click', prev);
  if(nextBtn) nextBtn.addEventListener('click', next);
  indicators.forEach((ind, i) => ind.addEventListener('click', () => {
    currentSlide = i;
    updateCarousel();
  }));
}

function initializeHallOfFame() {
  const categoryTabs = document.querySelectorAll('.category-tab');
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-category');
      document.querySelectorAll('.hall-entry').forEach(entry => {
        const show = category === 'all' || entry.classList.contains(category);
        entry.style.display = show ? '' : 'none';
      });
      categoryTabs.forEach(t => t.classList.toggle('active', t === tab));
    });
  });
}

function enhanceHoverEffects() {
  const interactive = '.social-link, .product-card, .journal-card, .cta-button';
  document.querySelectorAll(interactive).forEach(el => {
    el.addEventListener('mouseenter', () => el.style.transform = 'translateY(-5px) scale(1.02)');
    el.addEventListener('mouseleave', () => el.style.transform = 'translateY(0) scale(1)');
  });
}

function initializeLazyLoading() { /* Ommited for brevity */ }
function addParticleEffects() { /* Ommited for brevity */ }
function enhanceAccessibility() { /* Ommited for brevity */ }
function optimizePerformance() { /* Ommited for brevity */ }

// ===== GESTION DES ERREURS =====
window.addEventListener('error', (e) => console.error('Erreur JavaScript globale:', e.error));
window.addEventListener('unhandledrejection', (e) => console.error('Promesse rejetée:', e.reason));

// ===== DÉMARRAGE =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('🧠 DOM prêt. Démarrage de l'application...');

  // 1. Lance l'animation de chargement immédiatement.
  animateIQCounter();

  // 2. Initialise le reste de l'application après un délai fixe.
  // Cela garantit que l'application se charge même si l'animation est bloquée par une erreur.
  // Le délai (2600ms) est calculé pour correspondre à la fin attendue de l'animation.
  setTimeout(initializeCoreApp, 2600);
});

// Exposer les fonctions globales
window.scrollToSection = scrollToSection;
window.participateChallenge = () => window.open('https://instagram.com/qichallenge', '_blank');
