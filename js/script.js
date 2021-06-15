function printMessage(msg){

const div = document.createElement('div');
div.innerHTML = msg; 
document.getElementById('messages').appendChild(div);

}

function clearMessages(){
document.getElementById('messages').innerHTML = '';

}

//printMessage('Zagrałem' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');





const homeUr1 ='playerMove = argButtonName'; 
'argButtonName, buttonTest';


function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  let computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
computerMove = 'kamień';
printMessage('Komputer ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
} else if 
(randomNumber == '2') {
    computerMove = 'papier';
    printMessage('Komputer ' + computerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');
} else if  
(randomNumber == '3') {
  computerMove = 'nożyce';
  printMessage('Komputer ' + computerMove + '! Jeśli Twój ruch to kamień, to wygrywasz!');
}

printMessage('Komputer: ' + computerMove);
  displayResult(argButtonName, computerMove);
}
buttonTest = document.getElementById('button-rock');
buttonTest.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonTest = document.getElementById('button-paper');
buttonTest.addEventListener('click', function(){ buttonClicked('papier'); });
buttonTest = document.getElementById('button-scissor');
buttonTest.addEventListener('click', function(){ buttonClicked('nożyce'); });



/*
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
playerMove = 'nożyce';
printMessage('Twój ruch: ' + playerMove);
}
else {
printMessage('Wybierz poprawna odpowiedź');
}

//printMessage('Twój ruch: ' + playerMove);
*/

function getMoveName(argMoveId) {
console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
if (argMoveId == 1) {
  return 'kamień';
}else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
      return 'nożyce';
} else {
  printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
  return 'kamień';
}
}


function displayResult(argPlayerMove, argComputerMove) {
console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
  printMessage('Wygrywasz!');
}else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
  printMessage('Wygrywasz');
}else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
  printMessage('Wygrywasz');
}else if (argPlayerMove ==  argComputerMove){
  printMessage('Remis');
} else {
  printMessage('Przegrywasz :(');
}
printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
/*
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

*/