const balls = document.querySelectorAll(".ball");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

// Start button → play animations
startBtn.addEventListener("click", () => {
  balls.forEach(ball => {
    ball.style.animationPlayState = "running";
  });
});

// Stop button → pause animations
stopBtn.addEventListener("click", () => {
  balls.forEach(ball => {
    ball.style.animationPlayState = "paused";
  });
});
