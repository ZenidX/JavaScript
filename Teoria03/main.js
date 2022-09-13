function saludar(){
    console.log('Hola');
}
saludar();

function saludar1(name, surname){
    console.log("Hola "+name+' '+surname);
}
saludar1('David','Bernal Gonazález');

const saludar2 = function(){
    console.log("Hola");
}
saludar2();

const saludar3 = function(name,surname){
    console.log("Hola "+name+' '+surname);
}
saludar3('David','Bernal González');

const saludar4 =()=>{
    console.log("Hola");
}
saludar4();

const saludar5=(name,surname)=>{
    console.log("Hola"+name+' '+surname);
}
saludar5('David','Bernal González');

const saludar6 = function(...valores){
    valores.forEach(element=>{
        console.log(element)
    });
}
saludar6('Test','con','multiples','parametros');

const saludar7=(name)=>{
    return name;
}
saludar7('David');
console.log(saludar7('David'));
const respuesta=saludar('DAvid');
console.log(respuesta);
function guardarEnBBDD(name){
    console.log(name);
}
guardarEnBBDD(saludar('David0'));
