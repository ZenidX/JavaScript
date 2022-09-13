let edad =22;
let numero ='22';
console.log(edad==numero);
console.log(edad===numero);

const edad1 =16;
console.log(edad1>=18);

const edad2 =22;
console.log(edad2>=18);

const edad3 = 22;
const autorizacion =false;
console.log(edad3>=18);
console.log(autorizacion);
console.log(edad3>=18 && autorizacion);
console.log(edad3>=18 || autorizacion);

const edad4 = 16;
if(edad4>=18){
    console.log("Puedes pasar tronco");
}
const edad5 = 22;
if(edad5>=18){
    console.log("Puedes pasar tronco");
}else{
    console.log("No puedes pasar tronco");
}

const edad6 = 22;
if (edad6>100){
    console.log('Eres demasiado mayor para bailes');
}else if(edad>=18){
    console.log("Puedes pasar tronco");
}else{
    console.log("No puedes pasar tronco");
}

