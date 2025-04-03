// * SVOLGIMENTO

// * Per 100 volte (ciclo for)
for (let i = 1; i <= 100; i++) {
  // * SE il resto della divisione tra indice e 15 è pari a 0
  if (i % 3 === 0 && i % 5 === 0) {
    // * Stampo "FizzBuzz"
    console.log("FizzBuzz");
  }
  // * SE il resto della divisione tra indice e 5 è pari a 0
  else if (i % 5 === 0) {
    // * Stampo "Buzz"
    console.log("Buzz");
  }
  // *SE il resto della divisione tra indice e 3 è pari a 0
  else if (i % 3 === 0) {
    // * Stampo "Fizz"
    console.log("Fizz");
  }
  // * ALTRIMENTI
  else {
    // * Stampo l'indice del ciclo
    console.log(i);
  }
}
