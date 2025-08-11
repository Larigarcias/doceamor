document.addEventListener('DOMContentLoaded', function() {
    // Animação para elementos visíveis na tela
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-left, .slide-in-right, .slide-in-bottom, .scale-up, .bounce-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Contador Regressivo (5 minutos)
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        // Define o tempo do contador (5 minutos a partir de agora)
        const endTime = new Date().getTime() + 5 * 60 * 1000; 

        const countdown = setInterval(function() {
            const now = new Date().getTime();
            const distance = endTime - now;

            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            if (distance < 0) {
                clearInterval(countdown);
                countdownElement.innerHTML = "Oferta Encerrada";
            }
        }, 1000);
    }
    
    // Animação da barra de progresso
    const progressBar = document.getElementById('vagas-progress');
    const progressLabel = document.getElementById('progress-label');
    if (progressBar) {
        const percentage = 87; 
        
        setTimeout(() => {
            progressBar.style.width = percentage + '%';
        }, 500);

        if (progressLabel) {
            progressLabel.textContent = percentage + '%';
        }
    }
});