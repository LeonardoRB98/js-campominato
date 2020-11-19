// 1. Il computer deve generare 16 numeri casuali tra 1 e 100.
// 2. I numeri non possono essere duplicati.
// 3. In seguito deve chiedere all’utente (100 - 16) volte di inserire
//    un numero alla volta,
//   sempre compreso tra 1 e 100.
//   L’utente non può inserire più volte lo stesso numero.
// 4. Se il numero è presente nella lista dei numeri generati, la partita termina,
//   altrimenti si continua chiedendo all’utente un altro numero.
// 5. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge
//    il numero massimo possibile di numeri consentiti.
// 6. Al termine della partita il software deve comunicare il punteggio, cioè il numero di
//    volte che l’utente ha inserito un numero consentito.

// -------------------------------------------------------------------------------
// FUNCTION

function randomNumber() {
  return Math.floor(Math.random()* 100)+1;;
}

function duplicatesCheck(num, array) {
  var exist = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == num) {
      exist = true;
    }
  }
  return exist;
}

// -------------------------------------------------------------------------------


var cpuNumbers = [];

while (cpuNumbers.length < 16) {
  var number = randomNumber();
  var alreadyExist = duplicatesCheck(number, cpuNumbers);
  if (alreadyExist == false) {
    cpuNumbers.push(number);
  }
}
console.log(cpuNumbers);
var userNumbers = [];

while (userNumbers.length < 5) {
  var numberUser = parseInt(prompt('inserisci un numero tra 1 e 100'));
  if (numberUser <= 100 && numberUser >= 1 ) {
    var alreadyExistUser = duplicatesCheck(numberUser, userNumbers)
    if (alreadyExistUser == false) {
      userNumbers.push(numberUser);
    }
  }
  console.log(userNumbers);
}
