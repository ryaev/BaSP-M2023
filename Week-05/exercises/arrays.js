console.log('--EXERCISE 3: ARRAYS');

/*  a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por 
    consola los meses 5 y 11 (utilizar console.log).   */

console.log('-Exercise 3.a:');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[5]);
console.log(months[11]);

//  b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('-Exercise 3.b:');

console.log(months.sort());

//  c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('-Exercise 3.c:');

months.unshift("Begin");
months.push("End");
console.log(months);

//  d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('-Exercise 3.d:');

months.shift("Begin");
months.pop("End");
console.log(months);

//  e. Invertir el orden del array (utilizar reverse).

console.log('-Exercise 3.e:');

console.log(months.reverse());

/*  f. Unir todos los elementos del array en un único string donde cada mes este separado 
    por un guión - (utilizar join). */

console.log('-Exercise 3.f:');

console.log(months.join(' - '));

//  g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('-Exercise 3.g:');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months.slice(4, -1));