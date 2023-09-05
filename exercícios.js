/*let condicao1 = true;
if (condicao1){
    console.log('Entrei no if 1!');
}

let condicao2 = false;

if(condicao2){
    console.log('Entrei no if2!');
}*/

//--------------------------------------------------------------------------------------------------------------------------------

//Exercício 1
/*let n1 = Number(prompt("Diga um número"));
let n2 = Number(prompt("Diga um número"));

function numeros(num1, num2){
   if (num1 === num2){
    console.log('Sucesso');                                                    //método 1
   }

}

//--------------------------------------------------------------------------------------------------------------------------------

numeros(n1, n2);

function recebeDoisNumeros(num1, num2){
    if(num1 === num2 ){
        return "Sucesso";
    }
}
console.log(
    recebeDoisNumeros(
        Number(prompt("Digite um número")),                                      //método 2
        Number(prompt("Digite um número"))
    )
); 

//--------------------------------------------------------------------------------------------------------------------------------
let nome = prompt("Qual seu nome");
let idade = Number(prompt("Qual sua idade"));

function teste (nome, idade){
    if(idade >= 18){
        console.log(nome, "você pode dirigir")
    }
    else{
        console.log(nome, "você não pode dirigir")
    }
   
}

teste(nome, idade);


let condicao = false;
if (condicao){
    console.log('Entrei no if!');
} else {
    console.log('Entrei no else!');



let n1 = Number(prompt("Diga um número"));
let n2 = Number(prompt("Diga um número"));

function numeros(num1, num2){
    if (num1 === num2){
        console.log("iguais");
    }
    else{
        console.log("diferentes");
    }
}

numeros(n1, n2)*/


/*
let n1 = Number(prompt("Diga um número"));
let n2 = Number(prompt("Diga um número"));

function numeros(num1, num2){
    if (num1 === num2){
        console.log("iguais");
    } else if(num1 > num2){
        console.log("maior");
    } else if(num1 < num2){
        console.log("menor");
    }
    
}

numeros(n1, n2)


let paisDeOrigem
switch (paisDeOrigem){
    case 'Brasil':
        console.log('brasileiro')
        break
    case 'EUA':
        console.log('norte americano')
        break
    case 'Inglaterra':
        console.log('inglês')
        break
     default:
        console.log('nacionalidade não encontrada')
        break
}*/

/*let pokemon = prompt("Escolha um pokemon: Bulbassauro, Charmander, Squirtle")

switch(pokemon){
    case 'Bulbassauro':
        console.log('Planta e Veneno')
        break
    case 'Charmander':
        console.log('Fogo')
        break
    case 'Squirtle':
        console.log('Água')
        break
        default:
            console.log("Pokemon não encontrado")
        break
}*/

let ensino = prompt("Você concluiu o ensino médio?");
let idade = Number(prompt("Quantos anos você temm"));
let cursando = prompt("Você está cursando outra faculdade?");

function faculdade (ensino, idade, cursando){
    if (idade >= 18 && ensino === "sim" && cursando === "não"){
       console.log("Você pode estudar em uma faculdade"); 
    }
    else{
        console.log("Você não pode estudar em uma faculdade");
    }

}

faculdade(ensino, idade, cursando);
