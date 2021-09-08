var inicialBoard;
const xplayer='x';
const yplayer='o';
const initialPlayer= 'x';

const winnerPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]


const cells= document.querySelectorAll('.cell');

start();

function start(){

    initialBoard= Array.from(Array(9).keys());
    console.log(initialBoard)
}