console.log('JS OK!');

/*
PASSAGGI:
    1. Chiedere quanti km l'utente vuole percorrere
    2. Chiedere l'eta del passegero
    3. Calcolare il prezzo totale del viaggio
        3a. Calcolare prezzo €/km
        3b. Applicare sconto 20% per i minorenni
        3c. Applicare sconto 40% per gli over 65
    4. Ottenere output del prezzo finale con massimo due decimali
*/

// 1. Chiedere quanti km l'utente vuole percorrere
const userJourney = parseInt(prompt('Quanti km vuoi percorrere? '));
if (isNaN(userJourney)) {
    alert("Hai inserito l'input sbagliato, ti prego di riprovare");
    window.location.reload();
}
console.log(userJourney);