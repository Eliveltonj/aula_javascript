

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://bolpite.com.br/");  // outra aba
    // window.location.href ="https://bolpite.com.br/";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
    elemento.innerHTML = "Obrigado por passar o mouse";
   // alert("Trocar texto");
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui</b>";
    elemento.innerHTML = "passe o mouse aqui";
}
function load(){
    alert("Página carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}

/*function soma(n1, n2){
    return n1 + n2;
}
*/
/*
var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);
*/

/*function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(soma(5, 10));
alert(setReplace("vai Japão", "Japão","Brasil"));
*/


/* var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/* var count;
for(count = 0; count <= 5; count++){
    alert(count);
};
*/


/* var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/


/* var idade = prompt("Qual sua idade");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/


/*var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/* var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "péra","laranja"];
//lista.push("uva");
// lista.pop();

//console.log(lista[0]); 
//console.log(lista.toString());
//console.log(lista.join(" - "))


// var nome = "Elivelton de jesus";
// var n1 = 5;
// var n2 = 3;
// var frase = "Japão e o melhor time do mundo";
// alert(nome + " tem "+ idade + " anos ");
// alert(idade + idade2);
// console.log(nome);
// console.log(n1 * n2);
// console.log(frase.toLowerCase());
// alert(frase.replace("Japão","Brasil"));