//Jsnack 3 - Chiedere per 10 volte un numero e poi stampa la somma di tutti i numeri

var numbers = [];
for (var i = 0; i < 10; i++) {

    numbers.push(parseInt(prompt('Insert a number')))

}

console.log(numbers);

var sum = 0
for (let index = 0; index < numbers.length; index++) {

    sum += numbers[index]

}
document.getElementById("snack-3").innerHTML = `the sum of all the numbers is: ${sum}`