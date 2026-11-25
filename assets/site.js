(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('#theme-toggle');
  const setTheme = (theme, persist = false) => {
    root.dataset.theme = theme;
    const next = theme === 'dark' ? 'light' : 'dark';
    if (themeToggle) {
      const label = `Switch to ${next} mode`;
      themeToggle.setAttribute('aria-label', label);
      themeToggle.setAttribute('title', label);
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#fafafa' : '#0a0a0a');
    if (persist) {
      try { localStorage.setItem('portfolio-theme', theme); } catch (_) { /* theme still works without storage */ }
    }
  };
  let initialTheme = root.dataset.theme === 'light' ? 'light' : 'dark';
  try {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'dark' || saved === 'light') initialTheme = saved;
  } catch (_) { /* default to the page theme */ }
  setTheme(initialTheme);
  if (themeToggle) {
    themeToggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true));
  }
  window.addEventListener('storage', event => {
    if (event.key === 'portfolio-theme' && (event.newValue === 'light' || event.newValue === 'dark')) setTheme(event.newValue);
  });
  const year = document.querySelector('#current-year');
  if (year) year.textContent = new Date().getFullYear();

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-nav');
  if (navToggle && nav) {
    navToggle.hidden = false;
    root.classList.add('nav-ready');
    const closeMenu = () => {
      navToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    };
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') !== 'true';
      navToggle.setAttribute('aria-expanded', String(expanded));
      nav.classList.toggle('is-open', expanded);
      if (expanded) nav.querySelector('a')?.focus({ preventScroll: true });
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        navToggle.focus();
      }
    });
    window.matchMedia('(max-width: 760px)').addEventListener('change', closeMenu);
  }

  document.querySelectorAll('.copy-button[data-copy-target]').forEach(button => {
    let resetLabel;
    const label = button.textContent;
    button.addEventListener('click', async () => {
      const code = document.getElementById(button.dataset.copyTarget);
      const status = document.querySelector('#copy-status');
      if (!code) return;
      const reportCopied = () => {
        button.textContent = 'Copied';
        if (status) status.textContent = `${button.dataset.copyTarget === 'package-install' ? 'Install command' : 'Usage example'} copied to clipboard`;
        clearTimeout(resetLabel);
        resetLabel = setTimeout(() => { button.textContent = label; }, 2000);
      };
      try {
        await navigator.clipboard.writeText(code.textContent);
        reportCopied();
      } catch (_) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(code);
        selection.removeAllRanges();
        selection.addRange(range);
        let copied = false;
        try { copied = document.execCommand('copy'); } catch (_) { /* manual copy remains available */ }
        if (copied) {
          selection.removeAllRanges();
          reportCopied();
        } else if (status) {
          status.textContent = 'Code selected. Use your keyboard or browser menu to copy it';
        }
      }
    });
  });

  // One entrance per page; all content is visible without JavaScript.
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const entrance = document.querySelector('.identity-intro, .archive-intro, .case-intro, .not-found');
  if (entrance && !motionPreference.matches && 'animate' in Element.prototype) {
    const animation = entrance.animate([
      { opacity: 0, transform: 'translateY(6px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], { duration: 320, easing: 'cubic-bezier(.22, 1, .36, 1)' });
    motionPreference.addEventListener('change', event => {
      if (event.matches) animation.cancel();
    });
  }
})();
