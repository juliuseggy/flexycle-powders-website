/* ==========================================================================
   Flexycle Powders — Main
   Mobile nav, generic scroll-reveal, stat count-up, datasheet print trigger.
   Runs after i18n.js (loaded first) so translated text is already in place.
   ========================================================================== */

(function () {
  function initMobileNav() {
    var toggle = document.querySelector('.nav__toggle');
    var mobileNav = document.querySelector('.nav__mobile');
    if (!toggle || !mobileNav) return;

    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initReveal() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px 200px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  function countUp(el) {
    var text = el.textContent;
    var match = text.match(/(\d+(?:[.,]\d+)?)/);
    if (!match) return;

    var numStr = match[1];
    var usesComma = numStr.indexOf(',') !== -1;
    var target = parseFloat(numStr.replace(',', '.'));
    var decimals = (numStr.split(/[.,]/)[1] || '').length;
    var prefix = text.slice(0, match.index);
    var suffix = text.slice(match.index + numStr.length);
    var duration = 1100;
    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = (target * eased).toFixed(decimals);
      if (usesComma) current = current.replace('.', ',');
      el.textContent = prefix + current + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = text;
    }
    requestAnimationFrame(step);
  }

  function initStats() {
    var els = document.querySelectorAll('.stat__value:not([data-no-countup])');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          countUp(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px 200px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  function initPrint() {
    document.querySelectorAll('[data-print]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var grade = btn.getAttribute('data-print');
        document.body.classList.add('printing-' + grade);
        window.print();
      });
    });
    window.addEventListener('afterprint', function () {
      document.body.className = document.body.className.replace(/\bprinting-\S+/g, '').trim();
    });
  }

  function initSpotlightCards() {
    document.querySelectorAll('.tile, .compare__col').forEach(function (tile) {
      tile.addEventListener('pointermove', function (e) {
        var rect = tile.getBoundingClientRect();
        tile.style.setProperty('--spot-x', (e.clientX - rect.left) + 'px');
        tile.style.setProperty('--spot-y', (e.clientY - rect.top) + 'px');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initReveal();
    initStats();
    initPrint();
    initSpotlightCards();
  });
})();
