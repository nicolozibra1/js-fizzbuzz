const numSquare = 100;




const grid = document.getElementById('grid');

for (let i = 1; i <= numSquare; i++){
    grid.innerHTML += 
        `<div class="square-box">
            <div class="square">
                ${i}
            </div>
        </div>`;
}