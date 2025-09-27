# QI Challenge - Mini-Portail Néon Futuriste

## 🧠 Plateforme d'Éveil Intellectuel et de Développement Personnel

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/qichallenge/mini-portal)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Responsive](https://img.shields.io/badge/responsive-yes-brightgreen.svg)](https://github.com/qichallenge/mini-portal)
[![Accessibility](https://img.shields.io/badge/accessibility-WCAG%202.1%20AA-blue.svg)](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 📋 Table des Matières

1. [Présentation](#-présentation)
2. [Fonctionnalités](#-fonctionnalités)
3. [Technologies Utilisées](#-technologies-utilisées)
4. [Installation](#-installation)
5. [Structure du Projet](#-structure-du-projet)
6. [Configuration](#-configuration)
7. [Déploiement](#-déploiement)
8. [Personnalisation](#-personnalisation)
9. [Accessibilité](#-accessibilité)
10. [Performance](#-performance)
11. [Maintenance](#-maintenance)
12. [Support](#-support)
13. [Licence](#-licence)

---

## 🎯 Présentation

Le **QI Challenge Mini-Portail** est une plateforme web moderne et interactive dédiée à l'éveil intellectuel et au développement personnel. Conçu avec un style **Néon Futuriste** époustouflant, ce mini-portail centralise tous les liens importants de QI Challenge dans une interface unique, élégante et responsive.

### 🌟 Vision

QI Challenge transforme l'apprentissage en jeu accessible à tous, proposant chaque jour des énigmes, quiz, anecdotes et défis stimulants pour entraîner l'esprit et développer l'intelligence de manière ludique et éducative.

### 🎨 Design Philosophy

Le design s'inspire de l'univers cyberpunk et de la science-fiction, créant une ambiance "Matrix" où l'intelligence devient un jeu visuel et vibrant. Chaque élément graphique contribue à une expérience utilisateur immersive et futuriste.

---

## ⚡ Fonctionnalités

### 🌐 Réseaux Sociaux Intégrés
- **7 plateformes connectées** : Instagram, Facebook, YouTube, TikTok, Threads, Twitter, Twitch
- **Icônes SVG optimisées** avec effets hover néon
- **Liens directs** vers tous les comptes QI Challenge
- **Boutons "Rejoignez-nous"** interactifs pour chaque plateforme

### 🛍️ Boutique E-commerce Légère
- **Intégration Redbubble** avec lien direct vers la boutique principale
- **Vignettes produits** : T-shirts, Stickers, Mugs QI Challenge
- **Images optimisées** en format WebP pour des performances maximales
- **Liens directs** vers chaque page produit

### 📖 Journal du Génie
- **Intégration Gumroad** pour le "Planner du Génie Quotidien - Volume 1"
- **Aperçu visuel** du journal avec image de couverture
- **Caractéristiques** : 30 défis DI, Pensées positives, PDF téléchargeable
- **Prix affiché** : 7,90€

### 🔥 Posts Viraux Carousel
- **Carousel interactif** avec navigation fluide
- **Embeds authentiques** :
  - Instagram : Posts avec métriques (12.5K likes, 847 commentaires)
  - Facebook : Intégration iframe officielle
  - TikTok : Code embed officiel avec script
- **Indicateurs visuels** : VIRAL, HOT, TRENDING
- **Navigation** : Boutons précédent/suivant + indicateurs

### 🏆 Hall of Fame Interactif
- **Système de filtrage avancé** par catégories :
  - 🧠 Décodeurs (3 entrées)
  - 🎭 Les plus drôles
  - 💡 Créatifs (1 entrée)
  - 📣 Ambassadeurs (1 entrée)
- **Tableau responsive** avec animations d'apparition
- **Données réelles** de la communauté QI Challenge
- **Filtrage instantané** sans rechargement de page

### 📧 Contact Professionnel Dual
- **Contact Général** : contact@qichallenge.com
- **Partenariats** : partenariats@qichallenge.com
- **Boutons mailto** avec ouverture automatique du client mail
- **Informations** : Réponse sous 24h, Support multilingue (FR/EN)

### 🎮 Animations et Effets Visuels
- **Animation de chargement** avec cerveau pulsant et compteur IQ (0-200)
- **Particules flottantes** : 50 particules animées en continu
- **Vagues lumineuses** : 3 couches d'animation en arrière-plan
- **Effets hover** sur tous les éléments interactifs
- **Transitions fluides** entre les sections

---

## 🛠️ Technologies Utilisées

### Frontend Core
- **HTML5** : Structure sémantique et accessible
- **CSS3** : Animations, Grid, Flexbox, Variables CSS
- **JavaScript ES6+** : Modules, Async/Await, DOM moderne

### Frameworks et Librairies
- **Aucune dépendance externe** : Code vanilla pour des performances optimales
- **CSS Grid & Flexbox** : Layout responsive natif
- **Intersection Observer API** : Animations au scroll performantes

### Optimisations
- **WebP Images** : Format d'image moderne pour un chargement rapide
- **SVG Icons** : Icônes vectorielles scalables
- **CSS Variables** : Thème cohérent et maintenable
- **Lazy Loading** : Chargement différé des images

### Accessibilité
- **WCAG 2.1 AA** : Conformité aux standards d'accessibilité
- **ARIA Labels** : Navigation assistée pour lecteurs d'écran
- **Focus Management** : Navigation au clavier optimisée
- **Contraste élevé** : Lisibilité garantie

---

## 🚀 Installation

### Prérequis
- Navigateur web moderne (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
- Serveur web local (optionnel pour le développement)

### Installation Rapide

```bash
# Cloner le repository
git clone https://github.com/qichallenge/mini-portal.git

# Naviguer dans le dossier
cd mini-portal

# Ouvrir dans le navigateur
open index.html
```

### Installation avec Serveur Local

```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js
npx serve .

# Avec PHP
php -S localhost:8000
```

Accéder à `http://localhost:8000` dans votre navigateur.

---

## 📁 Structure du Projet

```
qi-challenge-portal/
├── index.html                 # Page principale
├── mentions-legales.html      # Page mentions légales (RGPD)
├── confidentialite.html       # Politique de confidentialité
├── README.md                  # Documentation
├── css/
│   └── style.css             # Styles principaux (Néon Futuriste)
├── js/
│   └── main.js               # JavaScript principal
├── assets/
│   ├── images/
│   │   ├── products/         # Images produits boutique
│   │   │   ├── product_1.webp
│   │   │   ├── product_2.webp
│   │   │   └── product_3.webp
│   │   └── journal/
│   │       └── gumroad_journal.jpg
│   └── social-icons/         # Icônes SVG réseaux sociaux
│       ├── instagram.svg
│       ├── facebook.svg
│       ├── youtube.svg
│       ├── tiktok.svg
│       ├── threads.svg
│       ├── twitter.svg
│       └── twitch.svg
└── docs/
    ├── DEPLOYMENT.md         # Guide de déploiement
    └── CUSTOMIZATION.md      # Guide de personnalisation
```

---

## ⚙️ Configuration

### Variables CSS Personnalisables

Le fichier `css/style.css` utilise des variables CSS pour faciliter la personnalisation :

```css
:root {
  /* Couleurs Néon Futuriste */
  --color-electric-blue: #00d4ff;
  --color-neon-purple: #8a2be2;
  --color-hot-pink: #ff0096;
  --color-neon-gold: #ffd700;
  --color-brilliant-black: #0a0a0a;
  
  /* Typographie */
  --font-primary: 'Orbitron', monospace;
  --font-secondary: 'Exo 2', sans-serif;
  
  /* Espacements */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}
```

### Configuration JavaScript

Le fichier `js/main.js` contient des variables configurables :

```javascript
// Configuration du carousel
const totalSlides = 3;

// Configuration des particules
const particleCount = 50;

// Configuration de l'animation de chargement
const targetIQ = 200;
const loadingDuration = 3000; // 3 secondes
```

---

## 🌐 Déploiement

### GitHub Pages (Recommandé)

1. **Fork** le repository sur GitHub
2. Aller dans **Settings** > **Pages**
3. Sélectionner **Source** : Deploy from a branch
4. Choisir **Branch** : main / root
5. Cliquer sur **Save**

Votre site sera disponible à : `https://username.github.io/qi-challenge-portal`

### Netlify

1. Connecter votre repository GitHub à Netlify
2. **Build command** : (laisser vide)
3. **Publish directory** : (laisser vide ou `/`)
4. Cliquer sur **Deploy site**

### Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
```

### Hébergement Traditionnel

1. Compresser tous les fichiers en ZIP
2. Uploader sur votre hébergeur via FTP/cPanel
3. Extraire dans le dossier public_html
4. Configurer les permissions si nécessaire

---

## 🎨 Personnalisation

### Modifier les Couleurs

Pour changer le thème de couleurs, modifiez les variables CSS dans `style.css` :

```css
:root {
  --color-electric-blue: #your-color;
  --color-neon-purple: #your-color;
  --color-hot-pink: #your-color;
}
```

### Ajouter des Produits

1. Ajouter l'image dans `assets/images/products/`
2. Modifier le HTML dans la section boutique :

```html
<div class="product-card">
  <img src="assets/images/products/nouveau-produit.webp" alt="Nouveau Produit">
  <h4>Nouveau Produit</h4>
  <p>Description du produit</p>
  <a href="lien-redbubble" class="product-link">Voir le produit</a>
</div>
```

### Modifier le Hall of Fame

Éditer le tableau dans `index.html` section Hall of Fame :

```html
<tr class="hall-entry" data-category="decodeur">
  <td class="rank-cell">
    <div class="rank-badge">6</div>
  </td>
  <td class="genius-cell">
    <div class="genius-info">
      <div class="genius-avatar">
        <img src="avatar.jpg" alt="Avatar">
      </div>
      <div class="genius-details">
        <h4>Nom Utilisateur</h4>
        <span class="genius-handle">(@handle)</span>
      </div>
    </div>
  </td>
  <td class="category-cell">
    <span class="category-badge decodeur">🧠 Décodeur</span>
  </td>
  <td class="exploit-cell">Description de l'exploit</td>
  <td class="date-cell">Date</td>
</tr>
```

---

## ♿ Accessibilité

### Standards Respectés

- **WCAG 2.1 AA** : Niveau de conformité atteint
- **Section 508** : Compatible avec les exigences gouvernementales US
- **EN 301 549** : Conforme aux standards européens

### Fonctionnalités d'Accessibilité

#### Navigation au Clavier
- **Tab** : Navigation entre les éléments
- **Enter/Space** : Activation des boutons
- **Escape** : Fermeture des menus
- **Flèches** : Navigation dans le carousel

#### Lecteurs d'Écran
- **ARIA Labels** : Descriptions complètes
- **Live Regions** : Annonces des changements
- **Semantic HTML** : Structure logique
- **Alt Text** : Descriptions d'images

#### Contraste et Visibilité
- **Ratio de contraste** : Minimum 4.5:1 pour le texte normal
- **Focus visible** : Indicateurs clairs
- **Taille de police** : Minimum 16px
- **Zone de clic** : Minimum 44x44px

### Tests d'Accessibilité

```bash
# Avec axe-core
npm install -g @axe-core/cli
axe https://votre-site.com

# Avec Pa11y
npm install -g pa11y
pa11y https://votre-site.com
```

---

## ⚡ Performance

### Métriques Cibles

- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1
- **First Input Delay** : < 100ms

### Optimisations Implémentées

#### Images
- **Format WebP** : Réduction de 25-35% de la taille
- **Lazy Loading** : Chargement différé
- **Responsive Images** : Adaptation aux écrans
- **Compression** : Optimisation sans perte de qualité

#### CSS
- **Minification** : Suppression des espaces inutiles
- **Critical CSS** : Styles critiques inline
- **CSS Variables** : Réduction de la duplication
- **Autoprefixer** : Compatibilité navigateurs

#### JavaScript
- **ES6+ Moderne** : Code optimisé
- **Event Delegation** : Gestion efficace des événements
- **Debouncing** : Limitation des appels fréquents
- **Intersection Observer** : Animations performantes

### Monitoring

```javascript
// Performance monitoring
window.addEventListener('load', () => {
  const perfData = performance.getEntriesByType('navigation')[0];
  console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart);
});
```

---

## 🔧 Maintenance

### Mises à Jour Régulières

#### Contenu
- **Hall of Fame** : Mise à jour mensuelle des membres
- **Posts Viraux** : Rotation hebdomadaire du contenu
- **Produits Boutique** : Ajout de nouveaux articles
- **Métriques Sociales** : Actualisation des statistiques

#### Technique
- **Sécurité** : Vérification des vulnérabilités
- **Performance** : Optimisation continue
- **Compatibilité** : Tests sur nouveaux navigateurs
- **Accessibilité** : Audits réguliers

### Sauvegarde

```bash
# Sauvegarde complète
tar -czf qi-challenge-backup-$(date +%Y%m%d).tar.gz .

# Sauvegarde base de données (si applicable)
mysqldump -u user -p database > backup.sql
```

### Monitoring

#### Google Analytics 4
```javascript
// Configuration GA4
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: 'QI Challenge Portal',
  page_location: window.location.href
});
```

#### Search Console
- **Indexation** : Vérification des pages indexées
- **Performance** : Suivi des clics et impressions
- **Erreurs** : Détection des problèmes techniques

---

## 📞 Support

### Contact Technique
- **Email** : contact@qichallenge.com
- **Réponse** : Sous 24h ouvrées
- **Langues** : Français, Anglais

### Documentation
- **GitHub Issues** : Signalement de bugs
- **Wiki** : Documentation détaillée
- **Changelog** : Historique des versions

### Communauté
- **Discord** : Support communautaire
- **Forum** : Discussions techniques
- **Newsletter** : Mises à jour importantes

---

## 📄 Licence

### MIT License

```
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

---

## 🙏 Remerciements

- **Équipe QI Challenge** : Vision et contenu
- **Communauté** : Feedback et suggestions
- **Contributors** : Améliorations et corrections
- **Open Source** : Inspiration et outils

---

## 📈 Roadmap

### Version 2.1 (Q2 2025)
- [ ] Mode sombre/clair
- [ ] PWA (Progressive Web App)
- [ ] Notifications push
- [ ] Géolocalisation des défis

### Version 2.2 (Q3 2025)
- [ ] Intégration API Instagram
- [ ] Chat en temps réel
- [ ] Système de points
- [ ] Classements dynamiques

### Version 3.0 (Q4 2025)
- [ ] Application mobile native
- [ ] Intelligence artificielle
- [ ] Réalité augmentée
- [ ] Blockchain integration

---

**Développé avec 🧠 par l'équipe QI Challenge**

*Transformons l'intelligence en jeu accessible à tous !*

