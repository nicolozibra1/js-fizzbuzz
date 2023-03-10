const numSquare = 100;

const grid = document.getElementById('grid');
const FizzBuzz = "FizzBuzz";
const fizz = "Fizz"
const buzz = "Buzz"

for (let i = 1; i <= numSquare; i++){
    grid.innerHTML += 
        `<div class="square-box">
            <div class="square">
                ${i}
            </div>
        </div>`;
    if (i % 3 === 0 && i % 5 === 0){
        grid.innerHTML +=
        `<div class="square-box">
            <div class="square">
                ${FizzBuzz}
            </div>
        </div>`;
    }
    else if (i % 3 === 0){
        grid.innerHTML +=
        `<div class="square-box">
            <div class="square">
                ${fizz}
            </div>
        </div>`;
    }
    else if (i % 5 === 0){
        grid.innerHTML +=
        `<div class="square-box">
            <div class="square">
                ${buzz}
            </div>
        </div>`;
    }

    console.log(i);
}