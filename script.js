function createSquares(squaresPerRow) {

    const totalSquares = squaresPerRow*squaresPerRow
    const squareSize = 1024/squaresPerRow

    const container = document.querySelector("#container")
    for (let i = 0; i < totalSquares; i++) {
        let gridSquare = document.createElement("div")
        gridSquare.addEventListener("mouseover", (e) => {
            gridSquare.style.background = randomRGB()
            gridSquare.style.opacity = Math.min((parseFloat(gridSquare.style.opacity) || 0)+0.1, 1)
        })
        gridSquare.className = "gridSquare"
        gridSquare.style.width = `${squareSize}px`
        gridSquare.style.height = `${squareSize}px`
        container.appendChild(gridSquare)
    }
}

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

function randomRGB() {
    const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1))
    const r = randomBetween(0, 255)
    const g = randomBetween(0, 255)
    const b = randomBetween(0, 255)
    const rgb = `rgb(${r},${g},${b})`
    return rgb
}

// Starting point. 16*16 grid when the grid is loaded first
createSquares(16)