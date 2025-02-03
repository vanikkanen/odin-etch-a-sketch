function createSquares(squaresPerRow) {

    const totalSquares = squaresPerRow*squaresPerRow
    const squareSize = 1024/squaresPerRow

    const container = document.querySelector("#container")
    for (let i = 0; i < totalSquares; i++) {
        let gridSquare = document.createElement("div")
        gridSquare.addEventListener("mouseover", (e) => {
            gridSquare.style.background = "gray"
        })
        gridSquare.className = "gridSquare"
        gridSquare.style.width = `${squareSize}px`
        gridSquare.style.height = `${squareSize}px`
        container.appendChild(gridSquare)
    }
}

createSquares(16)

function getValidInput() {
    let input = null
    while (input === null || isNaN(input) || input > 100 || input < 1) {
        input = prompt("Please insert the new amount of squares per row. Max 100.")

        if (input === null) {
            alert("You must enter a number")
            continue
        }

        input = Number(input)

        if (isNaN(input) || input > 100 || input < 1) {
            alert("Invalid input! Please enter a number between 1 and 100.")
        }
    }
    return input
}

function resetGrid() {
    
    const input = getValidInput()
    
    const container = document.querySelector("#container")
    while(container.lastChild) {
        container.lastChild.remove()
    }

    createSquares(input)
}