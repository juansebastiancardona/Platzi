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
        documento: 1054992167,
        valor: 60000,
        entregado: true,

    },
    {
        Nombre : "carlos",
        documento: 30352856,
        valor: 250000,
        entregado: false,

    },
    {
        Nombre : "luis",
        documento: 24628377,
        valor: 80000,
        entregado: false,

    },
    {
        Nombre : "luisa",
        documento: 12628377,
        valor: 125000,
        entregado: true,

    }
    
];
<<<<<<< HEAD
const entregar = ordenes.filter(item => item.entregado && item.valor>=50000);
=======
const entregar = ordenes.filter(item => item.entregado && item.valor >= 50000);
>>>>>>> 0a7bf0e072046d691245d6fdc50c36e19e0802c4
console.log('filtrado' , entregar);

//CREANDO UN BUSCADOR CON FILTER por el nombre

const search = (query) =>{
    return ordenes.filter(item =>{

        return item.Nombre.includes(query);

    })
}
console.log(search('xxxd'));