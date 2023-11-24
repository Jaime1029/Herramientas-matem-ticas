// Agrega la clase 'active' al enlace correspondiente según la página actual
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.href;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.href === currentPage) {
            link.parentElement.classList.add('active');
        }
    });
});