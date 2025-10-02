document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const menuLinks = document.querySelectorAll('.nav-menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Только для якорных ссылок (навигация по странице)
            if (this.getAttribute('href').startsWith('#')) {
                // Даем время на smooth scroll, потом закрываем меню
                setTimeout(() => {
                    if (menuToggle.checked) {
                        menuToggle.checked = false;
                    }
                }, 300);
            }
        });
    });
});