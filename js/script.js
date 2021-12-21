console.log("JS OK!");

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
const userJourney = parseInt(prompt("Quanti km vuoi percorrere? ").trim());
if (isNaN(userJourney) || userJourney == 0) {
    alert("Hai inserito l'input sbagliato, ti prego di riprovare");
    window.location.reload();
}
console.log('Chilometri percorsi: ', userJourney);
// 2. Chiedere l'eta del passegero
const userAge = parseInt(prompt("Quanti anni hai? ").trim());
if (isNaN(userAge) || userAge == 0) {
    alert("Hai inserito l'input sbagliato, ti prego di riprovare");
    window.location.reload();
}
console.log('Anni del passeggero: ', userAge);
// 3. Calcolare il prezzo totale del viaggio
// # 3a. Calcolare prezzo €/km
const ticketPrice = 0.21 * userJourney;
let userDiscount;
let finalPrice;
// 3b. Applicare sconto 20% per i minorenni
if (userAge < 18) {
    userDiscount = (ticketPrice * 0.20).toFixed(2);
    console.log('Lo sconto per il passeggero è stato di: ', userDiscount);
    finalPrice = (ticketPrice - userDiscount).toFixed(2);

    console.log('Il prezzo dopo aver applicato lo sconto è: ', finalPrice);


} else if (userAge > 65) {
    userDiscount = (ticketPrice * 0.40).toFixed(2);
    console.log('Lo sconto per il passeggero è stato di: ', userDiscount);
    finalPrice = (ticketPrice - userDiscount).toFixed(2);

    console.log('Il prezzo dopo aver applicato lo sconto è: ', finalPrice);

} else {
    userDiscount = 0;
    finalPrice = ticketPrice;
    console.log('Lo sconto per il passeggero è stato di: 0');
    console.log('Il prezzo del biglietto è: ', ticketPrice);
}
const userJourneyResult = document.getElementById('journey');
userJourneyResult.innerHTML = `Chilometri da percorrere: ${userJourney}`;
const userAgeResult = document.getElementById('userAge');
userAgeResult.innerHTML = `Età del passeggero: ${userAge}`;
const userDiscountResult = document.getElementById('userDiscount');
userDiscountResult.innerHTML = `Sconto applicato: ${userDiscount}€`;
const userTicketPriceResult = document.getElementById('ticketPrice');
userTicketPriceResult.innerHTML = `Prezzo del biglietto: ${finalPrice}€`;