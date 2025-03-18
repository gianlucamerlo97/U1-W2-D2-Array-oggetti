/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const num1 = 5;
const num2 = 7;
biggerNumber = num1 > num2 ? "The bigger number is num1" : "The bigger number is num2";
console.log(biggerNumber);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const num = 4;
isNumberEqualToFive = num === 5 ? "Equal to 5" : "not equal";
console.log(isNumberEqualToFive);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const number = 30;
fiveModule = number % 5;
isaMultipleOf5 = fiveModule == 0 ? "divisibile per 5" : "Non un multiplo di 5";
console.log(isaMultipleOf5);
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const integer1 = 8;
const integer2 = 1;
isEqualToEight = integer1 === 8 || integer2 === 8 || integer1 + integer2 === 8 || integer1 - integer2 === 8;
console.log(isEqualToEight);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let expedition = 10;
let totalShoppingCart;
totalShoppingCart = prompt("Quanto ha speso l'utente?");
totalShoppingCart = parseInt(totalShoppingCart);

if (totalShoppingCart > 50) {
  expedition = 0;
}
totalExpense = totalShoppingCart + expedition;
console.log(totalExpense);
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

totalShoppingCart = prompt("Quanto ha speso l'utente?");
totalShoppingCart = parseInt(totalShoppingCart);

if (totalShoppingCart > 50) {
  expedition = 0;
}
totalExpense = (totalShoppingCart + expedition) / 0.2;
console.log(totalExpense);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const x = 1;
const y = 5;
const z = 9;
if (x > y && x > z && y > z) {
  console.log(x + "\n" + y + "\n" + z);
} else if (x > y && x > z && z > y) {
  console.log(x + "\n" + z + "\n" + y);
} else if (y > x && y > z && x > z) {
  console.log(y + "\n" + x + "\n" + z);
} else if (y > x && y > z && z > x) {
  console.log(y + "\n" + z + "\n" + x);
} else if (z > x && z > y && y > x) {
  console.log(z + "\n" + y + "\n" + x);
} else {
  console.log(z + " n " + x + "\n" + y);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let r = " ";
const isANumber = typeof r === number ? true : false;
console.log(isANumber);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numero = 9;
isEvenOrOdd = num % 0 ? "Pari" : "Dispari";
console.log(isEvenOrOdd);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numbers.splice(9, 1, 100);
console.log(numbers);
