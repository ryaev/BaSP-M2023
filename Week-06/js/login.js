var backBtn= document.getElementById('back-button');
backBtn.onclick= function(){
    window.history.back();
}

var loginBtn= document.getElementById('login-button');
loginBtn.onclick= function(){
    if(emailIpt.value!="" && failEmailSpn.innerText==="" && passIpt.value!="" && failPassSpn.innerText===""){
        alert("Successful login!");
    }
    else{
        alert('Login error, please check the data entered.');
    }
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

/*----------E-mail validation----------*/

var emailIpt= document.querySelector('#email-input');
var failEmailSpn= document.getElementById('fail-email');

emailIpt.onblur= function(){

    if (emailIpt.value===''){
        failEmailSpn.innerText= 'You must fill in the email';
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

var passIpt= document.querySelector('#pass-input');
var failPassSpn= document.getElementById('fail-pass');

passIpt.onblur= function(){
    var validatedInputType= validateInputType(passIpt.value);
    var validatedInputNumber= validateInputNumber(passIpt.value);
    
    if (passIpt.value===''){
        failPassSpn.innerText= 'You must fill in the password field';
    } else if (validatedInputType==='number' && validatedInputNumber===true){
        failPassSpn.innerText= 'You must enter letters in the password';
    } else if (validatedInputType==='string' && validatedInputNumber===false){
        failPassSpn.innerText= 'You must enter numbers in the password';
    } else if (validateInputCharacter(passIpt.value)===false){
        failPassSpn.innerText= 'Must contain at least one special character';
    } else if (passIpt.value.length<8 || passIpt.value.length>16){
        failPassSpn.innerText= 'Invalid number of characters for password';
    } else{
        failPassSpn.innerText= '';
    }
}

passIpt.onfocus= function(){
    failPassSpn.innerText= '';
}