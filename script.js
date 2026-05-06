/* GLOW ANIMATION */
const glow = document.querySelector(".bg-glow");

let x = 0;

setInterval(() => {

  x += 0.01;

  glow.style.transform =
    `translateY(${Math.sin(x) * 40}px)`;

}, 30);

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

/* CUSTOM CURSOR */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

/* BUTTON SCROLL */
const button = document.querySelector(".cta");
const cards = document.querySelector(".cards-section");

button.addEventListener("click", () => {

  cards.scrollIntoView({
    behavior: "smooth"
  });

});
