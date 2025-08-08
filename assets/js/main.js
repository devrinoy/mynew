// BrightStack IT - Main JS
(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Smooth scroll for same-page anchors
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target instanceof HTMLAnchorElement && target.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
      const id = target.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', `#${id}`);
      }
    }
  });

  // Set footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Contact form handler -> opens default mail client with prefilled body
  const form = document.getElementById('contactForm');
  if (form instanceof HTMLFormElement) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = String(formData.get('name') || '').trim();
      const email = String(formData.get('email') || '').trim();
      const phone = String(formData.get('phone') || '').trim();
      const company = String(formData.get('company') || '').trim();
      const service = String(formData.get('service') || '').trim();
      const budget = String(formData.get('budget') || '').trim();
      const message = String(formData.get('message') || '').trim();

      const subject = encodeURIComponent(`[Quote Request] ${service || 'IT Services'} — ${name}`);
      const lines = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Company: ${company}`,
        `Service: ${service}`,
        `Budget: ${budget || 'Not specified'}`,
        '',
        'Details:',
        message || '(no details provided)'
      ];
      const body = encodeURIComponent(lines.join('\n'));

      // Change this to your real inbox
      const to = 'hello@brightstack.it';
      const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
      window.location.href = mailto;
    });
  }
})();