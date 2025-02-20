var teclado = require("prompt-sync")();
var tempcelsius = parseInt(teclado("Digite o n\u00FAmero de graus celsius "));
var Fahrenheit = tempcelsius * (9 / 5) + 32;
console.log("O valor transformado de celsius em Fahrenheit \u00E9 de ".concat(Fahrenheit));
