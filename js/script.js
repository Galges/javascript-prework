function printMessage(msg){
  
var div = document.createElement('div');
div.innerHTML = msg; 
document.getElementById('messages').appendChild(div);

}

function clearMessages(){
document.getElementById('messages').innerHTML = '';

}

//printMessage('Zagrałem' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');



var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
} else if 
  (randomNumber == '2') {
      computerMove = 'nożyce';
      printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to kamień, to wygrywasz!');
  } else if  
  (randomNumber == '3') {
    computerMove = 'papier';
    printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');
  }
  
  printMessage('Mój ruch: ' + computerMove);

  var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
playerMove = 'kamień';
printMessage('Twój ruch: ' + playerMove);
} else if 
(playerInput == '2') {
playerMove = 'papier';
printMessage('Twój ruch: ' + playerMove);
} 
else if 
(playerInput == '3') {
playerMove = 'Nożyce';
printMessage('Twój ruch: ' + playerMove);
}
else {
  printMessage('Wybierz poprawna odpowiedź');
}

//printMessage('Twój ruch: ' + playerMove);
    
  


