const grid = document.querySelector("#grid");
let mouseDown = false;

document.addEventListener('mousedown', () => {
    mouseDown = true;
});

document.addEventListener('mouseup', () => {
    mouseDown = false;
});

createGrid(4);

grid.addEventListener('mouseover',(event) => {
    const target = event.target;
    if(target.classList.contains('square') && mouseDown){
         target.classList.add("hovered");
    }  
});

const setGridBtn = document.querySelector(".grid-btn");
const body = document.body;

setGridBtn.addEventListener('click',(event) => {
    createInputDialog();

    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.addEventListener('click', resetGrid);
});

function createGrid(sideSize) { 
    for(let i = 1; i <= (sideSize*sideSize); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.id = `square-${i}`;
        square.style.flexBasis = `calc(100% / ${sideSize})`;
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
    input.placeholder = " # per row";
    input.name = "gridsize";
    dialog.appendChild(input);

    const submitBtn = document.createElement ('button');
    submitBtn.textContent = 'Submit'
    submitBtn.classList.add('submit-btn');
    dialog.appendChild(submitBtn);

    body.appendChild(mask);
    input.focus();
}

function resetGrid() {
    const input = document.querySelector('.input');
    userRowSize = parseInt(input.value);

    if (isNaN(userRowSize) || userRowSize <= 0 || userRowSize > 100) {
        const dialog = document.querySelector(".dialog");
        const input = document.querySelector(".input");
        const warningMsg = document.querySelector ('.warning');
        const errorLabel = document.createElement ('label');
        

        errorLabel.classList.add('error-label');
        errorLabel.textContent = "Please enter a whole number between 1 and 100 for the grid size.";
        errorLabel.for = 'gridsize'

        if(!dialog.querySelector('.error-label')){
            input.after(errorLabel);
            input.style.borderColor = 'red';
            warningMsg.remove();
        }

        input.focus();
        return;
    };

    grid.replaceChildren();
    createGrid(userRowSize);
    
    const mask = document.querySelector('.dialog-mask');
    mask.remove();
}