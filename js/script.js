// AI Impact Commons Counter-Narrative - UI interactions

document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const setTheme = (dark) => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    toggle.textContent = dark ? '🌙' : '☀️';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };
  if (stored) {
    setTheme(stored === 'dark');
  } else if (prefersDark) {
    setTheme(true);
  } else {
    setTheme(false);
  }
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark';
      setTheme(!current);
    });
  }

  // Mobile navigation toggle (for very small screens)
  const navContainer = document.querySelector('.nav-container');
  const nav = document.querySelector('.site-header nav');
  if (window.innerWidth <= 480 && navContainer) {
    const menuBtn = document.createElement('button');
    menuBtn.textContent = '☰';
    menuBtn.setAttribute('aria-label', 'Toggle navigation menu');
    menuBtn.style.cssText = 'display:block;background:none;border:none;color:var(--text-primary);font-size:1.2rem;cursor:pointer;margin-left:auto;padding:0.5rem;';
    document.querySelector('.header-inner').appendChild(menuBtn);
    navContainer.style.display = 'none';
    menuBtn.addEventListener('click', () => {
      if (navContainer.style.display === 'none') {
        navContainer.style.display = 'block';
      } else {
        navContainer.style.display = 'none';
      }
    });
  }

  // Active nav link update (already set server-side)
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-header nav a').forEach(link => {
    const href = link.getAttribute('href');
    if ((href === currentPage) || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
