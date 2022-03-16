//concat es un metodo que nos sirve para fusi
//onar arrays inmutable no modiffica el array original;

const elementos1 = [ 1,1,2,5];
const elementos2 = [3,4,8,7];

const nuevo = elementos1;

for (let i =0; i < elementos2.length ; i++ ){

    const recorrido = elementos2[i];


    nuevo.push(recorrido);
    console.log(recorrido);
}

console.log('con el for:  ' +  nuevo);

//con el concat
const elementos3 =  [ 1,1,2,5];
const elementos4 = [3,4,8,7];

const nuevo2 = elementos3.concat(elementos4);

console.log('con el concat: ' + nuevo2);



//con el split operation

const nuevo3 = [...elementos3, ...elementos4];

console.log('con el split operation: ' + nuevo3);