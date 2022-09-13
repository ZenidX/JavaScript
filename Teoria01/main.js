var nombre = 'Xavi';
let apellido = 'Lara Moreno';
const dni = '53874199T';
let user = "Admin", password = '123456aA', message = "Login Success!", id = 1234;
console.log("Hola mundo desde JS");
let lenguaje = 'JavaScript';
console.log(typeof lenguaje);
let edad = 30;
console.log(typeof edad);
let booleano = false;
console.log(typeof booleano)
let nullete = null;
console.log(typeof nullete);
let undeffi = undefined;
console.log(typeof undefined);
const value1 = Symbol("hello");
const value2 = Symbol("hello");
console.log(value1==value2);
console.log(value1.description==value2.description);
const objeto = {name : 'David', apellido:'bernal gonzalez'};
console.log(objeto);
console.log(objeto.name);
console.table(objeto)
const objeto1 =[1,"dos",3];
console.log(objeto1);
console.log(objeto1[0]);
console.log(objeto1[1]);
console.log(objeto1[2]);
const saludar = function(){
    console.log('Hola');
    console.log(typeof saludar);
}
saludar();