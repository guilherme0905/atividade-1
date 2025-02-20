let teclado = require(`prompt-sync`) ();
let Fahrenheit = parseInt(teclado(`Digite o número de graus celsius `));

let celsius: number = (Fahrenheit - 32) * 5/9;

console.log(`O valor transformado de Fahrenheit em celsius é de ${celsius}`);