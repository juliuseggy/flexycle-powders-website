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

  function initBlurFade() {
    var els = document.querySelectorAll('.blur-fade');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    // Negative bottom margin (unlike initReveal's +200px pre-trigger): the
    // section must actually be scrolled into view before it settles, so the
    // effect is seen happening rather than already resolved on page load.
    // threshold 0.12 (not 0) matters for tall elements like the contact/career
    // forms: with threshold 0, a form mostly below the fold still counts as
    // "intersecting" the instant its top edge alone pokes above the -15%
    // line, resolving it before the visitor scrolls far enough to see it.
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -15% 0px' });
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

  function initBlurFadeStagger() {
    document.querySelectorAll('[data-blur-group]').forEach(function (group) {
      group.querySelectorAll('.blur-fade').forEach(function (el, i) {
        el.style.setProperty('--reveal-delay', (i * 90) + 'ms');
      });
    });
  }

  // Product tilt cards (products.html): mouse-reactive 3D tilt, ported from
  // a pasted React component's pointer-tracked rotateX/rotateY handlers.
  function initTiltCards() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('.tilt-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -8;
        var rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8;
        card.style.transition = 'transform 100ms ease-out';
        card.style.transform = 'perspective(1000px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg) scale3d(1.03, 1.03, 1.03)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transition = 'transform 400ms ease-in-out';
        card.style.transform = '';
      });
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

  // Team showcase (company page): a photo and its name row share a
  // data-member value despite living in separate branches of the DOM, so
  // hovering either one highlights both — mirrors the pattern's original
  // hoveredId state, just done via matching data attributes instead.
  function initTeamShowcase() {
    var showcase = document.querySelector('.team-showcase');
    if (!showcase) return;
    var nodes = showcase.querySelectorAll('[data-member]');
    if (!nodes.length) return;

    function setActive(id) {
      nodes.forEach(function (el) {
        var isMatch = el.getAttribute('data-member') === id;
        el.classList.toggle('is-active', !!id && isMatch);
        el.classList.toggle('is-dimmed', !!id && !isMatch);
      });
    }

    nodes.forEach(function (el) {
      var id = el.getAttribute('data-member');
      el.addEventListener('mouseenter', function () { setActive(id); });
      el.addEventListener('mouseleave', function () { setActive(null); });
      el.addEventListener('focus', function () { setActive(id); });
      el.addEventListener('blur', function () { setActive(null); });
    });

    // Mail/LinkedIn are placeholder (href="#") until real per-person links
    // exist — swallow the click instead of jumping to the top of the page.
    showcase.querySelectorAll('.team-showcase__social').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initBlurFadeStagger();
    initReveal();
    initBlurFade();
    initStats();
    initPrint();
    initSpotlightCards();
    initTeamShowcase();
    initTiltCards();
  });
})();
