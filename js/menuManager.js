document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  let open = false;

  btn.addEventListener('click', () => {
    open = !open;
    if (open) {
      menu.classList.remove('translate-x-full');
      menu.classList.add('translate-x-0');
    } else {
      menu.classList.add('translate-x-full');
      menu.classList.remove('translate-x-0');
    }
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      open = false;
      menu.classList.add('translate-x-full');
      menu.classList.remove('translate-x-0');
    });
  });
});