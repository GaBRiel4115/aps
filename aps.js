/*
APS da Disciplina Programação em JavaScript
Unicarioca
Turma: 123N
Nome: Gabriel Sousa Oliveira    
Matricula: 2024100595
Email: gabrieloliveir400@gmail.com
*/
 
//Verifica se um numero é ou nao Primo
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) { // se for um divisor ate a raiz, o numero nao e primo 
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function findLargestPrimes() {
    const userInput = parseInt(prompt("Digite um número:"));
    const largestPrimes = [];
    let currentNumber = userInput;

    while (largestPrimes.length < 10) {
        if (isPrime(currentNumber)) {
            largestPrimes.push(currentNumber);
        }
        currentNumber++;
    }

    console.log("Os 10 maiores números primos a partir de", userInput, "são:");
    console.log(largestPrimes);
}

findLargestPrimes();