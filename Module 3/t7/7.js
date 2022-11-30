const img = document.getElementById("target");
const pHover = document.getElementById("trigger");

pHover.addEventListener('mouseenter', () => {
    img.src = 'img/picB.jpg';
});

pHover.addEventListener('mouseleave', () => {
    img.src = 'img/picA.jpg';
});