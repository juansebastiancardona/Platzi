//FIND es similar a filter pero solo devuelve un solo objeto filter puede devolver un array

// find solodevuelve un objeto 

    const  numeros = [ 10,35,32,48,68];

    let rta =undefined;

    for (let i =0; i < numeros.length; i++){


        const recorrido = numeros[i];

        if(recorrido ===35){
            rta= recorrido;
            break;
            
        }
        
    }

    console.log('el numero si existe es: ' + rta);


    // /con el find
    const  numeros2 = [ 10,35,32,48,68];

    const rta2 = numeros2.find (item =>  item  === 32);
    console.log('el numero es: ' + rta2);

    const position = numeros2.findIndex (item => item ===48);
    console.log  ( 'la posicion  es: '  +position);

    //otra variante es devolver la posicion de donde se encuentra el elemento que se esta validando



