const button = document.getElementById("button");
const menu = document.getElementById("menu");

button.addEventListener('click', () => {
    menu.classList.toggle('ver');
})

new TypeIt("#element", {
    strings: "La nueva forma de manejar tus finanzas",
    speed: 60,
    loop: false
  }).go();