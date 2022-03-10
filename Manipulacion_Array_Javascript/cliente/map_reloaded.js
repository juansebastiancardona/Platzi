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
console.log(ordenes);

const tirilla = ordenes.map(item => item.valor);
console.log(tirilla);

const iva = ordenes.map(item => {
    
    item.porcentaje = 0.19;
    return item;

})
const iva2 = ordenes.map(item => {
    
    
    return {
        ...item,
        pocentaje2 : 0.25, 
    }

})
console.log(iva2);
console.log('iva' , iva);
    