
var nombre = 'David';
console.log(typeof(nombre));

var y = "Varaible global Y";
function foo(){
    let y ="Variable local Y";
    console.log(y);
}
foo();
console.log(y);

let y1 = "Variable global Y";
function foo1(){
    var y1 = "Variable local Y";
    console.log(y1);
}
foo1();
console.log(y1);

function miNumero(){
    var numero = 18;
}
console.log(numero);

var numero = 1;
if(true){
    console.log(numero);
}

var nombre = "Messi";
var nombre = "Dembele";
console.log(nombre);

var nombre = "Messi";
nombre = "Dembele";
console.log(nombre);

function foo2(){
    var a =50;
    console.log(a);
    for(var a=0;a<10;a++){
        console.log(a);
    }
    console.log(a);
}
foo2();

let nombre1 = 'Messi';
nombre1 = 'Dembele';
console.log(nombre);
if(true){
    let nombre="Dembele";
    console.log(nombre);
}

console.log(pi);
const pi = 3.1415;