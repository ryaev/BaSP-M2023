console.log('--EXERCISE 2: STRINGS');

/*  a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en 
    mayúscula (utilizar toUpperCase).   */

console.log('-Exercise 2.a:');

var stringA= 'Montevideo';
console.log(stringA.toUpperCase());

/*  b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
    los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).    */

console.log('-Exercise 2.b:');

var stringB= 'Montevideo';
var stringFirstFive = stringB.substring(0, 5);
console.log(stringFirstFive);

/*  c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
    los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).    */

console.log('-Exercise 2.c:');

var stringC= 'Montevideo';
var stringLastThree = stringC.substring(stringC.length-3);
console.log(stringLastThree);

/*  d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
    la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva 
    variable (utilizar substring, toUpperCase, toLowerCase y el operador +).    */

console.log('-Exercise 2.d:');

var stringD= 'wAsHiNgToN';
var stringFirstLetter= stringD.substring(0, 1).toUpperCase();
var stringRestLetters= stringD.substring(1,stringD.length).toLowerCase();
var stringDResult= (stringFirstLetter + stringRestLetters);
console.log(stringDResult);

/*  e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
    Encontrar la posición del primer espacio en blanco y guardarla en una variable 
    (utilizar indexOf).    */

console.log('-Exercise 2.e:');

var stringE= 'Planet Earth';
var firstSpace= stringE.indexOf(' ');
console.log(firstSpace);

/*  f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún 
    espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un 
    nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras 
    en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).    */

console.log('-Exercise 2.f:');

var stringF= 'mOnTeViDeO wAsHiNgToN';
var firstSpaceString= stringF.indexOf(' ');
var beginSecondWord= firstSpaceString + 1;
var firstWordLetter= stringF.substring(0, 1).toUpperCase();
var firstWordRest= stringF.substring(1, firstSpaceString).toLowerCase();
var firstWordResult= (firstWordLetter + firstWordRest);
var secondWordLetter= stringF.substring(beginSecondWord, (beginSecondWord + 1)).toUpperCase();
var secondWordRest= stringF.substring((beginSecondWord + 1), stringF.length).toLowerCase();
var secondWordResult= (secondWordLetter + secondWordRest);
var stringFResult= (firstWordResult + ' ' + secondWordResult)
console.log(stringFResult);