document.getElementById('year').textContent = new Date().getFullYear();

// Aparición suave de cada bloque al llegar a él
const blocks = document.querySelectorAll('.project, .timeline li, .split > div, .contact');
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    blocks.forEach((block) => {
        block.classList.add('reveal');
        observer.observe(block);
    });
}
