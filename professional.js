const navMenuToggle = document.querySelector('.nav-menu-toggle');
const navMenu = document.querySelector('.nav-container2');

navMenuToggle.addEventListener('click', () => {
    const isExpanded = navMenuToggle.getAttribute('aria-expanded') === 'true';
    navMenuToggle.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.classList.toggle('is-open', !isExpanded);
});

navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navMenuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
    });
});
