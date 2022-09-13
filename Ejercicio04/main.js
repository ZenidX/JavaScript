
ej1=(name,surname)=>{
    return name+' '+surname;
}
console.log(ej1("Xavi","Lara"));

ej2=function(bool){
    console.log(bool);
}
ej2(true)

ej3=function(...params){
    params.forEach(element=>{console.log(element)});
}
ej3(1,2,3,4,5)