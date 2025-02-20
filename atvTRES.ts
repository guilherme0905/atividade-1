let teclado = require(`prompt-sync`) ();
let tempcelsius =parseInt(teclado(`Digite o número de graus celsius `));

let Fahrenheit: number = tempcelsius * (9/5) + 32;

console.log(`O valor transformado de celsius em Fahrenheit é de ${Fahrenheit}`);