/* ==========================================================================
   Flexycle Powders — Hero grain field
   Ambient drifting copper/teal particles behind the landing-page hero —
   a literal reading of the product (copper powder grains), not a generic
   effect. Skipped entirely under prefers-reduced-motion.
   ========================================================================== */

(function () {
  function rand(min, max) { return Math.random() * (max - min) + min; }

  function initGrain() {
    var el = document.querySelector('[data-hero-grain]');
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var colors = ['var(--copper)', 'var(--orange)', 'var(--teal-300)', 'var(--teal-200)'];
    var count = window.innerWidth < 640 ? 16 : 32;
    var frag = document.createDocumentFragment();

    for (var i = 0; i < count; i++) {
      var s = document.createElement('span');
      s.style.setProperty('--grain-size', rand(1.5, 5).toFixed(1) + 'px');
      s.style.setProperty('--grain-x', rand(0, 100).toFixed(1) + '%');
      s.style.setProperty('--grain-y', rand(0, 100).toFixed(1) + '%');
      s.style.setProperty('--grain-color', colors[i % colors.length]);
      s.style.setProperty('--grain-opacity', rand(0.10, 0.30).toFixed(2));
      s.style.setProperty('--grain-dur', rand(14, 28).toFixed(1) + 's');
      s.style.setProperty('--grain-delay', rand(-20, 0).toFixed(1) + 's');
      s.style.setProperty('--grain-dx1', rand(-14, 14).toFixed(0) + 'px');
      s.style.setProperty('--grain-dy1', rand(-16, 16).toFixed(0) + 'px');
      s.style.setProperty('--grain-dx2', rand(-14, 14).toFixed(0) + 'px');
      s.style.setProperty('--grain-dy2', rand(-16, 16).toFixed(0) + 'px');
      s.style.setProperty('--grain-dx3', rand(-14, 14).toFixed(0) + 'px');
      s.style.setProperty('--grain-dy3', rand(-16, 16).toFixed(0) + 'px');
      frag.appendChild(s);
    }
    el.appendChild(frag);
  }

  document.addEventListener('DOMContentLoaded', initGrain);
})();
