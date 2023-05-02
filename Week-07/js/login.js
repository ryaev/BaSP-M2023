var emailExpression= /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var urlLogin= 'https://api-rest-server.vercel.app/login';
var validatedLogin= false;

function getData(url){
    return fetch(url)
    .then((response) => response.json())
    .then((jsonData=>{
        return jsonData;
    }))
    .catch((error) => {
        return console.log(error);
    });
}

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

        alert('  '+successInfo.msg+'  ');
    })
    .catch(function(error){
        var invalidInfo= JSON.parse(error.message);
        var invalidError = invalidInfo.msg;
        var invalidErrorsVar = invalidInfo.errors;
        
        if (failEmailSpn.innerText===''){
            alert(invalidError);
        } else{
            alert('  Error in user Log In, details:  '+'\n'+'\n'
            +'- '+invalidErrorsVar[0].msg);
        }
    })
}

function validateLogin(){
    if(emailIpt.value!="" && failEmailSpn.innerText==="" && passIpt.value!="" && failPassSpn.innerText===""){
        return validatedLogin= true;
    } else{
        emailIpt.onblur();
        passIpt.onblur();
        return validatedLogin= false;
    }
}

var backBtn= document.getElementById('back-button');
backBtn.onclick= function(){
    window.history.back();
}

var loginBtn= document.getElementById('login-button');
loginBtn.onclick= function(){

    validateLogin();
    urlLogin = 'https://api-rest-server.vercel.app/login?email='+emailIpt.value+'&password='+passIpt.value;

    getData(urlLogin);
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

/*----------E-mail validation----------*/


var emailIpt= document.querySelector('#email-input');
var failEmailSpn= document.getElementById('fail-email');

emailIpt.onblur= function(){

    if (emailIpt.value===''){
        failEmailSpn.innerText= 'You must fill in the email';
    } else if (emailExpression.test(emailIpt.value)){
        failEmailSpn.innerText = '';
    } else{
        failEmailSpn.innerText = 'Invalid email format';
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
    } else if (passIpt.value.length<8 || passIpt.value.length>16){
        failPassSpn.innerText= 'Invalid number of characters for password';
    } else{
        failPassSpn.innerText= '';
    }
}

passIpt.onfocus= function(){
    failPassSpn.innerText= '';
}