console.log('--EXERCISE 6: FUNCTIONS');

/*  a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
    Ejecutar la función y guardar el resultado en una variable, mostrando el valor de 
    dicha variable en la consola del navegador.   */

console.log('-Exercise 6.a:');

function sumA (numA1, numA2){
    var resultSumA = 0;
    resultSumA= numA1 + numA2;
    console.log(resultSumA);
}

/*  b. Copiar la función suma anterior y agregarle una validación para controlar si alguno 
    de los parámetros no es un número; de no ser un número, mostrar un alert aclarando que 
    uno de los parámetros tiene error y retornar el valor NaN como resultado.   */

console.log('-Exercise 6.b:');

function sumB(numB1, numB2){
    var resultSumB= 0;
    if (isNaN(numB1)===true || isNaN(numB2)===true){
        alert("One of the parameters is not a number");
        resultSumB= NaN;
        console.log(resultSumB);
    } else {
        resultSumB= numB1 + numB2;
        console.log(resultSumB);
    }
}

/*  c. CCrear una función “validateInteger” que reciba un número como parámetro y devuelva 
    verdadero si es un número entero.   */

console.log('-Exercise 6.c:');

function validateInteger(numC){
    return typeof(numC)==='number' && numC % 1 === 0;
}

/*  d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la 
    función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya 
    decimales mostrar un alert con el error y retornar el número convertido a entero 
    (redondeado).   */

console.log('-Exercise 6.d:');

function sumD(numD1, numD2){
    var resultSumD= 0;

    if (isNaN(numD1)===true || isNaN(numD2)===true){       
        alert("One of the parameters is not a number");
        resultSumD= NaN;
        console.log(resultSumD);
    } else {
        if (validateInteger(numD1)===false || validateInteger(numD2)===false){
            alert("Decimal number detected, it will be converted to an integer");
            console.log(parseInt(numD1));
            console.log(parseInt(numD2));
        } else {
            resultSumD= numD1 + numD2;
            console.log(resultSumD);
        }
    }
}

/*  e. Convertir la validación del ejercicio 6d) en una función separada y llamarla 
    dentro de una nueva función probando que todo siga funcionando igual que en el 
    apartado anterior.   */

console.log('-Exercise 6.e:');

function validateBothIntegers(numE1, numE2){
    var resultSumE= 0;
    if (validateInteger(numE1)===false || validateInteger(numE2)===false){
        alert("Decimal number detected, it will be converted to an integer");
        console.log(parseInt(numE1));
        console.log(parseInt(numE2));
    } else {
        resultSumE= numE1 + numE2;
        console.log(resultSumE);
    }
}

function newValidateBothIntergers(numE3,numE4){
    validateBothIntegers(numE3,numE4);
}