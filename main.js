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
    createInputDialog();
});

function createGrid(sideSize) {
    
    
    for(let i = 1; i <= (sideSize*sideSize); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.id = `square-${i}`;
        grid.appendChild(square);
    }
}

function createInputDialog() {
    const mask = document.createElement('div');
    mask.classList.add('dialog-mask');

    const dialog = document.createElement('div');
    dialog.classList.add('dialog');
    mask.appendChild(dialog);

    const dialogMsg = document.createElement('p');
    dialogMsg.textContent = "How many squares do you want to appear in each row of the grid?"
    dialogMsg.classList.add('dialog-msg');
    dialog.appendChild(dialogMsg);

    const warning = document.createElement('p');
    warning.textContent = "Maximum number of squares per row is 100."
    warning.classList.add('warning');
    dialog.appendChild(warning);

    const input = document.createElement('input');
    input.classList.add('input');
    dialog.appendChild(input);

    const submitBtn = document.createElement ('button');
    submitBtn.textContent = 'Submit'
    submitBtn.classList.add('submit-btn');
    dialog.appendChild(submitBtn);

    body.appendChild(mask);
}


createGrid(4);