//Crear una funcion con el nombre funcionArray() que tome dos arreglos de numeros
//enteros como parametro y retornar un unico arreglo, cada elemento del arreglo debe estar
//multiplicado por dos.

/*
Ejemplo;

[2,5,2][1,5,3] => [4, 10, 4, 2, 10, 6]

*/


function funcionArray(arr1, arr2) {
    let combinado = arr1.concat(arr2);

    for (let i = 0; i < combinado.length; i++) {
        combinado[i] *= 2;
    }
    return combinado;
}

let Arreglo_1 = [2, 5, 2];
let Arreglo_2 = [1, 5, 3];

let resultado = funcionArray(Arreglo_1, Arreglo_2);
console.log(resultado);
