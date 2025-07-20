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

/**
 * Debounce function pour optimiser les performances
 */
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

/**
 * Throttle function pour les événements fréquents
 */
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

/**
 * Annonce pour les lecteurs d'écran
 */
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

/**
 * Génère un nombre aléatoire entre min et max
 */
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Scroll fluide vers une section
 */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const navHeight = document.querySelector('.nav-container').offsetHeight;
    const targetPosition = section.offsetTop - navHeight - 20;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    
    // Ouvrir automatiquement la section si elle est fermée
    setTimeout(() => {
      const sectionContent = section.querySelector('.section-content');
      const sectionToggle = section.querySelector('.section-toggle');
      
      if (sectionContent && sectionContent.classList.contains('collapsed')) {
        toggleSection(section);
      }
    }, 500);
  }
}

// ===== ANIMATION DE CHARGEMENT =====

/**
 * Animation du compteur QI
 */
function animateIQCounter() {
  const iqNumberElement = document.getElementById('iq-number');
  if (!iqNumberElement) {
    console.warn('Élément du compteur QI non trouvé. L'animation est annulée.');
    hideLoadingScreen();
    return;
  }
  
  const targetIQ = 200; // QI cible
  const duration = 2000; // 2 secondes
  const startTime = Date.now();
  
  function updateCounter() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Fonction d'easing pour un effet plus naturel
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    iqCounterValue = Math.floor(easeOutCubic * targetIQ);
    
    iqNumberElement.textContent = iqCounterValue.toString().padStart(3, '0');
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      // Animation terminée, démarrer le fondu de sortie
      setTimeout(hideLoadingScreen, 500);
    }
  }
  
  requestAnimationFrame(updateCounter);
}

/**
 * Masquer l'écran de chargement
 */
function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');
  
  if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
    loadingScreen.classList.add('hidden');
    
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      isLoading = false;
      
      // Démarrer les animations d'entrée et le reste des initialisations
      initializeMainContent();
      
      announceToScreenReader('QI Challenge chargé. Bienvenue dans l'univers néon futuriste !');
    }, 500);
  }
  
  if (mainContent) {
    mainContent.style.opacity = '1';
  }
}

/**
 * Initialiser le contenu principal après l'animation de chargement
 */
function initializeMainContent() {
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
  
  console.log('✨ Contenu principal initialisé !');
}

/**
 * Initialiser les animations d'entrée
 */
function initializeEntryAnimations() {
  const animatedElements = document.querySelectorAll('.content-section');
  
  animatedElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('animate-in');
    }, index * 200);
  });
}

// ===== NAVIGATION =====

/**
 * Initialiser la navigation
 */
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
  
  const navContainer = document.querySelector('.nav-container');
  let lastScrollY = window.scrollY;
  
  const handleScroll = throttle(() => {
    const currentScrollY = window.scrollY;
    if (navContainer) {
      if (currentScrollY > 100) {
        navContainer.style.background = 'rgba(26, 0, 51, 0.95)';
        navContainer.style.backdropFilter = 'blur(15px)';
      } else {
        navContainer.style.background = 'rgba(26, 0, 51, 0.9)';
        navContainer.style.backdropFilter = 'blur(10px)';
      }
    }
    lastScrollY = currentScrollY;
  }, 16);
  
  window.addEventListener('scroll', handleScroll);
}

// ===== SECTIONS COLLAPSIBLES =====

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
      announceToScreenReader(`Section ${section.querySelector('.title-text').textContent} fermée`);
    } else {
      sectionContent.classList.remove('collapsed');
      sectionContent.style.maxHeight = sectionContent.scrollHeight + 'px';
      
      if (section.id === 'posts-viraux' && typeof window.instgrm !== 'undefined') {
        setTimeout(() => window.instgrm.Embeds.process(), 100);
      }
      
      setTimeout(() => {
        sectionContent.style.maxHeight = 'none';
      }, 500);
      announceToScreenReader(`Section ${section.querySelector('.title-text').textContent} ouverte`);
    }
  }
}

function initializeSections() {
  const sectionHeaders = document.querySelectorAll('.section-header');
  
  sectionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const section = header.closest('.content-section');
      toggleSection(section);
    });
    
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const section = header.closest('.content-section');
        toggleSection(section);
      }
    });
  });
}

// ===== CAROUSEL, HALL OF FAME, etc. (fonctions inchangées) =====

function updateCarousel() {
  const carouselTrack = document.getElementById('carousel-track');
  const indicators = document.querySelectorAll('.indicator');
  
  if (carouselTrack) {
    const translateX = -currentSlide * 100;
    carouselTrack.style.transform = `translateX(${translateX}%)`;
  }
  
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlide);
  });
  
  announceToScreenReader(`Post viral ${currentSlide + 1} sur ${indicators.length} affiché`);
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.post-card').length;
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  const totalSlides = document.querySelectorAll('.post-card').length;
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(slideIndex) {
  const totalSlides = document.querySelectorAll('.post-card').length;
  if (slideIndex >= 0 && slideIndex < totalSlides) {
    currentSlide = slideIndex;
    updateCarousel();
  }
}

function initializeCarousel() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const indicators = document.querySelectorAll('.indicator');
  
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index));
  });
  
  let autoPlayInterval = setInterval(nextSlide, 5000);
  
  const carousel = document.querySelector('.posts-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    carousel.addEventListener('mouseleave', () => autoPlayInterval = setInterval(nextSlide, 5000));
  }
}

function filterHallOfFame(category) {
  currentCategory = category;
  const entries = document.querySelectorAll('.hall-entry');
  const tabs = document.querySelectorAll('.category-tab');
  
  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-category') === category);
  });
  
  entries.forEach(entry => {
    const shouldShow = category === 'all' || entry.classList.contains(category);
    entry.style.display = shouldShow ? '' : 'none';
    if (shouldShow) entry.style.animation = 'fadeInUp 0.5s ease-out';
  });
  
  const categoryNames = {
    'all': 'Toutes les catégories',
    'decodeurs': 'Décodeurs',
    'droles': 'Les plus drôles',
    'creatifs': 'Créatifs',
    'ambassadeurs': 'Ambassadeurs'
  };
  
  announceToScreenReader(`Hall of Fame filtré par ${categoryNames[category]}`);
}

function initializeHallOfFame() {
  const categoryTabs = document.querySelectorAll('.category-tab');
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-category');
      filterHallOfFame(category);
    });
  });
}

function addParticleEffects() {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'particle-container';
  particleContainer.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: -1;`;
  document.body.appendChild(particleContainer);
  
  for (let i = 0; i < 20; i++) {
    setTimeout(() => createParticle(particleContainer), i * 200);
  }
}

function createParticle(container) {
  const particle = document.createElement('div');
  const size = randomBetween(2, 6);
  const duration = randomBetween(10, 20);
  const delay = randomBetween(0, 5);
  
  particle.style.cssText = `position: absolute; width: ${size}px; height: ${size}px; background: radial-gradient(circle, #00d4ff, transparent); border-radius: 50%; left: ${randomBetween(0, 100)}%; top: 100%; animation: floatUp ${duration}s linear ${delay}s infinite; opacity: 0.6;`;
  
  if (!document.querySelector('#particle-styles')) {
    const style = document.createElement('style');
    style.id = 'particle-styles';
    style.textContent = `@keyframes floatUp { 0% { transform: translateY(0) rotate(0deg); opacity: 0; } 10% { opacity: 0.6; } 90% { opacity: 0.6; } 100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; } }`;
    document.head.appendChild(style);
  }
  
  container.appendChild(particle);
  
  setTimeout(() => {
    if (container.contains(particle)) container.removeChild(particle);
    createParticle(container);
  }, (duration + delay) * 1000);
}

function enhanceHoverEffects() {
  const interactiveElements = document.querySelectorAll('.social-link, .product-card, .journal-card, .cta-button');
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.02)';
      this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    element.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

function participateChallenge() {
  const socialLinks = ['https://instagram.com/qichallenge', 'https://facebook.com/qichallenge', 'https://tiktok.com/@qichallenge'];
  const randomLink = socialLinks[Math.floor(Math.random() * socialLinks.length)];
  const button = event.target.closest('.cta-button');
  if (button) {
    button.style.transform = 'scale(0.95)';
    button.style.boxShadow = '0 0 50px rgba(255, 20, 147, 0.8)';
    setTimeout(() => {
      window.open(randomLink, '_blank');
      button.style.transform = '';
      button.style.boxShadow = '';
    }, 200);
  }
  announceToScreenReader('Redirection vers les défis QI Challenge');
}

function initializeLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.style.opacity = '0';
          img.style.transition = 'opacity 0.5s ease-in-out';
          img.onload = () => {
            img.style.opacity = '1';
            img.classList.add('loaded');
          };
          if (img.dataset.src) img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '50px 0px', threshold: 0.1 });
    images.forEach(img => imageObserver.observe(img));
  } else {
    images.forEach(img => {
      if (img.dataset.src) img.src = img.dataset.src;
    });
  }
}

function enhanceAccessibility() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') document.body.classList.add('keyboard-navigation');
  });
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });
}

function optimizePerformance() {
  const criticalImages = ['assets/qi_white_white_bg.png', 'assets/gumroad_journal.png'];
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

// ===== INITIALISATION =====

function initializeApp() {
  console.log('🧠 QI Challenge - Initialisation...');
  
  // Démarrer l'animation de chargement sans délai
  animateIQCounter();
  
  // Le reste de l'initialisation se fait après que l'animation est terminée (dans hideLoadingScreen)
}

// ===== GESTION DES ERREURS =====

window.addEventListener('error', (e) => {
  console.error('Erreur JavaScript:', e.error);
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    announceToScreenReader('Erreur technique. Consultez la console.');
  }
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Promesse rejetée:', e.reason);
  e.preventDefault();
});

// ===== DÉMARRAGE =====
document.addEventListener('DOMContentLoaded', initializeApp);

// Exposer les fonctions globales
window.scrollToSection = scrollToSection;
window.participateChallenge = participateChallenge;
