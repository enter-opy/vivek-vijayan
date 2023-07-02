const text = document.getElementById("name");

window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    text.style.fontSize = String(currentY);
} )