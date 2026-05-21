

let squares = document.querySelectorAll('div');
let reset = document.getElementById('reset');


function colorChange(event) {
    event.target.style.color = 'black';
}

squares.forEach((square) =>{
    square.addEventListener('click', colorChange)
})

function resetTable(event) {
    event.target = squares.forEach((square) => {
        square.style.backgroundColor = 'white';
        square.style.color = 'white';
        reset.style.color = 'black';

})
}

reset.addEventListener('click', resetTable)
