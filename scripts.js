document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();

        if (linkPage === currentPage) {
            link.classList.add('active');
        }

        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').charAt(0) === '#') {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });

                // Remove 'active' class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Add 'active' class to the clicked link
                this.classList.add('active');
            }
        });
    });
});
