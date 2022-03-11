
// SI   ALGUNO DE ELLOS CUMPLE CON LA CONDICION

const numeros = [2,5,7];

const rta = false;
for(let i = 0 ; i < numeros.length; i++){
    const recorre = numeros[i];
    if (recorre % 2 === 0){
        rta = true;
        
        break;

     
    }
   
   
}
console.log(rta);
//CON SOME
const numeros2 = [2,5,7];
const rta2 = numeros2.some(item => item % 2 ===0);
console.log(rta2);

//otro

const ordenes = [

    {
        Nombre : "juan",
        valor: 60000,
        entregado: false,

    },
    {
        Nombre : "carlos",
        valor: 250000,
        entregado: false,

    },
    {
        Nombre : "luis",
        valor: 80000,
        entregado: false,

    }
    
];

const rta3 = ordenes.some(item => item.entregado);
console.log(rta3);
