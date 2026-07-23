/* ==========================================================================
   Flexycle Powders — Forms
   No backend is wired up yet: valid submissions are handed to the visitor's
   email client via a mailto: link built from the form's own fields. Swap
   the mailto: href construction below for a real endpoint (e.g. Formspree /
   Netlify Forms) when one is available — the markup does not need to change.
   ========================================================================== */

(function () {
  function buildMailto(form) {
    var to = form.getAttribute('data-mailto');
    var subject = form.getAttribute('data-subject') || document.title;
    var lines = [];
    form.querySelectorAll('input, textarea, select').forEach(function (field) {
      if (!field.name) return;
      var value = (field.value || '').trim();
      if (!value) return;
      var label = field.getAttribute('data-mail-label') || field.name;
      lines.push(label + ': ' + value);
    });
    var body = lines.join('\n');
    return 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  function validateForm(form) {
    var valid = true;
    var firstInvalid = null;
    form.querySelectorAll('[required]').forEach(function (field) {
      var row = field.closest('.form__row');
      var ok = field.checkValidity();
      if (row) row.classList.toggle('has-error', !ok);
      if (!ok) {
        valid = false;
        if (!firstInvalid) firstInvalid = field;
      }
    });
    if (firstInvalid) firstInvalid.focus();
    return valid;
  }

  function initForm(form) {
    form.querySelectorAll('[required]').forEach(function (field) {
      field.addEventListener('input', function () {
        var row = field.closest('.form__row');
        if (row && field.checkValidity()) row.classList.remove('has-error');
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form__status');
      if (status) status.classList.remove('is-visible');

      if (!validateForm(form)) return;

      window.location.href = buildMailto(form);
      if (status) status.classList.add('is-visible');
      form.reset();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('form.form[data-mailto]').forEach(initForm);
  });
})();
