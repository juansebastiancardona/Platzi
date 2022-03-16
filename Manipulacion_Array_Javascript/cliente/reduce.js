const valor = [1,5,8,7,4];


let sumatoria = 0;
for (let i = 0; i < valor.length ; i++){
    const recorre = valor[i];

    // console.log(valor);
    // console.log(recorre);

    sumatoria = sumatoria + recorre;
    
}
console.log ('Sin Reduce : ' + sumatoria);

//AHORA ECON  EL REDUCE que recibe dos parametros que son el arrowfunctionn y el estado inical
const valor2 = [1,5,8,7,4];
const reduce = valor2.reduce((recorre, sumatoria) => sumatoria + recorre, 0)//el 0 seria el estado inicial

console.log('Con Reduce = ' + reduce);