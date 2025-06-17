function handleScrollFade() {
  const elements = document.querySelectorAll('#fadeInSection');

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Determine how far into the viewport the element is
    const visibleRatio = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);

    // Apply opacity and scale based on ratio
    el.style.opacity = visibleRatio;
    el.style.transform = `scale(${0.95 + visibleRatio * 0.05})`;
  });
}

// Run on scroll
window.addEventListener('scroll', handleScrollFade);
// Run once on load
window.addEventListener('load', handleScrollFade);
