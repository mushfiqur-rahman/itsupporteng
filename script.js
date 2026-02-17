// 1. Entrance Animation
anime
  .timeline({ easing: "easeOutExpo" })
  .add({
    targets: ".glass-container",
    opacity: [0, 1],
    scale: [0.9, 1],
    duration: 1200,
  })
  .add(
    {
      targets: ".service-item",
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(100),
      duration: 800,
    },
    "-=600",
  );

// 2. Background Matrix/Tech Effect
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(2, 6, 23, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00f2ff";
  ctx.font = fontSize + "px monospace";
  for (let i = 0; i < drops.length; i++) {
    const text = characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
      drops[i] = 0;
    drops[i]++;
  }
}
setInterval(draw, 33);

// 3. Countdown Logic (March 1, 2026)
const target = new Date("March 1, 2026 00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;
  document.getElementById("days").innerText = Math.floor(
    diff / (1000 * 60 * 60 * 24),
  );
  document.getElementById("hours").innerText = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  document.getElementById("mins").innerText = Math.floor(
    (diff % (1000 * 60 * 60)) / (1000 * 60),
  );
  document.getElementById("secs").innerText = Math.floor(
    (diff % (1000 * 60)) / 1000,
  );
}, 1000);
