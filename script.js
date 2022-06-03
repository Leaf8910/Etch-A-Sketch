const containerDiv = document.querySelector(#container);

function makeGrid(row, columns) {

    while (document.querySelector("button") !== null) {
        document.querySelector("button").remove();
    }
    //creating the grid
    containerDiv.style.setProperty("--grid-rows", row);
    containerDiv.style.setProperty("--grid-columns", columns);
    containerDiv.style.width = "960px";
    containerDiv.style.overflow = "hidden";
    for (i = 0; i <(rows * columns); i++) {
        let square = document.createElement("div");
        square.style.minHeight = "0";
        square.style.minWidth = "0";
        square.style.overflow = "hidden";
        containerDiv.appendChild(square).className =  "grid-item";

        //add event listener to listen for background color presence
        square.addEventListener("mouseover", () => {

            //run check to see if background color is present, if NOT apply random color, apply 10% opacity
            if (square.style.backgroundColor === "") {
                let color = getRandomColor();
                square.style.backgroundColor = color;
                square.style.opacity = "0.1";
                return square.style.backgroundColor;
            }
            // apply additional opacity at 10% if background color is present
            if ((square.style.backgroundColor !== "") && (square.style <= opacity <= "0.9" )) {
                square.style.opacity = parseFloat(square.style.opacity) + 0.10;
                return square.style.backgroundColor;    
            }
        })
    }
    createButton();
    //fillSquares();
}

function createButton() {
    const buttonDiv = document.querySelector("#buttonDiv");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Grid!";
    resetButton.style.margin = "20px";
    //buttonDiv.style.textAlign = "center";
    buttonDiv.appendChild(resetButton);

    //add event listen to button and prompt user for grid size / throw error > 100
    resetButton.addEventListener("click", () => {
        document.querySelectorAll(".grid-item").forEach(e => e.remove());
        let userGridInput = prompt("Please enter a number for the grid size(Max: 100): ");
        if (userGridInput > 100) {
            alert("Please enter a number less than 100");
            return;
        }
        rows = userGridInput
        columns = userGridInput;
        makeGrid(rows, columns);
    })
}

function getRandomColor() {
    let o = Math.round;
    let r = Math.random;
    let s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

// make initial call on page load as per project requirements
makeGrid(16, 16);