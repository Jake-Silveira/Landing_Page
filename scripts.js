/**
 * Handle scroll animations using Intersection Observer
 * This is more performant than listening to the scroll event directly.
 */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Once the element is visible, we can stop observing it
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in-section');
  fadeElements.forEach(el => observer.observe(el));
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
});
