// ============================================================
// Dra. Elaine Morch — Script principal
// Usado apenas onde HTML puro (details/summary, CSS) não resolve:
// menu mobile, botão "voltar ao topo" e destaque do link ativo.
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---------- Entradas por scroll ----------
  if (!document.body.classList.contains('home-page')) {
    document.querySelectorAll('.hero-content, .breadcrumb, .section-head, .treatment-card, .split, .check-list, .steps, .results-list, .faq-item, .cta-final > .wrap').forEach(function (element, index) {
      if (!element.hasAttribute('data-reveal')) {
        element.setAttribute('data-reveal', '');
        element.style.setProperty('--reveal-delay', (index % 3) * 70 + 'ms');
      }
    });
  }

  var revealElements = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    revealElements.forEach(function (element) {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add('is-visible');
    });
  }

  // ---------- Menu mobile ----------
  var toggle = document.querySelector('.menu-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fecha o menu mobile ao clicar em um link
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // ---------- Destaque do link ativo no menu ----------
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
      var parentDetails = link.closest('details.dropdown');
      if (parentDetails) {
        parentDetails.querySelector('summary').classList.add('active');
      }
    }
  });

  // ---------- Botão "voltar ao topo" ----------
  var backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- Short em destaque ----------
  // Para publicar um vídeo, defina data-short-url no elemento .short-player
  // com uma URL de Short do YouTube. Este ponto único permite automatizar
  // a troca do vídeo posteriormente, sem mudar o layout ou o player.
  var shortPlayer = document.querySelector('.short-player[data-short-url]');

  function getYouTubeVideoId(url) {
    if (!url) return null;

    try {
      var parsedUrl = new URL(url);
      var shortMatch = parsedUrl.pathname.match(/\/shorts\/([^/?#]+)/);
      if (shortMatch) return shortMatch[1];
      if (parsedUrl.hostname === 'youtu.be') return parsedUrl.pathname.slice(1);
      return parsedUrl.searchParams.get('v');
    } catch (error) {
      return null;
    }
  }

  if (shortPlayer) {
    var shortButton = shortPlayer.querySelector('.short-player__launch');

    if (shortButton) {
      shortButton.addEventListener('click', function () {
        var videoId = getYouTubeVideoId(shortPlayer.dataset.shortUrl);

        if (!videoId) {
          shortPlayer.classList.add('is-unconfigured');
          return;
        }

        var iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(videoId) + '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
        iframe.title = shortPlayer.dataset.shortTitle || 'Vídeo da Dra. Elaine';
        iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
        iframe.allowFullscreen = true;
        shortPlayer.appendChild(iframe);
        shortPlayer.classList.add('is-playing');
      });
    }
  }

});
