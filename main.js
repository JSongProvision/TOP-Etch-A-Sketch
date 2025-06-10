const container = document.querySelector(".container");

for(let i = 1; i <= 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.id = `square-${i}`;
    container.appendChild(square);
}