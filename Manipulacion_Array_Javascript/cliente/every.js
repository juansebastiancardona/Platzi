//Every evalua que todos los elementos cumplan con la codicion planteada

const  numeros = [ 10,35,32,48,68];

let rta =true;

for (let i =0; i < numeros.length; i++){


    const recorrido = numeros[i];

    if(recorrido > 60){
        rta= true;

        
    }


}

//con el every
const  numeros2 = [ 10,35,32,48,68];

const rta2 =numeros2.every(item => item >=60);


console.log(rta2);


//RETO
 const alumnos = [

    {
        nombre : "luisa", 
        edad : 8,

    },
    {
        nombre : "luisa", 
        edad : 10,

    },
    {
        nombre : "juan", 
        edad : 11,


    },
    {
        nombre : "carlos", 
        edad : 15,

    }

 ]


const validacion =  alumnos.every(item => item.edad <= 15 && item.nombre.length  >=4);
 console.log(validacion);

