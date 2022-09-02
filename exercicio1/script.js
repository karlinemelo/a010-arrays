/*No primeiro exercício vamos praticar a criação de arrays. Crie 3 arrays diferentes:

- O primeiro deve possuir apenas **números**, e estes números não devem seguir nenhuma ordem específica;
- O segundo array deve possuir apenas **strings**;
- O terceiro array deve possuir **números**, **strings** e **booleanos**.
Imprima cada um dos arrays acima, utilizando `console.log()`*/

const numeros = [7, 9, 8, 2];
const escritores = ["Lispector", "Abreu", "Pessoa", "Assis"];
const misto = [6, "Clarice", "Machado", true];

console.log(numeros);
console.log(escritores);
console.log(misto);

/*- Exercicio 2 Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.*/

console.log(numeros.length);
console.log(escritores.length);
console.log(misto.length);

console.log(numeros[1]);
console.log(escritores[2]);
console.log(misto[3]);

console.log("Tem o numero 6?", numeros.includes(6));
console.log("Tem a escritora Lispector?", escritores.includes("Lispector"));

/* Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;*/

const paintersAges = [38, 55, 40, 78];
const painters = ["DaVinci", "Picasso", "VanGogh"];
const paintingsMisto = ["Monalisa", 33, "Italia"];

const paintersAgesCopia = paintersAges.slice();
paintersAgesCopia.push(53);

console.log(paintersAges);
console.log(paintersAgesCopia);

//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

const paintersCopia = painters.slice();
paintersCopia.pop();

console.log(painters);
console.log(paintersCopia);

// Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia; */

const paintingsMistoCopia = paintingsMisto.slice();
paintingsMistoCopia.splice(1, 1);

console.log(paintingsMisto);
console.log(paintingsMistoCopia);
