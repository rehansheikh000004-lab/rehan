/* GLOW FLOAT */
const glow = document.querySelector(".bg-glow");

let x = 0;

setInterval(() => {

  x += 0.01;

  glow.style.transform =
    `translateY(${Math.sin(x) * 40}px)`;

}, 30);

/* CUSTOM CURSOR */
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

/* LIGHT FOLLOW */
const light = document.querySelector(".light");

window.addEventListener("mousemove", (e) => {

  light.style.left = e.clientX + "px";
  light.style.top = e.clientY + "px";

});

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach(el => {

    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }

  });

});

/* CLOCK */
const clock = document.getElementById("clock");

setInterval(() => {

  const now = new Date();

  clock.innerHTML = now.toLocaleTimeString();

}, 1000);

/* BUTTON SCROLL */
const button = document.querySelector(".cta");
const cards = document.querySelector(".cards-section");

button.addEventListener("click", () => {

  cards.scrollIntoView({
    behavior: "smooth"
  });

});
