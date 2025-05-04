document.addEventListener('DOMContentLoaded', () => {
  // Activar navegación actual
  highlightCurrentPage();

  // Animación suave para los enlaces internos
  setupSmoothScroll();

  // Configurar formulario de inscripción
  setupRegistrationForm();
});

function highlightCurrentPage() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    
    if (currentPath.endsWith(href) || 
        (currentPath.endsWith('/') && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function setupRegistrationForm() {
  const form = document.querySelector('form[name="registration"]');
  if (!form) return;
}
