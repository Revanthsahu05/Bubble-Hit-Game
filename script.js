document.addEventListener("DOMContentLoaded", () => {
    const panel = document.getElementById('panel');
    const panelBottom = document.getElementById('pbtm');
    const scoreDisplay = document.getElementById('scoreval');
    const timerDisplay = document.getElementById('timerval');
    const hitDisplay = document.getElementById('hitval');
    const startScreen = document.getElementById('start-screen');
    const startButton = document.getElementById('start-button');

    let score = 0;
    let hits = 0;
    let timer = 60;
    let gameInterval;

    function makeBubble() {
        let clutter = "";
        for (let i = 1; i <= 1000; i++) {
            let rn = Math.floor(Math.random() * 10);
            clutter += `<div class="bubble">${rn}</div>`;
        }
        panelBottom.innerHTML = clutter;
    }

    function increaseScore() {
        score += 10;
        scoreDisplay.innerHTML = score;
    }

    function newHit() {
        let rn = Math.floor(Math.random() * 10);
        hitDisplay.innerHTML = rn;
    }

    function startGame() {
        startScreen.style.display = 'none';
        panel.classList.remove('hidden');
        panel.classList.add('visible');

        score = 0;
        timer = 60;
        scoreDisplay.innerHTML = score;
        timerDisplay.innerHTML = timer;

        makeBubble();
        newHit();
        runTimer();
    }

    function runTimer() {
        gameInterval = setInterval(() => {
            timer--;
            if (timer >= 0) {
                timerDisplay.innerHTML = timer;
            } else {
                clearInterval(gameInterval);
                panelBottom.innerHTML = `<pre><h1>GAME OVER</h1><h1>SCORE: ${score}</h1></pre>`;
            }
        }, 1000);
    }

    panelBottom.addEventListener("click", function(event) {
        let clickedNumber = Number(event.target.textContent);
        let hitNumber = Number(hitDisplay.textContent);
        if (clickedNumber === hitNumber && timer > 0) {
            increaseScore();
            newHit();
            makeBubble();
        }
    });

    startButton.addEventListener('click', startGame);
});
