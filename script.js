// Get a reference to the container div in the html.
let container = document.querySelector("#container");
// Create a new div and store it in the variable "etch".
let etch = document.createElement("div");
etch.classList.add("etch");
// Append the div to container.
container.appendChild(etch);

function makeGrid() {
    for (let i = 0; i < 16 * 16; i++) {
        let divs = document.createElement("div");
        divs.classList.add("divs");
        container.appendChild(divs);
        etch.appendChild(divs);
        divs.style.height = 700 / 16 + "px";
        divs.style.width = 700 / 16 + "px";

        divs.addEventListener("mouseover", () => {
            const randomColor = getRandomColor()
            divs.style.backgroundColor = randomColor;
        });
    }
}

function removeGrid() {
    etch.innerHTML = "";
}

function createGrid() {
    let userInput = prompt("Please enter the number of squares per side for the new grid (1-100).");
    if (userInput > 100) {
        createGrid();
    } else {
        for (let i = 0; i < userInput * userInput; i++) {
        let divs = document.createElement("div");

        divs.classList.add("divs");
        container.appendChild(divs);
        etch.appendChild(divs);
        divs.style.height = 700 / userInput + "px";
        divs.style.width = 700 / userInput + "px";

        divs.addEventListener("mouseover", () => {
            const randomColor = getRandomColor()
            divs.style.backgroundColor = randomColor;
        });
    }
    }
}

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

button.addEventListener("click", () => {
    removeGrid()
    createGrid()
});


makeGrid();