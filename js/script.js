// Smooth Scrolling and Active Link Highlight
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-items-links');

    // Function to add 'active' class to the current section link
    function activateLink() {
        let index = 0;
        const sections = document.querySelectorAll('div[id]');
        
        sections.forEach((section, i) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 60 && rect.bottom >= 60) {
                index = i;
            }
        });
        
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    // Scroll Event to activate link on scroll
    window.addEventListener('scroll', activateLink);

    // Smooth scroll for navbar links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for fixed navbar height
                behavior: 'smooth'
            });
        });
    });
});
