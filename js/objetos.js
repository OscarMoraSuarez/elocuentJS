// mire cata lo que ud hace dentro de los parentesis de la funcion , es declarar variables que funcionan
//  dentro de la funcion

//! si  yo quito el return de está funcion, ella me cumple con el console.log de los parametros que le estoy enviando
//! pero no crea un objeto
function crearPersona(nombre, apellido, altura, peso, edad){

    console.log(nombre, apellido, altura, peso, edad);
     return{nombre, apellido, altura, peso,edad}; 


}

const nombre = 'Kattalina';
const apellido = 'Hoyos';
const estatura=1.55;
const peso=52;
const edad = 15;

const kattalina=crearPersona(nombre,apellido,estatura,peso,edad);
console.log(kattalina);
























//!este return si me retorna lso valores que le pase, y com estoy usando llaves devuelve un objeto y la variable
//! lo almacena 
 const crearPersona1=(nombre,apellido,altura,peso,edad)=>{

     return{ nombre, apellido, altura, peso, edad };

 }


const nombre1 = 'Kattalina';
const apellido1 = 'Hoyos';
const estatura1 = 1.55;
const peso1 = 52;
const edad1 = 15;

const katta=crearPersona1(nombre1,apellido1,estatura1,peso1,edad1);
console.log(katta);

