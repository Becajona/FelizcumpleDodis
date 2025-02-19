document.addEventListener("DOMContentLoaded", function() {
    function createBalloon() {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        document.body.appendChild(balloon);

        let randomLeft = Math.random() * window.innerWidth;
        let randomDelay = Math.random() * 5;
        balloon.style.left = `${randomLeft}px`;
        balloon.style.animationDelay = `${randomDelay}s`;

        setTimeout(() => {
            balloon.remove();
        }, 6000);
    }

    function createConfetti() {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.body.appendChild(confetti);

        let randomLeft = Math.random() * window.innerWidth;
        let randomDelay = Math.random() * 3;
        let randomSize = Math.random() * 10 + 5;
        let randomColor = ["#FFD700", "#FF4500", "#00FF7F", "#FF69B4"][Math.floor(Math.random() * 4)];
        
        confetti.style.left = `${randomLeft}px`;
        confetti.style.animationDelay = `${randomDelay}s`;
        confetti.style.width = `${randomSize}px`;
        confetti.style.height = `${randomSize}px`;
        confetti.style.backgroundColor = randomColor;
        
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }

    setInterval(createBalloon, 1000);
    setInterval(createConfetti, 300);
});
