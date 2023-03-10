const numSquare = 100;

const grid = document.getElementById('grid');
const FizzBuzz = "FizzBuzz";
const fizz = "Fizz"
const buzz = "Buzz"

for (let i = 1; i <= numSquare; i++){
    
    if (i % 3 === 0 && i % 5 === 0){
        grid.innerHTML +=
        `<div class="square-box">
            <div class="square fizz-buzz">
                ${FizzBuzz}
            </div>
        </div>`;
        console.log(FizzBuzz);
    }

    else if (i % 3 === 0){
        grid.innerHTML +=
        `<div class="square-box">
            <div class="square fizz">
                ${fizz}
            </div>
        </div>`;
        console.log(fizz);
    }
    
    else if (i % 5 === 0){
        grid.innerHTML +=
        `<div class="square-box">
            <div class="square buzz">
                ${buzz}
            </div>
        </div>`;
        console.log(buzz);
    }

    else{
    grid.innerHTML += 
        `<div class="square-box">
            <div class="square">
                ${i}
            </div>
        </div>`;
        console.log(i);
    }

}