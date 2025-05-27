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
    }
}

makeGrid();