var backBtn= document.getElementById('back-button');
backBtn.onclick= function(){
    window.history.back();
}

var signBtn= document.getElementById('sign-button');
signBtn.onclick= function(){

}

function validateInputType(inputValue){
    var inputType= isNaN(inputValue);

    if (inputType===false){
        return inputType.typeof= 'number';
    } else{
        return inputType.typeof= 'string';
    }
}

function validateInputNumber(inputValue1){
    var inputNumber= false;
    var charFilter= '0123456789';
    	
    for (var i=0; i<inputValue1.length; i++)
    if (charFilter.indexOf(inputValue1.charAt(i)) != -1){
        inputNumber= true;
    }
    return inputNumber;
}

function validateInputCharacter(inputValue2){
    var inputCharacter= false;
    var charFilter= '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    	
    for (var i=0; i<inputValue2.length; i++)
    if (charFilter.indexOf(inputValue2.charAt(i)) != -1){
        inputCharacter= true;
    }
    return inputCharacter;
}

var nameIpt= document.querySelector('#name-input');
var failNameSpn= document.getElementById('fail-name');

nameIpt.onblur= function(){
    var validatedInputType= validateInputType(nameIpt.value);
    var validatedInputNumber= validateInputNumber(nameIpt.value);
    
    if (nameIpt.value===''){
        failNameSpn.innerText= 'You must fill in the name field';
    } else if (validatedInputType==='number' || validatedInputNumber===true){
        failNameSpn.innerText= 'Numbers are not allowed in name';
    } else if (validateInputCharacter(nameIpt.value)===true){
        failNameSpn.innerText= 'Especial characters are not allowed in name';
    } else if (nameIpt.value.length<=3 || nameIpt.value.length>16){
        failNameSpn.innerText= 'Invalid number of characters for name';
    } else{
        failNameSpn.innerText= '';
    }
}

nameIpt.onfocus= function(){
    failNameSpn.innerText= '';
}

var lastNameIpt= document.querySelector('#lastname-input');
var failLastNameSpn= document.getElementById('fail-lastname');

lastNameIpt.onblur= function(){
    var validatedInputType= validateInputType(lastNameIpt.value);
    var validatedInputNumber= validateInputNumber(lastNameIpt.value);
    
    if (lastNameIpt.value===''){
        failLastNameSpn.innerText= 'You must fill in the last name field';
    } else if (validatedInputType==='number' || validatedInputNumber===true){
        failLastNameSpn.innerText= 'Numbers are not allowed in last name';
    } else if (validateInputCharacter(lastNameIpt.value)===true){
        failLastNameSpn.innerText= 'Especial characters are not allowed in last name';
    } else if (lastNameIpt.value.length<=3 || lastNameIpt.value.length>16){
        failLastNameSpn.innerText= 'Invalid number of characters for last name';
    } else{
        failLastNameSpn.innerText= '';
    }
}

lastNameIpt.onfocus= function(){
    failLastNameSpn.innerText= '';
}

var dniIpt= document.querySelector('#dni-input');
var failDniSpn= document.getElementById('fail-dni');

dniIpt.onblur= function(){
    var validatedInputType= validateInputType(dniIpt.value);
    var validatedInputNumber= validateInputNumber(dniIpt.value);
    
    if (dniIpt.value===''){
        failDniSpn.innerText= 'You must fill in the DNI field';
    } else if (validatedInputType==='string' || validatedInputNumber===false){
        failDniSpn.innerText= 'Letters or special characters are not allowed in DNI';
    } else if (dniIpt.value.length<=7 || dniIpt.value.length>10){
        failDniSpn.innerText= 'Invalid number of characters for DNI';
    } else{
        failDniSpn.innerText= '';
    }
}

dniIpt.onfocus= function(){
    failDniSpn.innerText= '';
}

var phoneIpt= document.querySelector('#phone-input');
var failPhoneSpn= document.getElementById('fail-phone');

phoneIpt.onblur= function(){
    var validatedInputType= validateInputType(phoneIpt.value);
    var validatedInputNumber= validateInputNumber(phoneIpt.value);
    
    if (phoneIpt.value===''){
        failPhoneSpn.innerText= 'You must fill in the phone field';
    } else if (validatedInputType==='string' || validatedInputNumber===false){
        failPhoneSpn.innerText= 'Letters or special characters are not allowed in phone';
    } else if (phoneIpt.value.length!=10){
        failPhoneSpn.innerText= 'Phone number must have 10 digits';
    } else{
        failPhoneSpn.innerText= '';
    }
}

phoneIpt.onfocus= function(){
    failPhoneSpn.innerText= '';
}