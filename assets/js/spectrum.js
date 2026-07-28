/* ==========================================================================
   Flexycle Powders — Micron spectrum
   Row bar positions are pre-computed (log scale, 5–150 µm) as inline custom
   properties in the HTML — one row per grade, since several grades' cuts
   overlap and can no longer share a single non-overlapping band track. This
   script only reveals the component when it scrolls into view and staggers
   the rows.
   ========================================================================== */

(function () {
  function initSpectrum(el) {
    var bands = el.querySelectorAll('.spectrum__row-bar');
    bands.forEach(function (band, i) {
      band.style.setProperty('--reveal-delay', (i * 90) + 'ms');
    });

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px 200px 0px' });

    observer.observe(el);
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-spectrum]').forEach(initSpectrum);
  });
})();
