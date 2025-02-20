document.addEventListener("DOMContentLoaded", function() {
    function createFloatingElement(type, className, duration, sizeRange, colors = []) {
        let element = document.createElement("div");
        element.classList.add(className);
        document.body.appendChild(element);

        let randomLeft = Math.random() * window.innerWidth;
        let randomSize = Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min;
        let randomDelay = Math.random() * duration;
        let randomTop = Math.random() * window.innerHeight * 0.3; // Limit animation to the top
        
        element.style.left = `${randomLeft}px`;
        element.style.top = `${randomTop}px`;
        element.style.animationDelay = `${randomDelay}s`;
        element.style.width = `${randomSize}px`;
        element.style.height = `${randomSize}px`;
        element.style.position = "absolute";

        if (colors.length > 0) {
            element.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }

        setTimeout(() => {
            element.remove();
        }, duration * 1000);
    }

    function startAnimation() {
        setInterval(() => createFloatingElement("balloon", "balloon", 6, { min: 40, max: 60 }, ["#FF69B4", "#FFD700", "#87CEFA", "#FF4500"]), 1200);
        setInterval(() => createFloatingElement("confetti", "confetti", 4, { min: 5, max: 15 }, ["#FFD700", "#FF4500", "#00FF7F", "#FF69B4"]), 200);
    }

    startAnimation();
});
