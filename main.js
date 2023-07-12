"use srict"
const playButton = document.getElementById("playButton");
const squareContainer = document.getElementById("square-container");

// versione 1

// creo una funzione per creare i box
// playButton.addEventListener("click", function () {

//     function createBox() {
//         for (let i = 1; i < 101; i++) {
//             let box = document.createElement("div");
//             box.className = "single-box";
//             box.innerHTML = (i);
//             squareContainer.append(box);
//             box.style.flexBasis = `calc(100% / 10)`;
//             // box.textContent = box[i];
//             console.log(box);
//             box.addEventListener("click", function () {
//                 box.classList.toggle("open-cell");
//                 console.log(i);
//                 box.innerHTML = ("");


//             });

//         }

//     }
//     console.log(createBox())



// })


// versione 2

playButton.addEventListener("click", onBtnClick);

//creiamo il singolo elemento
function singleSquare(textContent) {
    let box = document.createElement("div");
    box.className = "single-box";
    box.style.flexBasis = `calc(100% / 10)`;
    box.innerHTML = textContent;
    box.addEventListener("click", function () {
        box.classList.toggle("open-cell");
        console.log(box.innerHTML);
        console.log(textContent);
        box.innerHTML = ("");

    });
    return (box);
}

//generiamone 100 al click
function onBtnClick() {

    const totalSquares = 101;
    const grid = [];
    for (let i = 1; i < totalSquares; i++) {
        const singleBox = singleSquare(i);
        grid.push(singleBox);
        squareContainer.append(singleBox);
        // singleBox.innerHTML = (i);
    }
    console.log(grid)






}