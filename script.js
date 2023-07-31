const form = document.querySelector('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email-id');
const password = document.getElementById('pass');


form.addEventListener('submit', e=>{
    e.preventDefault();
    validateInputs();
})


function validateInputs(){
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue === '') setError(firstName, 'First name cannot be empty');
    else    setSuccess(firstName);

    if(lastNameValue === '') setError(lastName, 'Last name cannot be empty');
    else    setSuccess(lastName);
    
    if(emailValue === '')   setError(email, 'Enter your email');
    else if(!isValidEmail(emailValue))  setError(email, 'Enter a valid Email');
    else    setSuccess(email);

    if(passwordValue === '') setError(password, 'Enter your password');
    else if(passwordValue.length<8)    setError(password, 'Password has to be more 8 characters');
    else    setSuccess(password);

}

function setError(element, message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.querySelector('input').classList.add('error-red');
    inputControl.querySelector('input').placeholder = '';

    inputControl.querySelector('img').classList.remove('hidden');
}

function setSuccess(element){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = ``;
    inputControl.querySelector('img').classList.add('hidden');

    const inputElement = inputControl.querySelector('input');
    
    inputElement.style.border = '1px solid hsl(246, 25%, 77%)';

}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}