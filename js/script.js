// AI Impact Commons Counter-Narrative - Minimal JS

document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const nav = document.querySelector('.site-header nav');
  const toggle = document.createElement('button');
  toggle.textContent = '☰';
  toggle.setAttribute('aria-label', 'Toggle navigation');
  toggle.style.cssText = 'background:none;border:none;color:var(--text-primary);font-size:1.5rem;cursor:pointer;display:none;margin-left:auto;';

  const header = document.querySelector('.site-header');
  if (window.innerWidth <= 768) {
    header.insertBefore(toggle, nav);
    toggle.style.display = 'block';
    nav.style.display = 'none';
    nav.style.flexDirection = 'column';
    nav.style.width = '100%';
  }

  toggle.addEventListener('click', function() {
    if (nav.style.display === 'none' || nav.style.display === '') {
      nav.style.display = 'flex';
    } else {
      nav.style.display = 'none';
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Update active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-header nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
