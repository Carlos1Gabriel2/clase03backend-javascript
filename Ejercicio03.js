/*Declara un array de numeros. Usar los metodos map, filter y reduce para hacer lo siguiente:
    Multiplicar cada numero por 3.
    filtrar los numeros que son mayores que 10.
    suma todos los numeros filtrados.*/

let numeros = [2, 4, 6, 8, 10, 12, 14];

let multiplicarxTres = numeros.map(num => num * 3);

let mayoraDiez = multiplicarxTres.filter(num => num > 10);

let sumaTotal = mayoraDiez.reduce((acumulador, num) => acumulador + num, 0);

console.log("Array original: ", numeros);
console.log("Multiplicados por 3: ", multiplicarxTres);
console.log("Mayores que 10: ", mayoraDiez);
console.log("Suma de los números que son mayores que 10: ", sumaTotal);
