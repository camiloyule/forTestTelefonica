var inicialBoard;
const xplayer='x';
const yplayer='o';
var initialPlayer= 'x';
var currentPlayer='';
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
    if(currentPlayer==''){

        currentPlayer=xplayer;
    }
   
    initialBoard= Array.from(Array(9).keys());
    
    console.log(cells)
    for (var i = 0; i < cells.length; i++) {
		
		
		cells[i].addEventListener('click', pickOne, false);
	}
}


function pickOne(block){
    console.log(block);
    // debugger;
    var blockid= block.target.id;
    var blockTouched= document.getElementById(blockid);
    var touched;
    if(currentPlayer=='x'){

        touched= blockTouched.querySelector('.xtrick');
    }else{
        touched= blockTouched.querySelector('.otrick');
    }
    touched.classList.add('activeTrick');
    console.log(blockTouched);
    changePlayer();
   
}

function changePlayer(){

if(currentPlayer=='x')
{
    currentPlayer='o';
}else{
    currentPlayer='x';
}

}

function reStart(){
    if(initialPlayer=='x')
{
    initialPlayer='o';
}else{
    initialPlayer='x';
} 
// debugger;
    var doneTricks= document.querySelectorAll('.activeTrick');
    for (var i = 0; i < doneTricks.length; i++) {
		
		
		doneTricks[i].classList.remove('activeTrick')
	}
}