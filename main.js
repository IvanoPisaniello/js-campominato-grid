const playButton = document.getElementById("playButton");
const squareContainer = document.getElementById("square-container");


//creo una funzione per creare i box
// playButton.addEventListener("click", function () {

//     function createBox() {

//         for (let i = 0; i < 100; i++) {

//             let box = document.createElement("div");
//             box.className = "single-box";

//             squareContainer.append(box);
//             const squaresPerRow = Math.sqrt(100);
//             box.style.flexBasis = `calc(100% / 10)`;
//             box.textContent = box[i];
//             console.log(box);

//             // return (box);
//         }


//     }
//     console.log(createBox())



// })

playButton.addEventListener("click", onBtnClick);

//creiamo il singolo elemento
function singleSquare() {
    let box = document.createElement("div");
    box.className = "single-box";
    box.style.flexBasis = `calc(100% / 10)`;

    box.addEventListener("click", function () {
        box.classList.toggle("bg-success");

    });
    return (box);
}

//generiamone 100 al click
function onBtnClick() {

    const totalSquares = 101;
    const grid = [];
    for (let i = 1; i < totalSquares; i++) {
        const singleBox = singleSquare();
        grid.push(singleBox);
        squareContainer.append(singleBox);
        singleBox.innerHTML = (i);
    }
    console.log(grid)






}

