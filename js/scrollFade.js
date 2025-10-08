document.addEventListener('DOMContentLoaded', () => {
  const fadeSections = document.querySelectorAll('.fade-section');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        } else {
          entry.target.classList.remove('opacity-100', 'translate-y-0');
          entry.target.classList.add('opacity-0', 'translate-y-8');
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  fadeSections.forEach(section => observer.observe(section));
});