const palabras = [ "locion", "gel" , "cepillo", "gotas", "desodorante"]


//para filtar por las palabras que su longitud sea mayor a 5 con un for
const insertar = [];

for (let i = 0 ; i < palabras.length ; i++){

    const item = palabras[i];
    // console.log(item);

    if (item.length >=5 ){
        insertar.push(item);

     
    }
    console.log( 'sin filter : ' + insertar);
}

//CON FILTER

const filter = palabras.filter (item => item.length >=3);
console.log( 'con filter: '  + filter);


//OTRO EJEMPLO

const ordenes = [

    {
        Nombre : "juan",
        valor: 60000,
        entregado: true,

    },
    {
        Nombre : "carlos",
        valor: 250000,
        entregado: true,

    },
    {
        Nombre : "luis",
        valor: 80000,
        entregado: false,

    }
    
];
const entregar = ordenes.filter(item => item.entregado);
console.log('filtrado' , entregar);
