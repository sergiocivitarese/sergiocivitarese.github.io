/**
 * MENU.JS
 * Script per la gestione del menu hamburger responsivo
 * Mostra/nasconde il menu mobile al click del bottone hamburger
 */

// Seleziona gli elementi dal DOM
const menuToggle = document.getElementById('menuToggle');
const navMobile = document.getElementById('navMobile');

/**
 * Funzione per toggle (aprire/chiudere) il menu mobile
 * Aggiunge/rimuove la classe 'active' al menu
 */
function toggleMenu() {
  // Toggle della classe 'active' sul menu mobile
  navMobile.classList.toggle('active');

  // Toggle della classe 'active' sul bottone hamburger (per animazione)
  menuToggle.classList.toggle('active');
}

/**
 * Funzione per chiudere il menu
 * Utile quando l'utente clicca su un link di navigazione
 */
function closeMenu() {
  navMobile.classList.remove('active');
  menuToggle.classList.remove('active');
}

/**
 * Event listener: click sul bottone hamburger
 * Apre/chiude il menu al click
 */
menuToggle.addEventListener('click', toggleMenu);

/**
 * Event listener: click su link di navigazione nel menu mobile
 * Chiude il menu quando l'utente clicca su un link
 */
const navLinks = navMobile.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

/**
 * BONUS: Chiudi il menu quando l'utente clicca fuori dal menu
 * Utile per migliorare l'UX su mobile
 */
document.addEventListener('click', function(event) {
  // Se il click NON è sul menu e NON è sul bottone hamburger, chiudi il menu
  if (!navMobile.contains(event.target) && !menuToggle.contains(event.target)) {
    closeMenu();
  }
});

/**
 * BONUS: Chiudi il menu quando si fa resize della finestra
 * Utile quando l'utente ridimensiona il browser (da mobile a desktop)
 */
window.addEventListener('resize', function() {
  // Se la finestra è abbastanza grande (768px o più), chiudi il menu mobile
  if (window.innerWidth >= 768) {
    closeMenu();
  }
});

/**
 * BONUS: Supporto keyboard - premi ESC per chiudere il menu
 * Migliora l'accessibilità del sito
 */
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeMenu();
  }
});
