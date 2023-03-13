const container = document.querySelector('.container');


function generateGrid(size){
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i<size; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.cssText = "display: flex; flex: 1";
        for (let j = 0; j<size; j++){
          const tile = document.createElement('div');
          tile.classList.add('tile');
          tile.style.cssText = "width: 25px; height: 25px; border-width: 1px; border-style: solid; border-color: black; flex: 1;"
          tile.addEventListener('mouseenter', () => {
            tile.classList.add('colored');
          })
          row.appendChild(tile);
        }
        container.appendChild(row);
    }
}

generateGrid(16);



const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', () => {
    const gridSize = Number(prompt("Please enter the number of squares per side of your desired grid:"));
    if (!Number.isInteger(gridSize) || gridSize > 100 || gridSize <= 0){
        alert("Please try again");
    } else {
        generateGrid(gridSize);
    }
})