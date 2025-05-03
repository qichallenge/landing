// Affiche automatiquement l'année en cours
const yearElem = document.getElementById('year');
if (yearElem) yearElem.textContent = new Date().getFullYear();