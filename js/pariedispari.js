console.log('pari e dispari')

/*
*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto
*/

// Chiediamo all'utente di scegliere pari o dispari
const paridispari = prompt('Scgli pari o dispari')
console.log(paridispari)
// L'utente sceglie un numero da 1 a 5
const numUtente = parseInt (prompt('scegli un numero da 1 a 5'))
console.log(numUtente)
// Generiamo una funzione che genera numeri random da 1 a 5
function numRandom () {
    let numeroRandom = parseInt (Math.floor(Math.random() * 5 + 1));
    return numeroRandom
}
const numComputer = numRandom ()
console.log (numComputer)
// Eseguiamo la somma dei due numeri
let somma = numUtente + numComputer
console.log (somma)
// Generiamo una funzione che stabilisce se un numero è pari o dispari

// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo il vincitore