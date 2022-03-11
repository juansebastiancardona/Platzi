//join nos sirve para unificar un array y queremos unirlo por algun tipo de formato

const elemetos = ['fuego' ,'aire' ,'agua'];

let impresion = '';
const separador = '--';

for(let i =0 ; i <elemetos.length; i++){

    const re = elemetos[i];

 impresion = impresion + re + separador


  

}
console.log(impresion);

//con  el join

const elemetos2 = ['fuego' ,'aire' ,'agua'];
const impresion2 =elemetos2.join('--');
console.log(impresion2);


// ejemplo OTRA UTILIDAD DE JOIN QUE SE EJECUTA EMNLOS STRNGS (METODO)

//split : atraves de un patron le podemos dar manjeo a un  string
const titulo ='curso de manipulacion de arrays';


//aaui va el patron que vamos a  utilizar



console.log(titulo.split(' '));


const tituloFinal = titulo.split(' ').join('-'.toUpperCase());
console.log(tituloFinal);




