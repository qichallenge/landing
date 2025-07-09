/**
 * QI Challenge - Mini-portail JavaScript
 * Gestion des interactions et fonctionnalités du site
 */

// ===== VARIABLES GLOBALES =====
let isMenuOpen = false;
const sections = new Map();

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Initialise toutes les fonctionnalités de l'application
 */
function initializeApp() {
    console.log('🚀 Initialisation du mini-portail QI Challenge');
    
    // Initialiser les composants
    initializeNavigation();
    initializeSections();
    initializeLazyLoading();
    initializeAccessibility();
    initializeAnimations();
    updateYear();
    
    console.log('✅ Initialisation terminée');
}

// ===== NAVIGATION =====

/**
 * Initialise la navigation responsive
 */
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!navToggle || !navMenu) return;
    
    // Gestion du bouton hamburger
    navToggle.addEventListener('click', toggleMobileMenu);
    
    // Fermer le menu lors du clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                toggleMobileMenu();
            }
        });
    });
    
    // Fermer le menu lors du clic à l'extérieur
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            toggleMobileMenu();
        }
    });
    
    // Gestion du scroll pour la navigation sticky
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const nav = document.querySelector('.main-nav');
        
        if (nav) {
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollY = currentScrollY;
    });
}

/**
 * Bascule l'état du menu mobile
 */
function toggleMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!navToggle || !navMenu) return;
    
    isMenuOpen = !isMenuOpen;
    
    navToggle.setAttribute('aria-expanded', isMenuOpen.toString());
    navMenu.classList.toggle('active', isMenuOpen);
    
    // Prévenir le scroll du body quand le menu est ouvert
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
}

// ===== SECTIONS COLLAPSIBLES =====

/**
 * Initialise les sections collapsibles
 */
function initializeSections() {
    const sectionToggles = document.querySelectorAll('.section-toggle');
    
    sectionToggles.forEach(toggle => {
        const sectionId = toggle.getAttribute('aria-controls');
        const content = document.getElementById(sectionId);
        
        if (!content) return;
        
        // Stocker l'état initial
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        sections.set(sectionId, {
            toggle: toggle,
            content: content,
            isExpanded: isExpanded
        });
        
        // Définir l'état initial
        if (!isExpanded) {
            content.classList.add('collapsed');
        }
        
        // Ajouter l'écouteur d'événement
        toggle.addEventListener('click', () => toggleSection(sectionId));
    });
}

/**
 * Bascule l'état d'une section
 * @param {string} sectionId - ID de la section à basculer
 */
function toggleSection(sectionId) {
    const section = sections.get(sectionId);
    if (!section) return;
    
    const { toggle, content } = section;
    const isCurrentlyExpanded = toggle.getAttribute('aria-expanded') === 'true';
    const newState = !isCurrentlyExpanded;
    
    // Mettre à jour les attributs ARIA
    toggle.setAttribute('aria-expanded', newState.toString());
    
    // Animer la transition
    if (newState) {
        // Ouvrir la section
        content.classList.remove('collapsed');
        content.style.maxHeight = content.scrollHeight + 'px';
        
        // Réinitialiser la hauteur après l'animation
        setTimeout(() => {
            if (!content.classList.contains('collapsed')) {
                content.style.maxHeight = '';
            }
        }, 300);
    } else {
        // Fermer la section
        content.style.maxHeight = content.scrollHeight + 'px';
        
        // Forcer un reflow puis appliquer la transition
        content.offsetHeight;
        content.style.maxHeight = '0px';
        
        setTimeout(() => {
            content.classList.add('collapsed');
            content.style.maxHeight = '';
        }, 300);
    }
    
    // Mettre à jour l'état stocké
    section.isExpanded = newState;
    
    // Déclencher un événement personnalisé
    const event = new CustomEvent('sectionToggle', {
        detail: { sectionId, isExpanded: newState }
    });
    document.dispatchEvent(event);
}

// ===== LAZY LOADING =====

/**
 * Initialise le lazy loading des images
 */
function initializeLazyLoading() {
    // Utiliser l'API Intersection Observer si disponible
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    loadImage(img);
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.1
        });
        
        // Observer toutes les images avec loading="lazy"
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback pour les navigateurs plus anciens
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(loadImage);
    }
}

/**
 * Charge une image et applique l'effet de transition
 * @param {HTMLImageElement} img - L'élément image à charger
 */
function loadImage(img) {
    if (img.complete) {
        img.classList.add('loaded');
        return;
    }
    
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
    
    img.addEventListener('error', () => {
        console.warn('Erreur de chargement de l\'image:', img.src);
        img.alt = 'Image non disponible';
    });
}

// ===== ACCESSIBILITÉ =====

/**
 * Améliore l'accessibilité du site
 */
function initializeAccessibility() {
    // Gestion de la navigation au clavier
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Améliorer le focus visible
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Annoncer les changements d'état aux lecteurs d'écran
    document.addEventListener('sectionToggle', (e) => {
        const { sectionId, isExpanded } = e.detail;
        const section = sections.get(sectionId);
        
        if (section) {
            const announcement = isExpanded ? 'Section ouverte' : 'Section fermée';
            announceToScreenReader(announcement);
        }
    });
}

/**
 * Gère la navigation au clavier
 * @param {KeyboardEvent} e - L'événement clavier
 */
function handleKeyboardNavigation(e) {
    // Échapper pour fermer le menu mobile
    if (e.key === 'Escape' && isMenuOpen) {
        toggleMobileMenu();
        document.querySelector('.nav-toggle').focus();
    }
    
    // Entrée ou Espace pour activer les boutons
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('section-toggle')) {
        e.preventDefault();
        e.target.click();
    }
}

/**
 * Annonce un message aux lecteurs d'écran
 * @param {string} message - Le message à annoncer
 */
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// ===== ANIMATIONS =====

/**
 * Initialise les animations au scroll
 */
function initializeAnimations() {
    // Animation des éléments au scroll
    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observer les sections de contenu
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.classList.add('animate-on-scroll');
            animationObserver.observe(section);
        });
    }
    
    // Animation de parallaxe subtile pour le hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero && scrolled < hero.offsetHeight) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// ===== UTILITAIRES =====

/**
 * Met à jour l'année dans le footer
 */
function updateYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Débounce une fonction
 * @param {Function} func - La fonction à débouncer
 * @param {number} wait - Le délai d'attente en millisecondes
 * @returns {Function} La fonction débouncée
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
 * Throttle une fonction
 * @param {Function} func - La fonction à throttler
 * @param {number} limit - La limite en millisecondes
 * @returns {Function} La fonction throttlée
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
    };
}

// ===== GESTION DES ERREURS =====

/**
 * Gestionnaire global d'erreurs
 */
window.addEventListener('error', (e) => {
    console.error('Erreur JavaScript:', e.error);
    
    // En production, vous pourriez envoyer l'erreur à un service de monitoring
    // sendErrorToMonitoring(e.error);
});

/**
 * Gestionnaire d'erreurs pour les promesses non gérées
 */
window.addEventListener('unhandledrejection', (e) => {
    console.error('Promesse rejetée non gérée:', e.reason);
    e.preventDefault();
});

// ===== PERFORMANCE =====

/**
 * Optimise les performances en utilisant requestAnimationFrame
 */
const optimizedScroll = throttle(() => {
    // Les animations de scroll sont gérées ici
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScroll);

/**
 * Précharge les ressources critiques
 */
function preloadCriticalResources() {
    const criticalImages = [
        'assets/qi_white_white_bg.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Précharger au chargement de la page
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadCriticalResources);
} else {
    preloadCriticalResources();
}

// ===== ANALYTICS ET TRACKING =====

/**
 * Suit les interactions utilisateur (pour analytics)
 * @param {string} action - L'action effectuée
 * @param {string} category - La catégorie de l'action
 * @param {string} label - Le label de l'action
 */
function trackUserInteraction(action, category, label) {
    // Ici vous pourriez intégrer Google Analytics, Matomo, etc.
    console.log('Interaction trackée:', { action, category, label });
    
    // Exemple d'intégration GA4:
    // gtag('event', action, {
    //     event_category: category,
    //     event_label: label
    // });
}

// Tracker les clics sur les liens sociaux
document.addEventListener('click', (e) => {
    if (e.target.closest('.social-link')) {
        const platform = e.target.closest('.social-link').querySelector('.social-label').textContent;
        trackUserInteraction('click', 'social', platform);
    }
    
    if (e.target.closest('.product-link')) {
        trackUserInteraction('click', 'product', 'product_view');
    }
    
    if (e.target.closest('.contact-button')) {
        trackUserInteraction('click', 'contact', 'email');
    }
});

// ===== EXPORT POUR TESTS =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleSection,
        toggleMobileMenu,
        loadImage,
        debounce,
        throttle
    };
}

