const productos = [ "leche", "huevos", "azucar"]

for (let i = 0 ; i < productos.length; i++){

    const detalle = productos[i]; 
    console.log(detalle);
}


productos.forEach( element => console.log( "foreach" + element));
