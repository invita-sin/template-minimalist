document.addEventListener('DOMContentLoaded', function () {
  /* ============ SCROLL LOCK + BUKA UNDANGAN ============ */
  var html = document.documentElement;
  var body = document.body;
  html.classList.add('is-locked');
  body.classList.add('is-locked');

  var coverBtn = document.querySelector('.cover-btn');
  if (coverBtn) {
    coverBtn.addEventListener('click', function (e) {
      e.preventDefault();
      coverBtn.classList.add('is-clicked');
      document.getElementById('cover').classList.add('is-hidden');

      setTimeout(function () {
        html.classList.remove('is-locked');
        body.classList.remove('is-locked');
        document.getElementById('couple').scrollIntoView({ behavior: 'smooth' });
      }, 700);
    });
  }

  /* ============ COUNTDOWN ============ */
  var countdownEl = document.getElementById('countdown');
  var weddingDate = countdownEl ? countdownEl.getAttribute('data-wedding-date') : null;

  if (weddingDate) {
    var target = new Date(weddingDate).getTime();

    function updateCountdown() {
      var now = new Date().getTime();
      var diff = target - now;

      if (diff <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
      }

      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('days').textContent = String(days).padStart(2, '0');
      document.getElementById('hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* ============ LIGHTBOX ============ */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var galleryImgs = document.querySelectorAll('.gallery-grid img');

  galleryImgs.forEach(function (img) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function () {
      lightboxImg.src = this.src;
      lightbox.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });
  });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
      lightbox.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('is-active')) {
      lightbox.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  });

  /* ============ INTERSECTION OBSERVER (fade-in) ============ */
  var sections = document.querySelectorAll('.section:not(#cover)');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  } else {
    sections.forEach(function (section) {
      section.classList.add('visible');
    });
  }
});
