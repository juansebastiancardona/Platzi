// aqui aplicamos el MULTILINEA O SALTO DE LINEA

let texto = "yo me llamo: \n" + "sebastian cardona";

// con ecmascript 6

let texto2  = `yi me llamo:

sebnastian`;
console.log(texto);
console.log(texto2);

// DESTRUCTURACION DE ELEMENTOS

let persona = {
   'name ': 'nome',
   'name2 ': 'name2',
}
console.log(persona.nome);
console.log(persona.name2);

// utilizando ecmascript

let {nome, name2} = persona;
console.log(nome ,name2)

//operador de PROPRAGACION expandir los elementos

let equipo1 = ['juanjo', 'blanca'];

let equipo2 = ['juan sebas', 'luisa'];

let competencia = ['jero', ...equipo1, ...equipo2];

console.log(competencia);









