let rows = 16;
let columns = 16;
const container = document.querySelector('.container');
const gridSide = 600;

container.style.width = `${gridSide}px`;
container.style.height = `${gridSide}px`;

function changeBackgroundColor() {
    this.style.backgroundColor = 'black';
}

function createGridCells() {
    for (let i = 0; i < (rows * columns); i++) {
        const gridCell = document.createElement('div');

        gridCell.style.width = `${(gridSide / columns) - 2}px`;
        gridCell.style.height = `${(gridSide / rows) - 2}px`;
        gridCell.classList.add('cell');

        container.appendChild(gridCell);

        gridCell.addEventListener('mouseover', changeBackgroundColor);
    }
}

createGridCells();