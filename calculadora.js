var somar = require("./modulos/somar");
var media = require("./modulos/media");
var dividir = require("./modulos/dividir");
var multiplicar = require("./modulos/multiplicar");
var subtracao = require("./modulos/subtracao");
var mensagem = require ("./modulos/mensagem");
var nome = "João";

console.log("A soma de x e y é:" + somar(20,90));
console.log("A média de x e y é:" + media(20,90));
console.log("A divisão de x e y é:" + dividir(20,90));
console.log("O produto de x e y é:" + multiplicar(20,90));
console.log("A subtração de x e y é:" + subtracao(20,90));
console.log(mensagem(nome));