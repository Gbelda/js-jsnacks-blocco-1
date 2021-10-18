//J snack 2 - Chiedere con 2 prompt 2 parole diverse e mettere in stampo prima la parola piu corta e poi quella piu lunga

const firstWord = prompt("Write a word");
const secondWord = prompt("Write another word");
let longer = document.getElementById("snack-2");

if (firstWord.length > secondWord.length) {
    longer.innerHTML = `${secondWord} 
    ${firstWord}`

} else if (secondWord.length > firstWord.length) {
    longer.innerHTML = `${firstWord} 
    ${secondWord}`

} else {
    longer.innerHTML = "SAME WORD LENGHT"
}
