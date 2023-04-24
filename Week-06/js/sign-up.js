var backBtn= document.getElementById('back-button');
backBtn.onclick= function(){
    window.history.back();
}

var signBtn= document.getElementById('sign-button');
signBtn.onclick= function(){

}

var emailExpression= /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

/*----------Validation functions----------*/

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

function validateInputSpace(inputValue3){
    var inputAddress= false;
    var charFilter= ' ';
    	
    for (var i=0; i<inputValue3.length; i++)
    if (charFilter.indexOf(inputValue3.charAt(i)) != -1){
        inputAddress= true;
    }
    return inputAddress;
}

/*----------Name validation----------*/

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

/*----------Last name validation----------*/

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

/*----------DNI validation----------*/

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

/*----------Birthdate validation----------*/

var birthIpt= document.querySelector('#birth-input');
var failBirthSpn= document.getElementById('fail-birth');

birthIpt.onblur= function(){
    var yearBirth= parseInt(birthIpt.value.substring(0, 4));

    if (birthIpt.value===''){
        failBirthSpn.innerText= 'You must fill in the birthdate field';
    } else if (yearBirth<1953 || yearBirth>2009){
        failBirthSpn.innerText= 'Your age range is not valid';
    } else{
        failBirthSpn.innerText= '';
    }
}

birthIpt.onfocus= function(){
    failBirthSpn.innerText= '';
}

/*----------Phone validation----------*/

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

/*----------Address validation----------*/

var addressIpt= document.querySelector('#address-input');
var failAddressSpn= document.getElementById('fail-address');

addressIpt.onblur= function(){
    var validatedInputType= validateInputType(addressIpt.value);
    var validatedInputNumber= validateInputNumber(addressIpt.value);
    
    if (addressIpt.value===''){
        failAddressSpn.innerText= 'You must fill in the name field';
    } else if (validatedInputType==='number' && validatedInputNumber===true){
        failAddressSpn.innerText= 'You must enter letters in the address';
    } else if (validatedInputType==='string' && validatedInputNumber===false){
        failAddressSpn.innerText= 'You must enter numbers in the address';
    } else if (validateInputSpace(addressIpt.value)===false){
        failAddressSpn.innerText= 'Debe haber un espacio';
    } else if (validateInputCharacter(addressIpt.value)===true){
        failAddressSpn.innerText= 'Especial characters are not allowed in address';
    } else if (addressIpt.value.length<5 || addressIpt.value.length>26){
        failAddressSpn.innerText= 'Invalid number of characters for name';
    } else{
        failAddressSpn.innerText= '';
    }
}

addressIpt.onfocus= function(){
    failAddressSpn.innerText= '';
}

/*----------Location validation----------*/

var locationIpt= document.querySelector('#location-input');
var failLocationSpn= document.getElementById('fail-location');

locationIpt.onblur= function(){
    
    if (locationIpt.value===''){
        failLocationSpn.innerText= 'You must fill in the location field';
    } else if (validateInputCharacter(locationIpt.value)===true){
        failLocationSpn.innerText= 'Especial characters are not allowed in location';
    } else if (locationIpt.value.length<=3 || locationIpt.value.length>25){
        failLocationSpn.innerText= 'Invalid number of characters for location';
    } else{
        failLocationSpn.innerText= '';
    }
}

locationIpt.onfocus= function(){
    failLocationSpn.innerText= '';
}

/*----------Postal code validation----------*/

var postalIpt= document.querySelector('#postal-input');
var failPostalSpn= document.getElementById('fail-postal');

postalIpt.onblur= function(){
    var validatedInputType= validateInputType(postalIpt.value);
    var validatedInputNumber= validateInputNumber(postalIpt.value);
    
    if (postalIpt.value===''){
        failPostalSpn.innerText= 'You must fill in the postal code field';
    } else if (validatedInputType==='string' || validatedInputNumber===false){
        failPostalSpn.innerText= 'Letters or special characters are not allowed in postal code';
    } else if (postalIpt.value.length<4 || postalIpt.value.length>5){
        failPostalSpn.innerText= 'Postal costa must have 4 or 5 digits';
    } else{
        failPostalSpn.innerText= '';
    }
}

postalIpt.onfocus= function(){
    failPostalSpn.innerText= '';
}

/*----------E-mail code validation----------*/

var emailIpt= document.querySelector('#email-input');
var failEmailSpn= document.getElementById('fail-email');

emailIpt.onblur= function(){

    if (emailIpt.value===''){
        failEmailSpn.innerText= 'You must fill in the email field';
    } else if (emailExpression.test(emailIpt.value)){
        failEmailSpn.innerText = "";
    } else{
        failEmailSpn.innerText = "Invalid email format";
    }
}

emailIpt.onfocus= function(){
    failEmailSpn.innerText= '';
}