"use srict"
const playButton = document.getElementById("playButton");
const squareContainer = document.getElementById("square-container");

// versione 1

// creo una funzione per creare i box
playButton.addEventListener("click", function () {

    function createBox() {

        for (let i = 1; i < 101; i++) {
            let box = document.createElement("div");
            box.className = "single-box";
            box.innerHTML = (i);
            squareContainer.append(box);
            const squaresPerRow = Math.sqrt(100);
            box.style.flexBasis = `calc(100% / 10)`;
            // box.textContent = box[i];
            console.log(box);
            box.addEventListener("click", function () {
                box.classList.toggle("bg-success");
                console.log(i);
            });

        }

    }
    console.log(createBox())



})


// versione 2

    // playButton.addEventListener("click", onBtnClick);

    // //creiamo il singolo elemento
    // function singleSquare() {
    //     let box = document.createElement("div");
    //     box.className = "single-box";
    //     box.style.flexBasis = `calc(100% / 10)`;

    //     box.addEventListener("click", function () {
    //         box.classList.toggle("bg-success");

    //     });
    //     return (box);
    // }

    // //generiamone 100 al click
    // function onBtnClick() {

    //     const totalSquares = 101;
    //     const grid = [];
    //     for (let i = 1; i < totalSquares; i++) {
    //         const singleBox = singleSquare();
    //         grid.push(singleBox);
    //         squareContainer.append(singleBox);
    //         singleBox.innerHTML = (i);
    //     }
    //     console.log(grid)






// }