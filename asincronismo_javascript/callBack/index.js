// Función que al crearla ale pasamos otra función al momento de hacer un llamado se ejecuta después

function sumar (num1, num2){
    return num1 + num2

}

function calcularSuma (num1 , num2, callback){

    return callback (num1, num2);

}
console.log (calcularSuma(5, 7, sumar));


//otro ejemplo:
function date (callback){
    console.log(new Date);
    setTimeout(function ()
    {
        let date = new Date;
        callback (date);
    }, 3000)
}

function printDate (dateNow){
    console.log (dateNow);
}
date(printDate);