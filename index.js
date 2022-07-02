//definição das variáis 
const selectObject = document.querySelector('#rounds');
const playButton = document.querySelector('.btn3');
const scoreboard = document.querySelector('.header');
const playerOneButton = document.querySelector('.btn1');
const playerTwoButton = document.querySelector('.btn2');

playButton.addEventListener('click',function() {
  let scorePlayerOne = 0;
  let scorePlayerTwo = 0;

  scoreboard.innerText = `${scorePlayerOne} x ${scorePlayerTwo}`;
  playButton.innerText = 'RESET'; 


  //função que adiciona e checa se o vencedor é encontrado
  function oneUpdate() {
   scorePlayerOne++;
   scoreboard.innerText = `${scorePlayerOne} x ${scorePlayerTwo}`;
   if(scorePlayerOne == selectObject.value){
    playerOneButton.removeEventListener('click',oneUpdate,false); 
    playerTwoButton.removeEventListener('click',twoUpdate,false);
    }
  }


  function twoUpdate() {
   scorePlayerTwo++;
   scoreboard.innerText = `${scorePlayerOne} x ${scorePlayerTwo}`;
   if(scorePlayerTwo == selectObject.value){
    playerOneButton.removeEventListener('click',oneUpdate,false); 
    playerTwoButton.removeEventListener('click',twoUpdate,false);
    }
  }

  
  playerOneButton.addEventListener('click',oneUpdate,false);

  playerTwoButton.addEventListener('click',twoUpdate,false);



})
