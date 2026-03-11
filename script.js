document.addEventListener('mousemove', (e) => {
    const stars = document.getElementById('stars');
    const twinkling = document.getElementById('twinkling');
    
    // Get mouse position
    const x = e.clientX;
    const y = e.clientY;
    
    // Calculate movement (divide by a number to make it subtle)
    const moveX = (x - window.innerWidth / 2) / 50;
    const moveY = (y - window.innerHeight / 2) / 50;
    
    // Apply transform to background
    stars.style.transform = `translate(${moveX}px, ${moveY}px)`;
    twinkling.style.transform = `translate(${moveX * 2}px, ${moveY * 2}px)`;
});

// Add a simple scroll effect for the skills section
window.addEventListener('scroll', () => {
    const skills = document.querySelector('.skills-section');
    const position = skills.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if(position < screenPosition) {
        skills.style.opacity = '1';
        skills.style.transform = 'translateY(0)';
    }
});