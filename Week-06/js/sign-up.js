var backBtn= document.getElementById('back-button');
backBtn.onclick= function(){
    window.history.back();
}

var signBtn= document.getElementById('sign-button');
signBtn.onclick= function(){

}

/*function validateInputType(inputValue){
    return typeof(inputValue);
}*/

function validateInputType(inputValue){
    var inputType= typeof(inputValue);
    if (inputType==='number'){
        inputType.typeof= 'number';
        console.log((inputType),'es numero');
    }
    else{
        inputType.typeof='string';
        console.log((inputType),'no es numero');
    }
    return inputType;
}

var nameIpt= document.getElementById('name-input').value;
var failNameSpn= document.getElementById('fail-name');
var typeName= typeof(nameIpt);
nameIpt.onblur= function(){
    //console.log('Blur input');
    if (validateTypeInput(nameIpt)==='number'){
        failNameSpn.innerText= 'Numbers are not allowed in name';
    } else{
        failNameSpn.innerText= 'Esta Ok'
    }
}