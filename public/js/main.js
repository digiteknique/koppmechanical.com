(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form: submits to Formspree (see HTML comment above the <form>
  // tag) via fetch so the visitor gets inline feedback instead of being
  // redirected off-site.
  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');

  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      note.textContent = 'Sending…';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            note.textContent = "Thanks! We've received your request and will get back to you within one business hour.";
            form.reset();
          } else {
            note.textContent = "Something went wrong sending that. Please call us instead — we'd rather hear from you than lose the message.";
          }
        })
        .catch(function () {
          note.textContent = "Something went wrong sending that. Please call us instead — we'd rather hear from you than lose the message.";
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }
})();
