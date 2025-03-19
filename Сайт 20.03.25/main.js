function showDetails() {
    document.getElementById('mainContent').classList.add('hidden');
    document.getElementById('detailsContent').classList.remove('hidden');
}

function showMain() {
    document.getElementById('detailsContent').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
}

function startSimulation() {
    let earthBall = document.getElementById('earthBall');
    let moonBall = document.getElementById('moonBall');
    let earthTimer = document.getElementById('earthTimer');
    let moonTimer = document.getElementById('moonTimer');

    let earthGravity = 9.8;
    let moonGravity = 1.6;
    let height = 100;
    
    let timeEarth = Math.sqrt((2 * height) / earthGravity);
    let timeMoon = Math.sqrt((2 * height) / moonGravity);

    resetSimulation(); // Сбрасываем перед запуском

    animateFall(earthBall, timeEarth, earthTimer);
    animateFall(moonBall, timeMoon, moonTimer);
}

function animateFall(ball, duration, timerElement) {
    let startTime = performance.now();  // Начальное время
    let startPosition = -195;
    let endPosition = 5;

    function step(timestamp) {
        let elapsedTime = (timestamp - startTime) / 1000;  // Время в секундах
        let progress = elapsedTime / duration;  // Прогресс от 0 до 1

        if (progress < 1) {
            ball.style.top = startPosition + progress * (endPosition - startPosition) + 'px';
            timerElement.textContent = `Время: ${elapsedTime.toFixed(2)} сек`;
            requestAnimationFrame(step);
        } else {
            ball.style.top = endPosition + 'px';
            timerElement.textContent = `Финальное время: ${duration.toFixed(2)} сек`;
        }
    }

    requestAnimationFrame(step);
}

function resetSimulation() {
    document.getElementById('earthBall').style.top = '-100px';
    document.getElementById('moonBall').style.top = '-100px';
    document.getElementById('earthTimer').textContent = "Время: 0.00 сек";
    document.getElementById('moonTimer').textContent = "Время: 0.00 сек";
}
