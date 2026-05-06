const glow = document.querySelector(".bg-glow");

let x = 0;

setInterval(() => {

  x += 0.01;

  glow.style.transform =
    `translateY(${Math.sin(x) * 40}px)`;

}, 30);
