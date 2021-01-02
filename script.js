//Ex 2
console.log("Olá mundo! (Arquivo externo)");

//Ex 3
let num1 = 2;
let num2 = 2;
let sum = num1 + num2;
alert(sum);

//Ex 4
document.querySelector("#exibir-nome").addEventListener('click', function(){
  var nomeCompleto = document.querySelector("#nome-completo").value;
  alert("O nome completo é: " + nomeCompleto);

  //Ex 5
  console.log(nomeCompleto + " // " + nomeCompleto.length)
});

//Ex 6
var lampada = document.querySelector("#lampada")
var aceso = false;

lampada.addEventListener("click", function(){
  if(aceso == false){
  lampada.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true";
  aceso = true;
  }else{
    lampada.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true"
    aceso = false;
  }
});

//Ex 7
lampada.addEventListener("mouseover", function(){
  if(aceso == false){
  lampada.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true";
  aceso = true;
  }else{
    lampada.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true"
    aceso = false;
  }
});

//Ex7a
 document.querySelector("#saudacao-but").addEventListener("click",function(){

  var nome2 = document.querySelector("#nome2").value;
  var sobrenome = document.querySelector("#sobrenome").value;

  alert("Olá " + nome2 + " " + sobrenome);
});

//Ex8 (newbie)
var cpf = document.querySelector("#cpf");
cpf.addEventListener("keyup", function(){
  var valorCPF = document.querySelector("#cpf").value;
  for(i=1; i<valorCPF.length; i++){
    var valorAtual = 11 - [i+1];
  }
  if(valorAtual==null){
    document.querySelector("#primeiro-em").innerText = "Faltam 11 dígitos";
  }else{
  document.querySelector("#primeiro-em").innerText = "Faltam " + valorAtual + " dígitos";}
});

//Ex8
var cpf2 = document.querySelector("#cpf2");
cpf2.addEventListener("keyup",function(){
  var valorCPF2 = cpf2.value;
  var resultado = valorCPF2.replace(/[^0-9]/g, "").replace(/^([\d]{3})([\d]{3})?([\d]{3})?([\d]{2})?/, "$1.$2.$3-$4");
  document.querySelector("#segundo-em").innerText = resultado;
});

//Ex8
/*document.getElementById("cpf").addEventListener("keyup", function(){
  const cpf = document.getElementById("cpf").value;
  var cpf_formatado = document.getElementById("cpf").value;

  if(cpf.length > 8)
  cpf_formatado = [cpf.slice(0, -8), ".", cpf.slice(-8)].join('');
  if(cpf.length > 5)
  cpf_formatado = [cpf_formatado.slice(0, -5), ".", cpf_formatado.slice(-5)].join('');
  if(cpf.length > 2)
  cpf_formatado = [cpf_formatado.slice(0, -2), "-", cpf_formatado.slice(-2)].join('');

  document.getElementById("cpf-formatado").innerText = cpf_formatado;
})


ou

function replacer(match, p1, p2, p3, p4, offset, string) {
var array = [p1, p2, p3, p4];
return (array.reduce(function (carry, value, index) {
  if(value)
      return (carry + (index === array.length - 1 ? '-' : '.') + value);
  return (carry);
}));
}

document.querySelector('#cpf').addEventListener('keyup', function() {

      let value = document.querySelector('#cpf').value.replace(/[^0-9]/g, "").replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})/, replacer);

  document.querySelector('#coelho').innerText = value;


});*/

//Ex9

//Ex10
var btnResult = document.querySelector("#btn-soma");
btnResult.addEventListener("click",function(){

  var soma1 =  parseInt(document.querySelector("#soma1").value);
  var soma2 =  parseInt(document.querySelector("#soma2").value);

    if (isNaN(soma1) == false && isNaN(soma2) == false ) {
      var resultadoSoma = soma1 + soma2;
      document.querySelector("#resultado-soma").innerText = resultadoSoma;
    }else{
      document.querySelector("#resultado-soma").innerText = "Digite números válidos";
    }
});

//Ex12a
var btnVerdeOn = false;
var btnVerde = document.querySelector("#verde");

btnVerde.addEventListener("click",function(){
  if(btnVerdeOn == false){
    btnVerde.style = "background-color: green;"
    btnVerdeOn = true;
  }else{
    btnVerde.style = "background-color: ''"
    btnVerdeOn = false;
  }
});

var btnVermelhoOn = false;
var btnVermelho = document.querySelector("#vermelho");

btnVermelho.addEventListener("click",function(){
  if(btnVermelhoOn == false){
    btnVermelho.style = "background-color: red;"
    btnVermelhoOn = true;
  }else{
    btnVermelho.style = "background-color: ''"
    btnVermelhoOn = false;
  }
});

//Ex14
window.onload = function() {
  document.querySelector("#resultado").innerText= "Esse texto foi inserido pelo JavaScript..."
};

//Ex15
document.querySelector("#exibir-texto").addEventListener("click", function(){
  document.querySelector("#resultado2").innerText= "Esse texto foi inserido pelo JavaScript..."
});

//Ex16
function resultadoDaSoma(soma3,soma4){
  return soma3 + soma4;
}


var btnResult2 = document.querySelector("#btn-soma2");
btnResult2.addEventListener("click",function(){

  var soma3 =  parseInt(document.querySelector("#soma3").value);
  var soma4 =  parseInt(document.querySelector("#soma4").value);

    if (isNaN(soma3) == false && isNaN(soma4) == false ) {
      var resultadoSoma2 = resultadoDaSoma(soma3,soma4)
      document.querySelector("#resultado-soma2").innerText = resultadoSoma2;
    }else{
      document.querySelector("#resultado-soma2").innerText = "Digite números válidos";
    }
});

//Ex17
function resultadoDaSoma2(numero1,numero2){

  if ( numero1 != null && numero2 !=null ){
    return numero1 + numero2;
  }else{
    return 0;
  }
}

//Ex18
var resto = 5%2;
console.log(resto)

//Ex19
function ParOuImpar(num1){
  if(num1%2 == 0){
    console.log("Par!")
  }else{
    console.log("Ímpar!")
  }
}

ParOuImpar(2)

//Ex20
function multiplicacao(num1,num2){
  return num1 * num2;
}
console.log(multiplicacao(2,3))

//Ex21
function desconto(preco){
  var precoComDesconto = preco*0.05;
  return precoComDesconto;
}
console.log(desconto(10))

//Ex22
function maiorOuMenor(anoDeNascimento){
  now = new Date;
  if(now.getFullYear() - anoDeNascimento >= 18){
    console.log("Maior de idade.");
  }else{
    console.log("Menor de idade.");
  }
}
maiorOuMenor(1996)

//Ex23
document.querySelector("#resultado3").innerHTML = "Repetição";

//Ex24
document.querySelector("#resultado4").innerHTML = "Repetição";
document.querySelector("#resultado4").innerHTML += " Repetição";

//Ex25
for(i=0; i<20; i++){
  document.querySelector("#resultado5").innerHTML += "Repetição ";
}

//Ex26
var repeticoes = [1,2,3,4,5]

function imprimirRepeticoes(){
  document.querySelector("#resultado6").innerHTML += "Repetição ";
}
repeticoes.forEach(imprimirRepeticoes);

//Ex27-28
var n = 0;
while(n<5){
  document.querySelector("#resultado7").innerHTML += "Repetição ";
  n++;
}

//Ex29
for(i=0;i<11;i++){
  document.querySelector("#resultado8").innerHTML += i + " ";
}

//Ex30
for(i=0;i<21;i++){
  if(i%2 == 0){
    document.querySelector("#resultado10").innerHTML += i + " ";
  }
}

//Ex31
for(i=0;i<11;i++){
  for(j=0;j<11;j++){
  console.log(i + " x " + j + " = " + i*j);
  document.querySelector("#resultado11").innerHTML += i + " x " + j + " = " + i*j + "<br>";
}
}

//Ex32
function games(string){
  if(string.match(/dota/gi)){
    return true;
  }else{
    return false;
  }
}

console.log(games("cs é legal"));

//Ex33
var numeroAleatorio = Math.floor(Math.random()*10);
//alert(numeroAleatorio);

//Ex34
var chute = parseInt(document.querySelector("#numero-aleatorio").value);

document.querySelector("#verificar-acerto").addEventListener("click",function(){
  if(chute == numeroAleatorio){
    alert("Acertô miserávi! O número é: " + numeroAleatorio)
  }else{
    alert("Errou! O número é: " + numeroAleatorio)
  }
});

//ex35
var today = new Date();
var dia = today.getDate();
var mes = today.getMonth();
var ano = today.getFullYear();

if(mes <= 11){
document.querySelector("#data").innerHTML = "A data de hoje é: " + dia + "/" + (mes+1) + "/" + ano;
}else{
  document.querySelector("#data").innerHTML = "A data de hoje é: " + dia + "/" + "01" + "/" + ano;
}


//ex36
if(mes <= 10){
document.querySelector("#data").innerHTML += ". O próximo mês será: " + (mes+1);
}else{
  document.querySelector("#data").innerHTML += ". O próximo mês será: " + "01";
}

//ex37a
var deuses = ['Aegir', 'Aud', 'Balder']
console.log(deuses.length);

//ex37b
for(i=0; i<deuses.length; i++){
  alert(deuses[i])
}

//ex37c - precisa terminar
//deuses.filter();
//alert(novoArray)

//Ex37e
deuses.push("Loki","Odin","Frey")
console.log(deuses);

//Ex37f
var deuses2 = ['Aegir', 'Aud', 'Balder']
deuses2[deuses2.length] = "Loki";
deuses2[deuses2.length] = "Odin";
deuses2[deuses2.length] = "Frey";
console.log(deuses2)

//Ex37g
var numbers = [5, 7, 1, 8, 9]
console.log(numbers.sort());

//Ex37h
var menorMaior = numbers.sort();
var maiorMenor = menorMaior.reverse();
console.log(maiorMenor);

//Ex38
var deuses3 = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr']
for(i=0;i<deuses3.length;i++){
  document.querySelector("#nomes").innerHTML += deuses3[i] + " ";
}

//Ex39
var itemLista = document.querySelector("#itens-lista").value;
document.querySelector("#btn-lista").addEventListener("click",function(){
  var itemLista = document.querySelector("#itens-lista").value;
  document.querySelector("#lista").innerHTML += "<li>"+ itemLista +"</li> <br>";
});

//Ex40
var itemLista = document.querySelector("#itens-lista").value;
document.querySelector("#btn-lista").addEventListener("click",function(){
  var itemLista = document.querySelector("#itens-lista").value;
  document.querySelector("#lista").innerHTML += "<li>"+ itemLista +"</li> <br>";
});
