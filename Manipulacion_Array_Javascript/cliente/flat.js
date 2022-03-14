//manipular arrays que tieene arrays dentro
//volver eses array de arrays, en uno solo

const matriz = [

    [1,2,3],
    [4,5,6,[14,15, [11,12,13]]],
    [7,8,9]
];

const flati = matriz.flat(3);//nivel
console.log(flati);


//flatmap
//funsiona como un flat y un m