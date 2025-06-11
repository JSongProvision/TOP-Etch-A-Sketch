const grid = document.querySelector("#grid");
grid.addEventListener('mouseover',(event) => {
    const target = event.target;
    if(target.classList.contains('square')){
         target.classList.add("hovered");
    }  
});

const setGridBtn = document.querySelector(".grid-btn");
const body = document.body;

setGridBtn.addEventListener('click',(event) => {
    const mask = document.createElement('div');
    mask.classList.add('dialog-mask');

    body.appendChild(mask);
});

function createGrid(sideSize) {
    
    
    for(let i = 1; i <= (sideSize*sideSize); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.id = `square-${i}`;
        grid.appendChild(square);
    }
}


createGrid(4);