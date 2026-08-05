// Smooth scrolling to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Generate floating particles (hearts, butterflies, stars)
document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.getElementById('particles');
    const emojis = ['❤️', '🦋', '✨', '💖', '🌸'];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Randomize emoji
        particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Randomize position, delay, and size
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = 5 + Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
    }

    // Intersection Observer for scroll animations (fade up elements)
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
});
