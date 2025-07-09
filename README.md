# QI Challenge - Mini-portail Linktree

## 📋 Table des matières

1. [Présentation du projet](#présentation-du-projet)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies utilisées](#technologies-utilisées)
4. [Structure du projet](#structure-du-projet)
5. [Installation et configuration](#installation-et-configuration)
6. [Guide d'utilisation](#guide-dutilisation)
7. [Personnalisation](#personnalisation)
8. [Déploiement](#déploiement)
9. [Accessibilité](#accessibilité)
10. [Performance](#performance)
11. [Maintenance](#maintenance)
12. [Contribution](#contribution)
13. [Licence](#licence)

## 🎯 Présentation du projet

Le mini-portail QI Challenge est une page d'accueil élégante et responsive conçue pour centraliser tous les liens importants de la marque QI Challenge. Ce portail offre une expérience utilisateur moderne et intuitive avec une organisation par catégories, une intégration e-commerce légère et un design minimaliste à couper le souffle.

### Objectifs du projet

Ce projet répond aux besoins suivants :
- **Centralisation des liens** : Regrouper tous les liens importants en un seul endroit
- **Organisation claire** : Structurer les liens par catégories (Réseaux sociaux, Boutique, Contact)
- **Expérience utilisateur optimale** : Interface intuitive avec sections collapsibles
- **Design professionnel** : Esthétique moderne et minimaliste
- **Accessibilité** : Conformité aux standards WCAG 2.1 niveau AA
- **Responsivité** : Adaptation parfaite sur tous les appareils

### Public cible

- **Visiteurs de QI Challenge** : Utilisateurs cherchant à découvrir la marque
- **Communauté existante** : Followers des réseaux sociaux
- **Clients potentiels** : Personnes intéressées par les produits
- **Partenaires** : Contacts professionnels et collaborateurs

## ✨ Fonctionnalités

### Fonctionnalités principales

#### 🔗 Organisation par catégories
- **Réseaux sociaux** : Liens vers Instagram, Facebook, YouTube, TikTok, Threads et Twitter
- **Boutique** : Intégration avec Redbubble et affichage des produits phares
- **Contact** : Informations de contact et bouton d'action direct

#### 🎨 Interface utilisateur
- **Sections collapsibles** : Ouverture/fermeture fluide avec animations
- **Design responsive** : Adaptation automatique mobile, tablette et desktop
- **Effets visuels** : Transitions douces et effets hover subtils
- **Navigation sticky** : Barre de navigation fixe lors du scroll

#### 🛍️ Intégration e-commerce
- **Produits phares** : Affichage de 3 produits sélectionnés
- **Lazy loading** : Chargement optimisé des images
- **Liens directs** : Redirection vers les pages produits Redbubble

#### 📱 Expérience mobile
- **Menu hamburger** : Navigation compacte sur petits écrans
- **Touch-friendly** : Éléments optimisés pour le tactile
- **Performance** : Chargement rapide et fluide

### Fonctionnalités techniques

#### ♿ Accessibilité
- **Navigation clavier** : Support complet de la navigation au clavier
- **Lecteurs d'écran** : Attributs ARIA et annonces vocales
- **Contraste** : Respect des ratios de contraste WCAG
- **Focus visible** : Indicateurs de focus clairs

#### ⚡ Performance
- **Optimisation images** : Lazy loading et formats optimisés
- **CSS optimisé** : Variables CSS et architecture modulaire
- **JavaScript efficace** : Code optimisé avec debouncing et throttling
- **Chargement progressif** : Priorisation du contenu critique

## 🛠️ Technologies utilisées

### Frontend
- **HTML5** : Structure sémantique et accessible
- **CSS3** : Styles modernes avec variables CSS et Flexbox/Grid
- **JavaScript ES6+** : Interactions dynamiques et gestion d'état
- **Intersection Observer API** : Lazy loading et animations au scroll

### Polices et icônes
- **Inter** : Police principale moderne et lisible
- **SVG** : Icônes vectorielles pour les réseaux sociaux
- **Emoji** : Icônes décoratives pour certains éléments

### Outils de développement
- **Git** : Contrôle de version
- **Navigateurs modernes** : Support Chrome, Firefox, Safari, Edge
- **Outils de développement** : DevTools pour le débogage

## 📁 Structure du projet

```
landing/
├── index.html              # Page principale
├── css/
│   └── style.css           # Styles principaux
├── js/
│   └── main.js            # Scripts JavaScript
├── assets/
│   ├── favicon.ico        # Icône du site
│   ├── qi_white_white_bg.png  # Logo QI Challenge
│   ├── product_6.jpg      # Image produit 1
│   ├── product_7.jpg      # Image produit 2
│   ├── product_8.jpg      # Image produit 3
│   └── social-icons/      # Icônes des réseaux sociaux
│       ├── facebook.svg
│       ├── instagram.svg
│       ├── threads.svg
│       ├── tiktok.svg
│       ├── twitter.svg
│       └── youtube.svg
├── README.md              # Documentation (ce fichier)
└── CNAME                  # Configuration domaine (GitHub Pages)
```

### Description des fichiers

#### `index.html`
Fichier principal contenant la structure HTML sémantique du site. Utilise des balises appropriées pour l'accessibilité et inclut tous les métadonnées nécessaires.

#### `css/style.css`
Feuille de style principale avec :
- Variables CSS pour la cohérence
- Architecture modulaire par composants
- Media queries pour la responsivité
- Animations et transitions fluides

#### `js/main.js`
Script principal gérant :
- Interactions utilisateur (sections collapsibles, menu mobile)
- Lazy loading des images
- Accessibilité (navigation clavier, annonces)
- Performance (debouncing, throttling)

#### `assets/`
Dossier contenant toutes les ressources :
- Images optimisées pour le web
- Icônes SVG vectorielles
- Logo de la marque

## 🚀 Installation et configuration

### Prérequis

- **Navigateur moderne** : Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Serveur web** (optionnel) : Pour le développement local
- **Éditeur de code** : VS Code, Sublime Text, ou autre

### Installation locale

1. **Télécharger le projet**
   ```bash
   # Cloner le repository
   git clone [URL_DU_REPOSITORY]
   cd landing
   ```

2. **Ouvrir le projet**
   ```bash
   # Ouvrir directement dans le navigateur
   open index.html
   
   # Ou utiliser un serveur local (recommandé)
   python -m http.server 8000
   # Puis ouvrir http://localhost:8000
   ```

3. **Vérifier le fonctionnement**
   - Tester les sections collapsibles
   - Vérifier la responsivité
   - Contrôler les liens externes

### Configuration

#### Personnalisation des liens

Modifier les URLs dans `index.html` :

```html
<!-- Réseaux sociaux -->
<a href="https://instagram.com/VOTRE_COMPTE" target="_blank">
<a href="https://facebook.com/VOTRE_PAGE" target="_blank">

<!-- Boutique -->
<a href="https://VOTRE_BOUTIQUE.redbubble.com" target="_blank">

<!-- Contact -->
<a href="mailto:VOTRE_EMAIL@domaine.com" class="contact-button">
```

#### Modification des couleurs

Ajuster les variables CSS dans `style.css` :

```css
:root {
  --color-primary: #1a1a1a;        /* Couleur principale */
  --color-accent: #d4af37;          /* Couleur d'accent */
  --color-accent-alt: #8b1538;     /* Couleur alternative */
}
```

#### Remplacement des images

1. **Logo** : Remplacer `assets/qi_white_white_bg.png`
2. **Produits** : Remplacer `assets/product_*.jpg`
3. **Icônes** : Modifier les SVG dans `assets/social-icons/`

## 📖 Guide d'utilisation

### Navigation

#### Menu principal
- **Réseaux** : Accès rapide aux réseaux sociaux
- **Boutique** : Découverte des produits
- **Contact** : Informations de contact

#### Sections collapsibles
- Cliquer sur l'icône flèche pour ouvrir/fermer
- Navigation clavier avec Tab et Entrée
- Animations fluides lors des transitions

### Interactions

#### Réseaux sociaux
- Clic sur une icône → Ouverture dans un nouvel onglet
- Effet hover avec changement de couleur
- Labels accessibles pour les lecteurs d'écran

#### Boutique
- **Bouton principal** : Accès à la boutique complète
- **Produits phares** : Aperçu avec images et descriptions
- **Lazy loading** : Images chargées à la demande

#### Contact
- **Email affiché** : Copie possible par sélection
- **Bouton contact** : Ouverture de l'application mail
- **Accessibilité** : Support des lecteurs d'écran

### Responsive design

#### Mobile (< 768px)
- Menu hamburger automatique
- Grille adaptée pour les réseaux sociaux
- Boutons optimisés pour le tactile

#### Tablette (768px - 1024px)
- Layout intermédiaire
- Grille flexible
- Navigation standard

#### Desktop (> 1024px)
- Affichage complet
- Effets hover avancés
- Navigation horizontale

## 🎨 Personnalisation

### Modification du design

#### Palette de couleurs

Le site utilise un système de variables CSS pour faciliter la personnalisation :

```css
:root {
  /* Couleurs principales */
  --color-primary: #1a1a1a;        /* Noir profond */
  --color-secondary: #ffffff;       /* Blanc pur */
  --color-accent: #d4af37;          /* Doré */
  --color-accent-alt: #8b1538;     /* Bordeaux */
  
  /* Couleurs de texte */
  --color-text: #333333;           /* Texte principal */
  --color-text-light: #666666;     /* Texte secondaire */
  --color-text-muted: #999999;     /* Texte atténué */
  
  /* Couleurs d'interface */
  --color-border: #e5e5e5;         /* Bordures */
  --color-background: #fafafa;     /* Arrière-plan */
  --color-card: #ffffff;           /* Cartes */
  --color-shadow: rgba(0, 0, 0, 0.1); /* Ombres */
}
```

#### Typographie

Modification de la police principale :

```css
:root {
  --font-family: 'Votre-Police', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

Ajout dans le `<head>` :

```html
<link href="https://fonts.googleapis.com/css2?family=Votre-Police:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

#### Espacements et tailles

```css
:root {
  /* Tailles de police */
  --font-size-base: 1rem;          /* 16px */
  --font-size-lg: 1.125rem;        /* 18px */
  --font-size-xl: 1.25rem;         /* 20px */
  
  /* Espacements */
  --spacing-md: 1rem;              /* 16px */
  --spacing-lg: 1.5rem;            /* 24px */
  --spacing-xl: 2rem;              /* 32px */
  
  /* Rayons de bordure */
  --border-radius-md: 0.5rem;      /* 8px */
  --border-radius-lg: 0.75rem;     /* 12px */
}
```

### Ajout de nouvelles sections

#### Structure HTML

```html
<section id="nouvelle-section" class="content-section">
  <div class="section-header">
    <h2 class="section-title">Nouvelle Section</h2>
    <button class="section-toggle" aria-expanded="false" aria-controls="nouvelle-section-content">
      <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6,9 12,15 18,9"></polyline>
      </svg>
    </button>
  </div>
  <div id="nouvelle-section-content" class="section-content collapsed">
    <!-- Contenu de la section -->
  </div>
</section>
```

#### Mise à jour JavaScript

Ajouter dans `main.js` :

```javascript
// La section sera automatiquement détectée par initializeSections()
// Aucune modification nécessaire si la structure HTML est respectée
```

#### Styles CSS

```css
/* Styles spécifiques à la nouvelle section */
#nouvelle-section .section-content {
  /* Styles personnalisés */
}
```

### Modification des produits

#### Remplacement des images

1. Ajouter les nouvelles images dans `assets/`
2. Modifier les références dans `index.html` :

```html
<article class="product-card" data-lazy="true">
  <a href="LIEN_VERS_PRODUIT" target="_blank" class="product-link">
    <div class="product-image-container">
      <img src="assets/nouveau-produit.jpg" alt="Description du produit" class="product-image" loading="lazy">
    </div>
    <div class="product-info">
      <h4 class="product-title">Nom du produit</h4>
      <p class="product-type">Type de produit</p>
    </div>
  </a>
</article>
```

#### Ajout de produits

Pour ajouter plus de 3 produits, dupliquer la structure `product-card` dans la grille existante.

### Personnalisation des animations

#### Durée des transitions

```css
:root {
  --transition-fast: 0.15s ease-in-out;
  --transition-normal: 0.3s ease-in-out;
  --transition-slow: 0.5s ease-in-out;
}
```

#### Effets hover personnalisés

```css
.custom-hover-effect:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  transition: all var(--transition-normal);
}
```

## 🌐 Déploiement

### GitHub Pages

#### Configuration automatique

1. **Pousser le code sur GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Activer GitHub Pages**
   - Aller dans Settings > Pages
   - Source : Deploy from a branch
   - Branch : main / (root)
   - Sauvegarder

3. **Domaine personnalisé (optionnel)**
   - Ajouter un fichier `CNAME` avec votre domaine
   - Configurer les DNS chez votre registrar

#### Structure pour GitHub Pages

```
repository/
├── index.html          # Page d'accueil
├── css/
├── js/
├── assets/
├── CNAME              # Domaine personnalisé
└── README.md
```

### Autres plateformes

#### Netlify

1. **Déploiement par glisser-déposer**
   - Zipper le dossier du projet
   - Glisser sur netlify.com/drop

2. **Déploiement Git**
   - Connecter le repository GitHub
   - Configuration automatique

#### Vercel

```bash
# Installation de Vercel CLI
npm i -g vercel

# Déploiement
vercel --prod
```

#### Serveur traditionnel

1. **Upload par FTP/SFTP**
   - Transférer tous les fichiers
   - Respecter la structure des dossiers

2. **Configuration serveur**
   - Activer la compression gzip
   - Configurer les headers de cache
   - Redirection HTTPS

### Optimisations pour la production

#### Compression des images

```bash
# Optimisation avec ImageOptim, TinyPNG, ou outils similaires
# Formats recommandés : WebP avec fallback JPEG/PNG
```

#### Minification

```bash
# CSS
cssnano style.css style.min.css

# JavaScript
terser main.js -o main.min.js
```

#### Configuration serveur

```apache
# .htaccess pour Apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/css text/javascript application/javascript
</IfModule>

<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## ♿ Accessibilité

### Standards respectés

#### WCAG 2.1 Niveau AA

Le site respecte les critères d'accessibilité suivants :

**Perceptible**
- Contraste de couleur ≥ 4.5:1 pour le texte normal
- Contraste de couleur ≥ 3:1 pour le texte large
- Images avec attributs `alt` descriptifs
- Contenu adaptable sans perte d'information

**Utilisable**
- Navigation complète au clavier
- Pas de piège au clavier
- Temps de réponse appropriés
- Pas de contenu clignotant

**Compréhensible**
- Langue de la page définie (`lang="fr"`)
- Navigation cohérente
- Identification des erreurs
- Étiquettes et instructions claires

**Robuste**
- Code HTML valide
- Compatibilité avec les technologies d'assistance
- Attributs ARIA appropriés

### Fonctionnalités d'accessibilité

#### Navigation clavier

```javascript
// Support des touches clavier
document.addEventListener('keydown', (e) => {
  // Échapper pour fermer les menus
  if (e.key === 'Escape') {
    // Fermer menu mobile ou sections
  }
  
  // Entrée/Espace pour activer les boutons
  if (e.key === 'Enter' || e.key === ' ') {
    // Activer l'élément focusé
  }
  
  // Tab pour naviguer
  if (e.key === 'Tab') {
    // Gestion du focus visible
  }
});
```

#### Attributs ARIA

```html
<!-- Boutons avec état -->
<button aria-expanded="false" aria-controls="section-content">
  Ouvrir la section
</button>

<!-- Contenu contrôlé -->
<div id="section-content" aria-hidden="true">
  Contenu de la section
</div>

<!-- Liens avec description -->
<a href="..." aria-label="Ouvrir Instagram dans un nouvel onglet">
  <img src="instagram.svg" alt="Instagram">
</a>
```

#### Annonces pour lecteurs d'écran

```javascript
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
```

### Tests d'accessibilité

#### Outils recommandés

1. **axe DevTools** : Extension navigateur pour audit automatique
2. **WAVE** : Évaluation en ligne de l'accessibilité
3. **Lighthouse** : Audit intégré dans Chrome DevTools
4. **Screen Reader** : Test avec NVDA, JAWS, ou VoiceOver

#### Checklist de validation

- [ ] Navigation complète au clavier
- [ ] Tous les éléments interactifs sont focusables
- [ ] Focus visible sur tous les éléments
- [ ] Attributs `alt` sur toutes les images
- [ ] Attributs ARIA appropriés
- [ ] Contraste suffisant (4.5:1 minimum)
- [ ] Pas de contenu clignotant
- [ ] Structure de titres logique (h1, h2, h3...)
- [ ] Formulaires avec labels associés
- [ ] Liens avec texte descriptif

## ⚡ Performance

### Métriques cibles

#### Core Web Vitals

- **LCP (Largest Contentful Paint)** : < 2.5s
- **FID (First Input Delay)** : < 100ms
- **CLS (Cumulative Layout Shift)** : < 0.1

#### Autres métriques

- **FCP (First Contentful Paint)** : < 1.8s
- **TTI (Time to Interactive)** : < 3.8s
- **Speed Index** : < 3.4s

### Optimisations implémentées

#### Images

```javascript
// Lazy loading avec Intersection Observer
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add('loaded');
      imageObserver.unobserve(img);
    }
  });
});
```

#### JavaScript

```javascript
// Debouncing pour les événements fréquents
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

// Throttling pour le scroll
const optimizedScroll = throttle(() => {
  // Animations de scroll
}, 16); // ~60fps
```

#### CSS

```css
/* Optimisation des animations */
.element {
  will-change: transform;
  transform: translateZ(0); /* Force GPU acceleration */
}

/* Préchargement des ressources critiques */
.hero::before {
  content: '';
  /* Texture de fond en data URI pour éviter une requête HTTP */
}
```

### Monitoring

#### Outils de mesure

1. **Google PageSpeed Insights** : Analyse complète
2. **GTmetrix** : Métriques détaillées
3. **WebPageTest** : Tests avancés
4. **Lighthouse CI** : Intégration continue

#### Métriques à surveiller

```javascript
// Performance API
window.addEventListener('load', () => {
  const perfData = performance.getEntriesByType('navigation')[0];
  console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart);
  console.log('Load Complete:', perfData.loadEventEnd - perfData.loadEventStart);
});
```

### Optimisations futures

#### Préchargement

```html
<!-- Préchargement des ressources critiques -->
<link rel="preload" href="assets/qi_white_white_bg.png" as="image">
<link rel="preload" href="css/style.css" as="style">
<link rel="preload" href="js/main.js" as="script">
```

#### Service Worker

```javascript
// Cache des ressources statiques
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('qi-challenge-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/css/style.css',
        '/js/main.js',
        '/assets/qi_white_white_bg.png'
      ]);
    })
  );
});
```

#### Compression

```javascript
// Compression Brotli/Gzip côté serveur
// Configuration dans .htaccess ou nginx.conf
```

## 🔧 Maintenance

### Mises à jour régulières

#### Contenu

1. **Produits phares** : Mise à jour trimestrielle
2. **Liens réseaux sociaux** : Vérification mensuelle
3. **Informations de contact** : Révision semestrielle

#### Technique

1. **Sécurité** : Audit annuel
2. **Performance** : Monitoring continu
3. **Accessibilité** : Test semestriel
4. **Compatibilité navigateurs** : Vérification trimestrielle

### Sauvegarde

#### Code source

```bash
# Sauvegarde Git
git push origin main
git tag -a v1.0 -m "Version 1.0"
git push origin v1.0
```

#### Assets

```bash
# Sauvegarde des fichiers
rsync -av assets/ backup/assets/
```

### Monitoring

#### Uptime

```javascript
// Service de monitoring (ex: UptimeRobot, Pingdom)
// Vérification toutes les 5 minutes
```

#### Erreurs

```javascript
// Logging des erreurs JavaScript
window.addEventListener('error', (e) => {
  // Envoyer à un service de monitoring
  console.error('Erreur:', e.error);
});
```

### Changelog

#### Format recommandé

```markdown
## [1.1.0] - 2025-07-15

### Ajouté
- Nouveau produit dans la section boutique
- Animation d'entrée pour les sections

### Modifié
- Amélioration du contraste pour l'accessibilité
- Optimisation des images (réduction de 30% du poids)

### Corrigé
- Bug d'affichage du menu mobile sur iOS Safari
- Problème de focus sur les boutons de section
```

## 🤝 Contribution

### Guidelines

#### Code style

```javascript
// Conventions JavaScript
const functionName = () => {
  // Utiliser camelCase
  // Commentaires explicites
  // Gestion d'erreur appropriée
};
```

```css
/* Conventions CSS */
.component-name {
  /* Utiliser kebab-case */
  /* Propriétés groupées logiquement */
  /* Commentaires pour les sections */
}
```

#### Commits

```bash
# Format des messages de commit
git commit -m "type(scope): description"

# Exemples
git commit -m "feat(ui): ajouter animation de chargement"
git commit -m "fix(mobile): corriger menu hamburger"
git commit -m "docs(readme): mettre à jour guide installation"
```

#### Pull Requests

1. **Fork** du repository
2. **Branche** dédiée pour la fonctionnalité
3. **Tests** de non-régression
4. **Documentation** mise à jour
5. **Review** par un mainteneur

### Roadmap

#### Version 1.1 (Q3 2025)
- [ ] Mode sombre/clair
- [ ] Animations avancées
- [ ] PWA (Progressive Web App)
- [ ] Intégration analytics

#### Version 1.2 (Q4 2025)
- [ ] Multilingue (EN/FR)
- [ ] Personnalisation utilisateur
- [ ] API pour gestion de contenu
- [ ] Tests automatisés

#### Version 2.0 (2026)
- [ ] Refonte avec framework moderne
- [ ] Backend pour gestion dynamique
- [ ] Dashboard d'administration
- [ ] Intégrations avancées

## 📄 Licence

### MIT License

```
MIT License

Copyright (c) 2025 QI Challenge

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### Crédits

- **Design et développement** : Bennio
- **Marque QI Challenge** : Propriété de QI Challenge
- **Police Inter** : Rasmus Andersson (SIL Open Font License)
- **Icônes réseaux sociaux** : Adaptées des logos officiels

---

## 📞 Support

Pour toute question ou problème :

- **Email** : contact@qichallenge.com
- **Documentation** : Ce fichier README.md
- **Issues** : GitHub Issues du repository

---

*Dernière mise à jour : 9 juillet 2025*
*Version : 1.0.0*

