//CRERAR UN HISTOGRAMA

const items = [1,2,3,4,3,2];

const rta = items.reduce((obj , item) => {

    if (!obj[item]){
        obj[item] = 1
    }
    else{
        
        obj[item] = obj[item] + 1;
    }
    return obj

}, {} );

console.log (rta);

//
