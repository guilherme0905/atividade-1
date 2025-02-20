var teclado = require("prompt-sync")();
var Fahrenheit = parseInt(teclado("Digite o n\u00FAmero de graus celsius "));
var celsius = (Fahrenheit - 32) * 5 / 9;
console.log("O valor transformado de Fahrenheit em celsius \u00E9 de ".concat(celsius));
