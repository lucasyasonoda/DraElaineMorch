// ============================================================
// Dra. Elaine Morch — Script principal
// Usado apenas onde HTML puro (details/summary, CSS) não resolve:
// menu mobile, botão "voltar ao topo" e destaque do link ativo.
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

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

});
