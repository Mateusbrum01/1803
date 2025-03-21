/////ex01/////////////////////////////////

function verfificarPar(numero) {
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
verificarpalindromo(prompt("Digite algo"))

/////ex11///////////////////////////////// 

/////ex12///////////////////////////////// 



/////ex13///////////////////////////////// 

/////ex14///////////////////////////////// 

/////ex15///////////////////////////////// 

/////ex16///////////////////////////////// 

/////ex17///////////////////////////////// 

/////ex18///////////////////////////////// 

/////ex19///////////////////////////////// 

/////ex20///////////////////////////////// 

/////ex21///////////////////////////////// 

/////ex22///////////////////////////////// 

/////ex23///////////////////////////////// 

/////ex24///////////////////////////////// 

/////ex25///////////////////////////////// 