//metodo mutbale para hacer ordenamientos del array modica el array o el ordem

const meses = ['enero', 'diciembre', 'febrero', ' abril'];

// orden alfabetico frente al codigo ascci  u octal

meses.sort(),

console.log(meses);

const numeros = [8,5,100,58,74,995,2];

numeros.sort((a, b) => a-b),

console.log(numeros);

const palabras = [' antes ', 'después', 'siguiente', 'camión', 'genio'];
palabras.sort((a, b) => a .localeCompare(b));
console.log(palabras);

const ordenes =[
    {
        nonmre : 'juamn',
        edad : 20,
        ruta: 'manizles'
    },
    {
        nonmre : 'luisa',
        edad : 20,
        ruta: 'rio sucio'
    }
    ,
    {
        nonmre : 'damn',
        edad : 10,
        ruta: 'araucas'
    }
]
ordenes.sort((a,b) => b.edad - a.edad);
console.log(ordenes);