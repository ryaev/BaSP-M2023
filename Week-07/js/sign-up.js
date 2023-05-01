var emailExpression= /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var register= '';
var urlSignUp = 'https://api-rest-server.vercel.app/signup/';
var validatedSignUp= false;

function getData(url){
    fetch(url)
    .then(function(response){
        if(response.ok){
            return response.json();
        } else{
            return response.json().then(error => {
                throw new Error(JSON.stringify(error));
            });
        }
    })
    .then(function(data){
        var successInfo= JSON.parse(JSON.stringify(data));

        alert('  '+successInfo.msg+'  '+'\n'+'\n'
        +'Name: '+successInfo.data.name+'\n'
        +'Last name: '+successInfo.data.lastName+'\n'
        +'DNI: '+successInfo.data.dni+'\n'
        +'BirthDate: '+successInfo.data.dob+'\n'
        +'Phone number: '+successInfo.data.phone+'\n'
        +'Address: '+successInfo.data.address+'\n'
        +'Location: '+successInfo.data.city+'\n'
        +'Postal code: '+successInfo.data.zip+'\n'
        +'E-mail: '+successInfo.data.email+'\n'
        +'Password: '+successInfo.data.password+'\n'
        )
    })
    .catch(function(error){
        var invalidInfo= JSON.parse(error.message);
        var invalidErrors = invalidInfo.errors;
        var alertContent= '';

        for (var counter= 0; counter < invalidErrors.length; counter++){
            alertContent= alertContent+'- '+(invalidErrors[counter].msg)+'\n';
        }
        alert('  Error in user sign up, details:  '+'\n'+'\n'
        +alertContent);
    })
}

var backBtn= document.getElementById('back-button');
backBtn.onclick= function(){
    window.history.back();
}

var signBtn= document.getElementById('sign-button');
signBtn.onclick= function(){
    validateRegister();

    urlSignUp = 'https://api-rest-server.vercel.app/signup?name='+nameIpt.value+'&lastName='+lastNameIpt.value+
                '&dni='+dniIpt.value+'&dob='+newBirthFormat+'&phone='+phoneIpt.value+'&address='+addressIpt.value+
                '&city='+locationIpt.value+'&zip='+postalIpt.value+'&email='+emailIpt.value+'&password='+passTwoIpt.value;

    if(validatedSignUp===true){
        getData(urlSignUp);
    } else if(validatedSignUp===false){
        register= 'Registration error, please verify the uploaded data';
        alert(register);
    }


    /*alert('  '+register+'  '+'\n'+'\n'
        +'Name: '+nameIpt.value+'   '+failNameSpn.innerText+'\n'
        +'Last name: '+lastNameIpt.value+'   '+failLastNameSpn.innerText+'\n'
        +'DNI: '+dniIpt.value+'   '+failDniSpn.innerText+'\n'
        +'BirthDate: '+newBirthFormat+'   '+failBirthSpn.innerText+'\n'
        +'Phone number: '+phoneIpt.value+'   '+failPhoneSpn.innerText+'\n'
        +'Address: '+addressIpt.value+'   '+failAddressSpn.innerText+'\n'
        +'Location: '+locationIpt.value+'   '+failLocationSpn.innerText+'\n'
        +'Postal code: '+postalIpt.value+'   '+failPostalSpn.innerText+'\n'
        +'E-mail: '+emailIpt.value+'   '+failEmailSpn.innerText+'\n'
        +'Password: '+passOneIpt.value+'   '+failPassOneSpn.innerText+'\n'
        +'Repeat password: '+passTwoIpt.value+'   '+failPassTwoSpn.innerText+'\n'
    )*/
}

function validateRegister(){
    if(nameIpt.value!="" && failNameSpn.innerText==="" && lastNameIpt.value!="" && failLastNameSpn.innerText==="" &&
       dniIpt.value!="" && failDniSpn.innerText==="" && birthIpt.value!="" && failBirthSpn.innerText==="" &&
       phoneIpt.value!="" && failPhoneSpn.innerText==="" && addressIpt.value!="" && failAddressSpn.innerText==="" &&
       locationIpt.value!="" && failLocationSpn.innerText==="" && postalIpt.value!="" && failPostalSpn.innerText==="" &&
       emailIpt.value!="" && failEmailSpn.innerText==="" && passOneIpt.value!="" && failPassOneSpn.innerText==="" &&
       passTwoIpt.value!="" && failPassTwoSpn.innerText===""){
        validatedSignUp= true;
        //register= 'Successful registration! Thank you for being part of Mega Rocket';
    } else{
        register= 'Registration error, please verify the uploaded data';
    }
    return register;
}

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
var newBirthFormat= '';

var dateCompa= new Date();
var dateYearCompa= dateCompa.getFullYear();

birthIpt.onblur= function(){
    var dayBirth= (birthIpt.value.substring(8, 10));
    var monthBirth= (birthIpt.value.substring(5, 7));
    var yearBirth= (birthIpt.value.substring(0, 4));
    newBirthFormat= monthBirth + '/' + dayBirth + '/' + yearBirth;

    if (birthIpt.value===''){
        failBirthSpn.innerText= 'You must fill in the birthdate field';
    } else if (yearBirth<=(dateYearCompa-70) || yearBirth>(dateYearCompa-13)){
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
        failAddressSpn.innerText= 'You must fill in the address field';
    } else if (validatedInputType==='number' && validatedInputNumber===true){
        failAddressSpn.innerText= 'You must enter letters in the address';
    } else if (validatedInputType==='string' && validatedInputNumber===false){
        failAddressSpn.innerText= 'You must enter numbers in the address';
    } else if (validateInputSpace(addressIpt.value)===false){
        failAddressSpn.innerText= 'There must be a space in the address';
    } else if (validateInputCharacter(addressIpt.value)===true){
        failAddressSpn.innerText= 'Especial characters are not allowed in address';
    } else if (addressIpt.value.length<5 || addressIpt.value.length>26){
        failAddressSpn.innerText= 'Invalid number of characters for address';
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
    var validatedInputType= validateInputType(locationIpt.value);
    var validatedInputNumber= validateInputNumber(locationIpt.value);

    if (locationIpt.value===''){
        failLocationSpn.innerText= 'You must fill in the location field';
    } else if (validatedInputType==='number' && validatedInputNumber===true){
        failLocationSpn.innerText= 'You must enter letters in the location';
    } else if (validatedInputType==='string' && validatedInputNumber===false){
        failLocationSpn.innerText= 'You must enter numbers in the location';
    } else if (validateInputCharacter(locationIpt.value)===true){
        failLocationSpn.innerText= 'Especial characters are not allowed in location';
    } else if (locationIpt.value.length<=3 || locationIpt.value.length>20){
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

/*----------E-mail validation----------*/

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

/*----------Password validation----------*/

var passOneIpt= document.querySelector('#pass1-input');
var failPassOneSpn= document.getElementById('fail-pass1');

passOneIpt.onblur= function(){
    var validatedInputType= validateInputType(passOneIpt.value);
    var validatedInputNumber= validateInputNumber(passOneIpt.value);
    
    if (passOneIpt.value===''){
        failPassOneSpn.innerText= 'You must fill in the password field';
    } else if (validatedInputType==='number' && validatedInputNumber===true){
        failPassOneSpn.innerText= 'You must enter letters in the password';
    } else if (validatedInputType==='string' && validatedInputNumber===false){
        failPassOneSpn.innerText= 'You must enter numbers in the password';
    }/* else if (validateInputCharacter(passOneIpt.value)===false){
        failPassOneSpn.innerText= 'Must contain at least one special character';
    }*/ else if (passOneIpt.value.length<8 || passOneIpt.value.length>16){
        failPassOneSpn.innerText= 'Invalid number of characters for password';
    } else{
        failPassOneSpn.innerText= '';
    }
}

passOneIpt.onfocus= function(){
    failPassOneSpn.innerText= '';
}

var passTwoIpt= document.querySelector('#pass2-input');
var failPassTwoSpn= document.getElementById('fail-pass2');

passTwoIpt.onblur= function(){
    var validatedInputType= validateInputType(passTwoIpt.value);
    var validatedInputNumber= validateInputNumber(passTwoIpt.value);
    
    if (passTwoIpt.value===''){
        failPassTwoSpn.innerText= 'You must fill in the password field';
    } else if (validatedInputType==='number' && validatedInputNumber===true){
        failPassTwoSpn.innerText= 'You must enter letters in the password';
    } else if (validatedInputType==='string' && validatedInputNumber===false){
        failPassTwoSpn.innerText= 'You must enter numbers in the password';
    } /*else if (validateInputCharacter(passTwoIpt.value)===false){
        failPassTwoSpn.innerText= 'Must contain at least one special character';
    }*/ else if (passTwoIpt.value.length<8 || passTwoIpt.value.length>16){
        failPassTwoSpn.innerText= 'Invalid number of characters for password';
    } else if (passOneIpt.value != passTwoIpt.value){
        failPassTwoSpn.innerText= 'Passwords do not match';
    } else{
        failPassTwoSpn.innerText= '';
    }
}

passTwoIpt.onfocus= function(){
    failPassTwoSpn.innerText= '';
}