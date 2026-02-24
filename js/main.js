/**
 * MAIN.JS - Portfolio
 * Gestisce: Menu hamburger responsive + Photo carousel
 */

document.addEventListener('DOMContentLoaded', function() {
  // ========================================
  // HAMBURGER MENU
  // ========================================
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav-mobile .nav-link');

  console.log('✓ Script caricato');
  console.log('✓ menuToggle trovato:', menuToggle ? 'SI' : 'NO');
  console.log('✓ mobileMenu trovato:', mobileMenu ? 'SI' : 'NO');

  // Toggle menu al click
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('☰ Click sul menu - toggle stato');
      menuToggle.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    // Chiudi menu quando clicchi su un link
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });

    // Chiudi menu quando scrolli
    window.addEventListener('scroll', function() {
      if (mobileMenu.classList.contains('open')) {
        menuToggle.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
    }, { passive: true });

    // Chiudi menu su resize (se torna a desktop)
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 768) {
        menuToggle.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
    });

    // Chiudi menu con ESC
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && mobileMenu.classList.contains('open')) {
        menuToggle.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
    });
  }

  // ========================================
  // PHOTO CAROUSEL
  // ========================================
  const photoCarousel = document.getElementById('photoCarousel');
  if (!photoCarousel) return;

  const carouselTrack = document.getElementById('carouselTrack');
  const slides = document.querySelectorAll('.carousel-slide');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (!carouselTrack || slides.length === 0) {
    console.error('✗ Carousel elements not found');
    return;
  }

  let currentIndex = 0;
  let autoplayInterval;
  const autoplayDelay = 5000;

  function updateCarousel() {
    const offset = currentIndex * -100;
    carouselTrack.style.transform = `translateX(${offset}%)`;
    
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    updateCarousel();
    resetAutoplay();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, autoplayDelay);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  // Event listeners
  prevBtn?.addEventListener('click', prevSlide);
  nextBtn?.addEventListener('click', nextSlide);

  indicators.forEach((indicator) => {
    indicator.addEventListener('click', function() {
      goToSlide(parseInt(this.dataset.index));
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (photoCarousel.offsetParent === null) return;
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  photoCarousel.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].clientX;
  }, false);

  photoCarousel.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  }, false);

  // Pause autoplay su hover
  photoCarousel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
  photoCarousel.addEventListener('mouseleave', startAutoplay);

  console.log('✓ Carousel inizializzato con', slides.length, 'foto');
  updateCarousel();
  startAutoplay();
});
