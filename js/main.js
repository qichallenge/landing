/* ===== QI CHALLENGE - JAVASCRIPT PRINCIPAL ===== */
/* Éveil Intellectuel & Développement Personnel */

// ===== VARIABLES GLOBALES =====
let currentSlide = 0;
const totalSlides = 3;
let isLoading = true;

// ===== INITIALISATION =====
document.addEventListener("DOMContentLoaded", function() {
    initializeApp();
});

// ===== FONCTION D'INITIALISATION PRINCIPALE =====
function initializeApp() {
    // Démarrer l'animation visuelle de chargement
    startLoadingAnimation();

    // Cacher l'écran de chargement après 3 secondes
    setTimeout(hideLoadingScreen, 3000);

    // Initialiser toute la logique de la page immédiatement, sans attendre
    initializeNavigation();
    initializeCarousel();
    initializeHallOfFame();
    initializeAnimations();
    initializeAccessibility();
    createParticles();

    // Mettre à jour l'état de chargement
    setTimeout(() => {
        isLoading = false;
    }, 3000);

    console.log("🧠 QI Challenge - Application initialisée avec succès!");
}

// ===== ANIMATION DE CHARGEMENT =====
function startLoadingAnimation() {
    const iqNumber = document.getElementById("iq-number");
    if (!iqNumber) return;

    let currentIQ = 0;
    const targetIQ = 200;
    const increment = 2;
    const interval = 50;

    const iqInterval = setInterval(() => {
        currentIQ += increment;
        iqNumber.textContent = currentIQ.toString().padStart(3, "0");

        if (currentIQ >= targetIQ) {
            clearInterval(iqInterval);
            iqNumber.textContent = "200";
        }
    }, interval);
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    if (loadingScreen && mainContent) {
        loadingScreen.classList.add("hidden");
        mainContent.style.opacity = "0";
        mainContent.style.transform = "translateY(20px)";

        setTimeout(() => {
            mainContent.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            mainContent.style.opacity = "1";
            mainContent.style.transform = "translateY(0)";
        }, 500);
    }
}

// ===== NAVIGATION =====
function initializeNavigation() {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            const isActive = navToggle.classList.contains("active");
            isActive ? closeNavMenu() : openNavMenu();
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                closeNavMenu();
            });
        });

        document.addEventListener("click", (e) => {
            if (navMenu.classList.contains('active') && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                closeNavMenu();
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute("data-section");
            if (targetSection) {
                scrollToSection(targetSection);
            }
        });
    });

    initializeActiveNavigation();
}

function openNavMenu() {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    navToggle.classList.add("active");
    navMenu.classList.add("active");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}

function closeNavMenu() {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}

function initializeActiveNavigation() {
    const sections = document.querySelectorAll(".content-section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observerOptions = {
        root: document.querySelector('.main-container'), // Observe inside the scrolling container
        rootMargin: "-20% 0px -80% 0px",
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                navLinks.forEach(link => link.classList.remove("active"));
                const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// ===== DÉFILEMENT FLUIDE =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const mainContainer = document.querySelector('.main-container');
    if (section && mainContainer) {
        const navHeight = document.querySelector(".nav-container").offsetHeight;
        const targetPosition = section.offsetTop - navHeight - 20;

        mainContainer.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
        announceToScreenReader(`Navigation vers la section ${section.textContent.trim()}`);
    }
}

// ===== CAROUSEL DES POSTS VIRAUX =====
function initializeCarousel() {
    const carouselTrack = document.getElementById("carousel-track");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const indicators = document.querySelectorAll(".indicator");

    if (!carouselTrack || !prevBtn || !nextBtn) return;

    function navigateCarousel(direction) {
        if (direction === "prev") {
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
        } else {
            currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
        }
        updateCarousel();
    }

    prevBtn.addEventListener("click", () => navigateCarousel("prev"));
    nextBtn.addEventListener("click", () => navigateCarousel("next"));

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            currentSlide = index;
            updateCarousel();
        });
    });
}

function updateCarousel() {
    const carouselTrack = document.getElementById("carousel-track");
    const indicators = document.querySelectorAll(".indicator");

    if (carouselTrack) {
        const translateX = -currentSlide * 100;
        carouselTrack.style.transform = `translateX(${translateX}%)`;
    }

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentSlide);
    });

    announceToScreenReader(`Affichage du post ${currentSlide + 1} sur ${totalSlides}`);
}

// ===== HALL OF FAME =====
function initializeHallOfFame() {
    const categoryTabs = document.querySelectorAll(".category-tab");
    if (!categoryTabs.length) {
        console.error("Hall of Fame tabs not found.");
        return;
    }

    categoryTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const category = tab.dataset.category;

            categoryTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            filterHallOfFame(category);
            announceToScreenReader(`Filtre du Hall of Fame appliqué : ${tab.textContent}`);
        });
    });

    filterHallOfFame('all');
}

function filterHallOfFame(category) {
    const hallEntries = document.querySelectorAll(".hall-entry");
    if (!hallEntries.length) {
        console.error("Hall of Fame entries not found.");
        return;
    }

    hallEntries.forEach(entry => {
        const entryCategory = entry.dataset.category;

        if (category === "all" || entryCategory === category) {
            entry.classList.remove('hidden-by-filter');
        } else {
            entry.classList.add('hidden-by-filter');
        }
    });
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    const observerOptions = {
        root: document.querySelector('.main-container'), // Observe inside the scrolling container
        rootMargin: "0px 0px -100px 0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".content-section, .product-card, .social-link");
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ===== PARTICULES FLOTTANTES =====
function createParticles() {
    const particleContainer = document.getElementById("particle-container");
    if (!particleContainer) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";

        particle.style.left = `${Math.random() * 100}%`;

        const duration = Math.random() * 10 + 15;
        const delay = Math.random() * 15;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particleContainer.appendChild(particle);
    }
}

// ===== FONCTIONS UTILITAIRES =====
function participateChallenge() {
    const socialLinks = [
        "https://instagram.com/qichallenge",
        "https://facebook.com/qichallenge",
        "https://tiktok.com/@qichallenge"
    ];
    const randomLink = socialLinks[Math.floor(Math.random() * socialLinks.length)];
    window.open(randomLink, "_blank");
    announceToScreenReader("Redirection vers nos réseaux sociaux pour participer aux défis.");
}

function announceToScreenReader(message) {
    const announcements = document.getElementById("sr-announcements");
    if (announcements) {
        announcements.textContent = message;
    }
}

// ===== ACCESSIBILITÉ =====
function initializeAccessibility() {
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeNavMenu();
        }
    });
}

// ===== GESTION DES ERREURS =====
window.addEventListener("error", (e) => {
    console.error("Erreur JavaScript non interceptée:", e.error);
});

// ===== FONCTIONS EXPOSÉES GLOBALEMENT =====
window.scrollToSection = scrollToSection;
window.participateChallenge = participateChallenge;
