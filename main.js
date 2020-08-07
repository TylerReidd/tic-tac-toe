/*------Constants------*/
const colors = {
    playerX: 'blue',
    playerO: 'red',
    null: 'gray'
 }
//this can all be one array 

/*------Variables (state)------*/
//DOOOONNNEEE
//JS representation of the board 
let board, turn, winner;

/*------Cached Element References------*/

// You might choose to put your game status here
let gameStatus = document.getElementById('message');



// HTML representation of the board "squares on the page"
  allSq = document.getElementsByClassName("grid-item");
// const sq0 = document.getElementById('sq0')
// const sq1 = document.getElementById('sq1')
// const sq2 = document.getElementById('sq2')
// const sq3 = document.getElementById('sq3')
// const sq4 = document.getElementById('sq4')
// const sq5 = document.getElementById('sq5')
// const sq6 = document.getElementById('sq6')
// const sq7 = document.getElementById('sq7')
// const sq8 = document.getElementById('sq8')


      //start over
const resetButton = document.getElementById('reset-button').addEventListener('click', function(){render()});

/*------Event Listeners------*/
          //target                   
// This is where you should put the event listener
// for a mouse-click
//DONNEEE
sq0.addEventListener('click', function(){changePlayer(sq0)}); 
sq1.addEventListener('click', function(){changePlayer(sq1)});
sq2.addEventListener('click', function(){changePlayer(sq2)});
sq3.addEventListener('click', function(){changePlayer(sq3)});
sq4.addEventListener('click', function(){changePlayer(sq4)});
sq5.addEventListener('click', function(){changePlayer(sq5)});
sq6.addEventListener('click', function(){changePlayer(sq6)});
sq7.addEventListener('click', function(){changePlayer(sq7)});
sq8.addEventListener('click', function(){changePlayer(sq8)});
document.getElementById('reset-button').addEventListener('click', function(){init()});
/*------Functions------*/
//DONNNEEEE
  init()                           
function changePlayer(sq){ 
     if(sq.style.backgroundColor !== colors.null){
           return gameStatus = 'Tisk, Tisk, Tisk'
     }
      if(turn === 1) {
            sq.style.backgroundColor = colors.playerX 
      } else if (turn === -1){
            sq.style.backgroundColor = colors.playerO;
      }
      console.log(sq,sq.index)
      board[sq.getAttribute("index")] = turn
      winCombos()
      turn *= -1;
      
}
// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

//DONNEEEE!!!
function init() {
   board = [null, null, null, null, null, null, null, null, null];
   turn = 1
   gameStatus.textContent = 'Blue Player, make your move';
   winner = null;
}
//DOOONNNEEE
function winCombos(){
      if(board[0]+ board[1] + board[2] === 3 || board[3] + board[4] + board[5] === 3 || board[6]+ board[7] + board[8] === 3 || board[0] + board[3] + board[6] === 3 || board[1] + board[4] + board[7] === 3 || board[2] + board[5] + board[8] === 3 || board[0] + board[4] + board[8] === 3 || board[2] + board[4] + board[6] === 3) {
            
            gameStatus.textContent = "Blue Player Wins!!";
            winner = playerX;
      }
      if(board[0]+ board[1] + board[2] === -3 || board[3] + board[4] + board[5] === -3 || board[6]+ board[7] + board[8] === -3 || board[0] + board[3] + board[6] === -3 || board[1] + board[4] + board[7] === -3 || board[2] + board[5] + board[8] === -3 || board[0] + board[4] + board[8] === -3 || board[2] + board[4] + board[6] === -3)
            {
                  gameStatus.textContent = "Red Player Wins!!";
                  winner = playerO;
      }
      
}
// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is
//check the state of the board FOREACH item render decides red, blue, or nothing
function render() {    
            for(let i = 0; i < allSq.length; i++){      
                  allSq[i].style.backgroundColor = colors.null;
            }
}
render()

