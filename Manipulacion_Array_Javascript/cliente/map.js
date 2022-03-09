const array = [1,2,3,4,5,6]


// PARA NO HACER TODO LO DEL FOR UTILIZO MAP

const nuevo2 = array.map(item => item + 'map: ') 
console.log (nuevo2);

// const nuevo elemento sin modificar el array original

const nuevo = [];

//FOR
for (let i = 0; i<array.length ; i++){

    const var1 = array[i];
   
    nuevo.push( 'transformando: ' + var1  );

    console.log (var1);

}

console.log (nuevo);







// PRACTICA DE COMO RECORRER UN OBJETO

let obj = {
    nomre: "juan",
    edad : 30,
    emai: "dos@gmail.com"
}

for (let datos in obj){
    console.log(obj[datos]);
}




let datos = Object.keys(obj);
for (let i =  0; i < datos.length ; i++){
    const var3 = datos[i];
    console.log(obj[var3]);
}

// for (let i = 0 ; i <obj.length ; i++)
// {
//     const var3 = obj[i];
//     console.log(obj[var3]);
// }

