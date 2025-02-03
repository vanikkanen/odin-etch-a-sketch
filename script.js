const container = document.querySelector("#container")
const squareNo = 16*16 //16*16 grid
for (let i = 0; i < squareNo; i++) {
    let gridSquare = document.createElement("div")
    gridSquare.addEventListener("mouseover", (e) => {
        gridSquare.style.background = "gray"
    })
    gridSquare.className = "gridSquare"
    container.appendChild(gridSquare)
}


