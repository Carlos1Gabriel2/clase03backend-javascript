// Crear una funcion sumaArreglo() que tome como parametro un arreglo de numeros,
// retornar la longitud del arreglo + la suma de todos los numeros del arreglo.


function sumaArreglo(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return arr.length + suma;
}

let arreglo = [1, 2, 3, 4, 5];

console.log(sumaArreglo(arreglo));
