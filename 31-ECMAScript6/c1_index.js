function fun1  (){

    var name = name  || `sebastian`;
    var age = age || 30;
    var ciudad = ciudad  || `chinchi`;
    console.log(name, age , ciudad);
}

// usando ecmascript 6 

function fun2 (name = `sebas`, age = 30, country= `chinchi`){
    console.log(name, age , country);
}
fun2();

// template litearl

let hola = `hola`;
let sebas = `sebas`;
let frase1 = hola + ` ` + sebas ;
console.log (frase1);

// aqui ecmascript 6

let frase2 = `${hola} ${sebas}`;
console.log (frase2);




