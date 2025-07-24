/* ===== QI CHALLENGE - JAVASCRIPT PRINCIPAL ===== */
/* Éveil Intellectuel & Développement Personnel */

// ===== VARIABLES GLOBALES =====
let currentSlide = 0;
const totalSlides = 3;
let isLoading = true;

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

// ===== FONCTION D'INITIALISATION PRINCIPALE =====
function initializeApp() {
    // Démarrer l'animation de chargement
    startLoadingAnimation();

    // Initialiser les composants après le chargement
    setTimeout(() => {
        hideLoadingScreen();
        initializeNavigation();
        initializeCarousel();
        initializeHallOfFame();
        initializeSmoothScrolling();
        initializeAnimations();
        initializeAccessibility();

        // Marquer le chargement comme terminé
        isLoading = false;

        console.log('🧠 QI Challenge - Application initialisée avec succès!');
    }, 3000);
}

// ===== ANIMATION DE CHARGEMENT =====
function startLoadingAnimation() {
    const iqNumber = document.getElementById('iq-number');
    if (!iqNumber) return;

    let currentIQ = 0;
    const targetIQ = 200;
    const increment = 2;
    const interval = 50;

    const iqInterval = setInterval(() => {
        currentIQ += increment;
        iqNumber.textContent = currentIQ.toString().padStart(3, '0');

        if (currentIQ >= targetIQ) {
            clearInterval(iqInterval);
            iqNumber.textContent = '200';
        }
    }, interval);
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    if (loadingScreen && mainContent) {
        loadingScreen.classList.add('hidden');
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';

        setTimeout(() => {
            mainContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 500);
    }
}

// ===== NAVIGATION =====
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Menu hamburger mobile
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isActive = navToggle.classList.contains('active');

            if (isActive) {
                closeNavMenu();
            } else {
                openNavMenu();
            }
        });

        // Fermer le menu en cliquant sur un lien
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeNavMenu();
            });
        });

        // Fermer le menu en cliquant à l'extérieur
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                closeNavMenu();
            }
        });
    }

    // Navigation par sections
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');
            if (targetSection) {
                scrollToSection(targetSection);
            }
        });
    });

    // Mise en surbrillance de la section active
    initializeActiveNavigation();
}

function openNavMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.classList.add('active');
    navMenu.classList.add('active');
    navToggle.setAttribute('aria-expanded', 'true');

    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden';
}

function closeNavMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');

    // Restaurer le scroll du body
    document.body.style.overflow = '';
}

function initializeActiveNavigation() {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;

                // Retirer la classe active de tous les liens
                navLinks.forEach(link => link.classList.remove('active'));

                // Ajouter la classe active au lien correspondant
                const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// ===== DÉFILEMENT FLUIDE =====
function initializeSmoothScrolling() {
    // Déjà géré par CSS scroll-behavior: smooth
    // Mais on peut ajouter des améliorations ici si nécessaire
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.querySelector('.nav-container').offsetHeight;
        const targetPosition = section.offsetTop - navHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Annoncer le changement pour les lecteurs d'écran
        announceToScreenReader(`Navigation vers la section ${sectionId}`);
    }
}

// ===== CAROUSEL DES POSTS VIRAUX =====
function initializeCarousel() {
    const carouselTrack = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const indicators = document.querySelectorAll('.indicator');

    if (!carouselTrack || !prevBtn || !nextBtn) return;

    // Boutons de navigation
    prevBtn.addEventListener('click', () => {
        navigateCarousel('prev');
    });

    nextBtn.addEventListener('click', () => {
        navigateCarousel('next');
    });

    // Indicateurs
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // Navigation au clavier
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            navigateCarousel('prev');
        } else if (e.key === 'ArrowRight') {
            navigateCarousel('next');
        }
    });

    // Auto-play (optionnel)
    // startCarouselAutoplay();
}

function navigateCarousel(direction) {
    if (direction === 'prev') {
        currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
    } else {
        currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
    }

    updateCarousel();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

function updateCarousel() {
    const carouselTrack = document.getElementById('carousel-track');
    const indicators = document.querySelectorAll('.indicator');

    if (carouselTrack) {
        const translateX = -currentSlide * 100;
        carouselTrack.style.transform = `translateX(${translateX}%)`;
    }

    // Mettre à jour les indicateurs
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });

    // Annoncer le changement pour les lecteurs d'écran
    announceToScreenReader(`Slide ${currentSlide + 1} sur ${totalSlides}`);
}

function startCarouselAutoplay() {
    setInterval(() => {
        if (!document.hidden && !isLoading) {
            navigateCarousel('next');
        }
    }, 5000);
}

// ===== HALL OF FAME =====
function initializeHallOfFame() {
    const categoryTabs = document.querySelectorAll('.category-tab');

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const category = tab.getAttribute('data-category');
            filterHallOfFame(category);

            // Mettre à jour l'état actif des onglets
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Annoncer le changement pour les lecteurs d'écran
            announceToScreenReader(`Filtre Hall of Fame: ${category}`);
        });
    });
}

function filterHallOfFame(category) {
    const hallEntries = document.querySelectorAll('.hall-entry');

    hallEntries.forEach(entry => {
        const entryCategory = entry.getAttribute('data-category');

        if (category === 'tous' || entryCategory === category) {
            entry.style.display = 'table-row';
            entry.style.opacity = '1';
            entry.style.transform = 'translateY(0)';
        } else {
            entry.style.display = 'none';
            entry.style.opacity = '0';
            entry.style.transform = 'translateY(-10px)';
        }
    });

    // Animation d'apparition pour les entrées visibles
    setTimeout(() => {
        const visibleEntries = document.querySelectorAll('.hall-entry[style*="table-row"]');
        visibleEntries.forEach((entry, index) => {
            setTimeout(() => {
                entry.style.transition = 'all 0.3s ease';
                entry.style.opacity = '1';
                entry.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 50);
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    // Observer pour les animations au scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    const animatedElements = document.querySelectorAll('.content-section, .product-card, .social-link');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ===== EFFETS VISUELS =====
/**
 * Ajouter des effets de particules (optionnel)
 */
function addParticleEffects() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  `;

    document.body.appendChild(particleContainer);

    // Créer des particules flottantes
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createParticle(particleContainer);
        }, i * 200);
    }
}

/**
 * Créer une particule flottante
 */
function createParticle(container) {
    const particle = document.createElement('div');
    const size = randomBetween(2, 6);
    const duration = randomBetween(10, 20);
    const delay = randomBetween(0, 5);

    particle.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    background: radial-gradient(circle, #00d4ff, transparent);
    border-radius: 50%;
    left: ${randomBetween(0, 100)}%;
    top: 100%;
    animation: floatUp ${duration}s linear ${delay}s infinite;
    opacity: 0.6;
  `;

    // Ajouter l'animation CSS si elle n'existe pas
    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
      @keyframes floatUp {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 0.6;
        }
        90% {
          opacity: 0.6;
        }
        100% {
          transform: translateY(-100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
        document.head.appendChild(style);
    }

    container.appendChild(particle);

    // Supprimer la particule après l'animation
    setTimeout(() => {
        if (container.contains(particle)) {
            container.removeChild(particle);
        }
        // Créer une nouvelle particule
        createParticle(container);
    }, (duration + delay) * 1000);
}

// ===== FONCTIONS UTILITAIRES =====
function participateChallenge() {
    // Redirection vers les réseaux sociaux pour participer aux défis
    const socialLinks = [
        'https://instagram.com/qichallenge',
        'https://facebook.com/qichallenge',
        'https://tiktok.com/@qichallenge'
    ];

    // Ouvrir un lien aléatoire ou permettre à l'utilisateur de choisir
    const randomLink = socialLinks[Math.floor(Math.random() * socialLinks.length)];
    window.open(randomLink, '_blank');

    // Annoncer l'action
    announceToScreenReader('Redirection vers les réseaux sociaux pour participer aux défis');
}

function announceToScreenReader(message) {
    const announcements = document.getElementById('sr-announcements');
    if (announcements) {
        announcements.textContent = message;

        // Effacer le message après un délai
        setTimeout(() => {
            announcements.textContent = '';
        }, 1000);
    }
}

// ===== ACCESSIBILITÉ =====
function initializeAccessibility() {
    // Gestion du focus pour les éléments interactifs
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');

    interactiveElements.forEach(element => {
        element.addEventListener('focus', (e) => {
            e.target.classList.add('focused');
        });

        element.addEventListener('blur', (e) => {
            e.target.classList.remove('focused');
        });
    });

    // Gestion des raccourcis clavier
    document.addEventListener('keydown', (e) => {
        // Échapper pour fermer les modales/menus
        if (e.key === 'Escape') {
            closeNavMenu();
        }

        // Raccourcis de navigation
        if (e.altKey) {
            switch (e.key) {
                case '1':
                    e.preventDefault();
                    scrollToSection('reseaux');
                    break;
                case '2':
                    e.preventDefault();
                    scrollToSection('boutique');
                    break;
                case '3':
                    e.preventDefault();
                    scrollToSection('journal');
                    break;
                case '4':
                    e.preventDefault();
                    scrollToSection('posts-viraux');
                    break;
                case '5':
                    e.preventDefault();
                    scrollToSection('hall-of-fame');
                    break;
                case '6':
                    e.preventDefault();
                    scrollToSection('contact');
                    break;
            }
        }
    });
}

// ===== GESTION DES ERREURS =====
window.addEventListener('error', (e) => {
    console.error('Erreur JavaScript:', e.error);

    // En mode développement, afficher l'erreur
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.warn('Erreur détectée en mode développement:', e.error);
    }
});

// ===== OPTIMISATIONS PERFORMANCE =====
// Lazy loading pour les images
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Debounce pour les événements de redimensionnement
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

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', debounce(() => {
    // Recalculer les positions si nécessaire
    if (window.innerWidth > 768) {
        closeNavMenu();
    }
}, 250));

// ===== ANALYTICS ET TRACKING (optionnel) =====
function trackEvent(eventName, eventData = {}) {
    // Placeholder pour l'analytics
    console.log('Event tracked:', eventName, eventData);

    // Ici vous pourriez intégrer Google Analytics, Mixpanel, etc.
    // gtag('event', eventName, eventData);
}

// ===== FONCTIONS EXPOSÉES GLOBALEMENT =====
window.scrollToSection = scrollToSection;
window.participateChallenge = participateChallenge;
window.navigateCarousel = navigateCarousel;
window.goToSlide = goToSlide;
window.filterHallOfFame = filterHallOfFame;

// ===== INITIALISATION DES LAZY LOADING =====
document.addEventListener('DOMContentLoaded', () => {
    initializeLazyLoading();
});

// ===== SERVICE WORKER (optionnel pour PWA) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// ===== EXPORT POUR LES MODULES (si nécessaire) =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollToSection,
        participateChallenge,
        navigateCarousel,
        goToSlide,
        filterHallOfFame
    };
}


// ===== BOUTONS REJOIGNEZ-NOUS =====
function initializeJoinButtons() {
    const joinButtons = document.querySelectorAll('.join-button');

    joinButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = button.getAttribute('data-platform');
            joinPlatform(platform);
        });
    });
}

function joinPlatform(platform) {
    const platformLinks = {
        'instagram': 'https://instagram.com/qichallenge',
        'facebook': 'https://facebook.com/qichallenge',
        'youtube': 'https://youtube.com/@qichallenge',
        'tiktok': 'https://tiktok.com/@qichallenge',
        'threads': 'https://threads.net/@qichallenge',
        'twitter': 'https://twitter.com/qichallenge',
        'twitch': 'https://twitch.tv/qichallenge'
    };

    const link = platformLinks[platform];
    if (link) {
        window.open(link, '_blank');
        announceToScreenReader(`Ouverture de ${platform} dans un nouvel onglet`);
    }
}

// Ajouter l'initialisation des boutons dans la fonction principale
function initializeApp() {
    // Démarrer l'animation de chargement
    startLoadingAnimation();

    // Initialiser les composants après le chargement
    setTimeout(() => {
        hideLoadingScreen();
        initializeNavigation();
        initializeCarousel();
        initializeHallOfFame();
        initializeJoinButtons(); // Nouvelle fonction
        initializeSmoothScrolling();
        initializeAnimations();
        initializeAccessibility();

        // Effets visuels optionnels
        if (window.innerWidth > 768) {
            addParticleEffects();
        }

        // Marquer le chargement comme terminé
        isLoading = false;

        console.log('🧠 QI Challenge - Application initialisée avec succès!');
    }, 3000);
}

