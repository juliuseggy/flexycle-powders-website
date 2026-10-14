/* ==========================================================================
   FlexCycle Solutions — Forms
   Contact and quote forms (data-direct) are sent straight to Web3Forms
   (web3forms.com), which forwards each submission to us by email. The
   success message only shows once Web3Forms confirms receipt.

   WEB3FORMS_KEY below is the one place the access key lives. While it is
   empty, these forms fall back to the old mailto: hand-off (data-mailto),
   so they never silently go nowhere.

   The career form (data-web3forms) posts directly to web3forms.com instead,
   since mailto: links cannot carry the CV file attachment.
   ========================================================================== */

(function () {
  // Access key from web3forms.com (it is public by design: it only lets a
  // form deliver mail to the address it was created for).
  var WEB3FORMS_KEY = 'f6d02337-571e-4b75-949e-147ba7c52088';

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

  function showStatus(form, variant) {
    form.querySelectorAll('.form__status').forEach(function (el) {
      el.classList.toggle('is-visible', el.classList.contains('form__status--' + variant));
    });
  }

  function watchRequiredFields(form) {
    form.querySelectorAll('[required]').forEach(function (field) {
      field.addEventListener('input', function () {
        var row = field.closest('.form__row');
        if (row && field.checkValidity()) row.classList.remove('has-error');
      });
    });
  }

  function initForm(form) {
    watchRequiredFields(form);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.querySelectorAll('.form__status').forEach(function (el) { el.classList.remove('is-visible'); });

      if (!validateForm(form)) return;

      window.location.href = buildMailto(form);
      showStatus(form, 'mailto');
      form.reset();
    });
  }

  // Direct submission (contact + quote forms). Sent as FormData, which is a
  // CORS "simple request" (no preflight; Web3Forms rejects JSON preflights),
  // and the JSON response says whether the mail was accepted, so the
  // success/error message is real.
  function initDirectForm(form) {
    if (!WEB3FORMS_KEY) { initForm(form); return; }
    watchRequiredFields(form);
    var submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.querySelectorAll('.form__status').forEach(function (el) { el.classList.remove('is-visible'); });
      if (!validateForm(form)) return;

      var bot = form.querySelector('[name="botcheck"]');
      if (bot && bot.checked) return; // honeypot ticked: silently drop spam bots
      var payload = new FormData();
      payload.append('access_key', WEB3FORMS_KEY);
      payload.append('subject', form.getAttribute('data-subject') || document.title);
      payload.append('from_name', 'FlexCycle Solutions website');
      form.querySelectorAll('input, textarea, select').forEach(function (field) {
        if (!field.name || field.name === 'botcheck') return;
        var value = (field.value || '').trim();
        if (value) payload.append(field.name, value);
      });

      if (submitBtn) submitBtn.disabled = true;
      fetch('https://api.web3forms.com/submit', { method: 'POST', body: payload })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (!data || !data.success) throw new Error((data && data.message) || 'rejected');
          showStatus(form, 'success');
          form.reset();
        })
        .catch(function () { showStatus(form, 'error'); })
        .then(function () { if (submitBtn) submitBtn.disabled = false; });
    });
  }

  // Forms with a real upload endpoint (currently only the career form's file
  // attachment, via https://web3forms.com — mailto: links can't carry
  // attachments at all, so this is the only path that supports the CV file).
  //
  // This submits as a plain form POST into a hidden target iframe, not via
  // fetch(): web3forms.com sends no Access-Control-Allow-Origin header for a
  // `null` origin, so fetch() fails outright when this page is opened via
  // file:// (the site's primary real-world usage) — even though the actual
  // POST still reaches the server. A plain navigation isn't subject to CORS
  // at all, so routing it into a hidden iframe keeps the visitor on the page
  // while sidestepping the restriction entirely. The trade-off: we can only
  // detect that the iframe finished loading a response, not whether Web3Forms
  // itself reported success — so this shows the success message optimistically
  // once the submission completes, without genuine pass/fail detection.
  function initWeb3Form(form) {
    watchRequiredFields(form);
    var submitBtn = form.querySelector('button[type="submit"]');
    var iframe = document.querySelector('iframe[name="' + form.getAttribute('target') + '"]');

    form.addEventListener('submit', function (e) {
      form.querySelectorAll('.form__status').forEach(function (el) { el.classList.remove('is-visible'); });

      if (!validateForm(form)) {
        e.preventDefault();
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      if (iframe) {
        var settled = false;
        var timeout = setTimeout(function () {
          // No load event within a reasonable window — e.g. offline, DNS
          // failure, or an ad/privacy blocker cancelling the third-party
          // iframe navigation outright (it never fires load in that case).
          if (settled) return;
          settled = true;
          showStatus(form, 'error');
          if (submitBtn) submitBtn.disabled = false;
        }, 12000);
        iframe.addEventListener('load', function onLoad() {
          iframe.removeEventListener('load', onLoad);
          if (settled) return;
          settled = true;
          clearTimeout(timeout);
          showStatus(form, 'success');
          form.reset();
          if (submitBtn) submitBtn.disabled = false;
        });
      }
      // no preventDefault: let the browser submit the form natively
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('form.form[data-web3forms]').forEach(initWeb3Form);
    document.querySelectorAll('form.form[data-direct]').forEach(initDirectForm);
    document.querySelectorAll('form.form[data-mailto]:not([data-direct])').forEach(initForm);
  });
})();
