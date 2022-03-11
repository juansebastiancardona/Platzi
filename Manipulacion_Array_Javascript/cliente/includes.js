//includes evalua si un elemento esta dentro del array o del objeto en cuestion

//norecibe arrow funtions

const categoria = ["redes" , "camaras", "software"];

let validacion = false;

for (let i=0 ; i <categoria.length; i++){
    const recorrido = categoria[i];

    if(recorrido === "camaras"){
        validacion = true;
        console.log(validacion);

        break;

    }
}
console.log(validacion);

// includes
const categoria2 = ['redes' , 'camaras', 'software'];

const rta5 = categoria2.includes ('camaras');
console.log(rta5);

