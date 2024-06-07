//DECLARACION DE VARIABLES

/* Declara tres variables a, b y c con los valores 5, 10 y 15
respectivamente. Imprime la suma de a y b
*/

let a = 5;
let b = 10;
let c = 15;

let suma = a + b;

console.log(suma); //Resultado: 15

//OPERACIONES ARITMETICAS

/* Declara dos variables X y Y con los valores 8 y 3. Imprime el resultado de
la multiplicación y la división de X por Y*/

let x = 8;
let y = 3;

console.log(x*y); // 24
console.log(x/y); // 2.666...5

//CONCATENACION DE CADENAS

/*Declara dos variables firstname y lastname. Imprime una cadena que diga:
"Hola, mi nombre es [nombre] [apellido]"
*/

let firstname = "Carlos";
let lastname = "Gomez";

console.log("Hola mi nombre es "+ firstname +" "+ lastname);

//CONDICIONALES

/* Ecribir un programa que verifique si un numero es positivo, negativo o cero.
   Declare una varible num y asignar valor.
   Usa if, else if y else para imprimir el resultado adecuado.
*/

var num = 0 

if (num > 0) {
    console.log("El número es positivo.");
} else if (num < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}
console.log("=========Enviar==========")

//BUCLES

/*Escribe un programa que imprima los numeros del 1 al 10 usando el bucle for */

for (let i = 1; i <= 10; i++){
    console.log(i);
}

//FUNCIONES:

/*Escribe una funcion llamada Saludar que tome un nombre como parametro y devuelva
un saludo como "Hola, [nombre]"*/

function saludar (nombre){
    return "Hola, " + nombre + "!";
}
console.log(saludar("Carlos"));

/* Escribe una función llamada Sumar que tome dos números como parámetro y devuelva
la suma*/
 
var d = 3;
var e = 8;

var Suma = d + e;

console.log(Suma); //Salida: 11

//esta tambien es una forma de hacerlo

function Sumar(numero1, numero2) {
    return numero1 + numero2;
}

// Ejemplo de uso
let Resultado = Sumar(8, 3);
console.log(Resultado);  // Salida: 11

/* Escribe una función llamada Mayor que tome dos números como parámetro y devuelva el
mayor de ellos*/
  
function Mayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let numero1 = 5;
let numero2 = 10;
let resultado = Mayor(numero1, numero2);

console.log("El numero mayor es: " + resultado);

/* Escribe una función llamada esPar que tome un número como parámetro y devuelva "true"
si el número es par y "false" si es impar*/
 
function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let num1 = 4;
let num2 = 7;

console.log(`El número ${num1} es par: ${esPar(num1)}`);
console.log(`El número ${num2} es par: ${esPar(num2)}`);


/* Escribe una función llamada Factorial que tome un número como parámetro y devuelva
el factorial*/

function factorial(n){
    if (n==0){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(8));

//ARRAY Y BUCLES

//Declara un array con los numeros del 1 al 5. Usa un bucle para imprimir cada numero multiplicado por 2.

let numeros = [1, 2, 3, 4, 5]

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i] *2);
}

//OBJETOS

/*Declara un objeto llamado persona con propiedades:

    - Nombre, edad, ciudad

    - Imprime una cadena que diga "Me llamo [nombre], tengo [edad] años y vivo en [ciudad].".*/

    let persona = {
        nombre: "Carlos",
        edad: 32,
        ciudad: "Lima"
    };

console.log("Me llamo " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".");

//Funciones de Orden Superior:

/*Escribe una funcion llamada operar que tome dos numeros y una funcion como parametro.
La funcion debe aplicar la funcion recibida a los dos numeros y devolver el resultado.
luego usa esta funcion para sumar, restar, multiplicar y dividir los numeros.
*/


function operar(num1, num2, operacion) {
    return operacion(num1, num2);
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
        return a / b;
}


let numero_1 = 10;
let numero_2 = 7;

let resultadoSuma = operar(numero_1, numero_2, sumar);
let resultadoResta = operar(numero_1, numero_2, restar);
let resultadoMultiplicacion = operar(numero_1, numero_2, multiplicar);
let resultadoDivision = operar(numero_1, numero_2, dividir);

console.log("Suma: " + resultadoSuma);
console.log("Resta: " + resultadoResta);
console.log("Multiplicación: " + resultadoMultiplicacion);
console.log("División: " + resultadoDivision);

