console.log("--EXERCISE 1: VARIABLES AND OPERATORS");

/*  a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos 
    números en una 3er variable.    */

console.log("-Exercise 1.a:");

var number1= 30;
var number2= 25;
var sum= number1 + number2;
console.log(sum);

/*  b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.   */

console.log("-Exercise 1.b:");

var capital= "Montevideo";
var country= "Uruguay";
var capital_country= (capital + ", " + country);
console.log(capital_country);

/*  Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
    guardando el resultado de la suma en una 3er variable (utilizar length).    */

console.log("-Exercise 1.c:");

var name_person= "Robert";
var last_name= "Yanez";
var length_full_name= name_person.length + last_name.length;
console.log(length_full_name);