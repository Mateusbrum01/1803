/////ex01/////////////////////////////////

/*function verfificarPar(numero) {
    if (numero % 2 === 0) {
        console .log("Número par");
    } else {
        console .log("Número ímpar");
    }
}

verfificarPar(7)

/////ex02/////////////////////////////////


function operacao(numero1, numero2) {

    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2;
    const divisao = numero2 % numero1;
  
    console .log (soma)
    console .log (subtracao)
    console .log (multiplicacao)
    console .log (divisao)
  
  }
    console.log(operacao(20, 2))

/////ex03/////////////////////////////////

    let contador = 10;
while (contador > 0) {
    console.log(contador)
    contador--;
}

/////ex04/////////////////////////////////

let original = "JS";
let reversed = original . split ("") . reverse ( ) . join ("") ;
console.log(reversed);

/////ex05/////////////////////////////////

let str = "uva";
let n = str.length;
console.log(n); 

/////ex06/////////////////////////////////

let carro = {
    marca: "ford",
    modelo: "focus",
    ano: "2016"
  };
  console.log(carro.modelo);

/////ex07/////////////////////////////////

function mensagemPersonlizada(nome, mensagem="Olá "){
    console.log(mensagem + nome);
}
mensagemPersonlizada(prompt("Qual o seu nome: "));

/////ex08/////////////////////////////////

function media(n1, n2, n3){

media = (Number(n1) + Number(n2) + Number(n3))/3 ;
console.log(media);
}
media(prompt("N1"), prompt("N2: "), prompt("N3: ")); 

/////ex09/////////////////////////////////

for(multiplo=1; multiplo<=20; multiplo++){
    if (multiplo % 3 == 0)
    {
       console.log(multiplo + " multiplo de 3");
    }else{
        console.log(multiplo + " não é multiplo de 3");
    }

}

/////ex10/////////////////////////////////    

function verificarpalindromo(str){
    str2 = str.split(" ");
    str2 = str2.reverse();
    str2 = str2.join(" ");
    return console.log(str === str2);

}
verificarpalindromo(prompt("Digite algo"))*/

/////ex11///////////////////////////////// 

function verificarSinal(x) {
if (x > 0){console.log("Positivo")}
if (x < 0){console.log("Negativo")}
if (x = 0){console.log("Zero")}
}
let frase = prompt("Digite um número: ");
verificarSinal(frase);


/////ex12///////////////////////////////// 

let texto2 = prompt("Qual a temperatura em celisus? ");

function converterTemperatura(celsius){
    let faren = (celsius * (9/5)) + 32;
    console.log("Essa temperatura em farenheits é " + faren);
}                                                                                                         
converterTemperatura(texto2);

/////ex13///////////////////////////////// 

let soma = 0;
while (numero <= 100) {
  soma = soma + numero;
  numero++;
}
console.log("A soma dos números de 1 até 100 é " + soma);

/////ex14///////////////////////////////// 

function substituirPalavra(text){
    console.log(text.replace(/azul/g, "vermelho"));
}

let texto = prompt("Digite o texto: ");
substituirPalavra(texto);

/////ex15///////////////////////////////// 

/////ex16///////////////////////////////// 

let fruta= ["uva", "banana", "laranja", "melão"];
console.log(fruta[2]);

/////ex17///////////////////////////////// 



/////ex18///////////////////////////////// 

/////ex19///////////////////////////////// 

/////ex20///////////////////////////////// 

let palavra = prompt("Digitea a palavra");

function contarVogais(palavras){
    const vogais = "aeiouAEIOU"
    let contador = 0;

    for (let letra of palavra){
        if(vogais.includes(letra)){
            contador++;
        }
    }
    console.log(contador);
}
contarVogais(palavra);

/////ex21///////////////////////////////// 



/////ex22///////////////////////////////// 

/////ex23///////////////////////////////// 

/////ex24///////////////////////////////// 

/////ex25///////////////////////////////// 