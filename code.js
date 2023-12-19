let rows = 16;
let columns = 16;
const container = document.querySelector('.container');
const gridSide = 600;
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;

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

function removeGridCells() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

slider.oninput = function () {
    let txt = `${this.value} x ${this.value} (Resolution)`;
    sliderValue.innerHTML = txt;
    removeGridCells();
    createGridCells(this.value);
}

createGridCells();