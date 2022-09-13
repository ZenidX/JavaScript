ej1=function(x,y,z){
    return (x+y+z);
}
console.log(ej1(1,2,3));

ej2=function(nombre,apellido1,apellido2){
    return (""+nombre+" "+apellido1+" "+apellido2);
}
console.log(ej2("Xavi","Lara","Moreno"));

ej3=function(x,y){
    if(x>y){
        return x;
    }else{
        return y;
    }
}
console.log(ej3(1,20));
console.log(ej3(20,1));