// Confirm Password
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmpassword');

const passwordStatus = document.getElementById('password_status')
const submit = document.getElementById('submit')


passwordStatus.style.marginLeft = '0px'
passwordStatus.style.fontSize = '10px'
passwordStatus.style.color = 'red'

function checkPassword(){
    passwordStatus.textContent = ''
    submit.removeAttribute('disabled');

    if(confirmPassword.value === ''){
        passwordStatus.textContent = ''
    }

    if(password.value === confirmPassword.value) return;

    passwordStatus.textContent = "*Password don't match."

    submit.setAttribute('disabled','disabled');
}

password.addEventListener('change',() => {
    checkPassword();
})

confirmPassword.addEventListener('change',() => {
    checkPassword();
})



// Password length
const passwordLengthStatus = document.querySelector('#password_length_status');

passwordLengthStatus.style.marginLeft = '0px'
passwordLengthStatus.style.fontSize = '10px'
passwordLengthStatus.style.color = 'red'


function checkPasswordLength(password){
    const passwordLength = /^\d{8,}$/;

    if(password.value.match(passwordLength)){
        passwordLengthStatus.textContent = ''
        submit.removeAttribute('disabled');
    } else {
        passwordLengthStatus.textContent = '*Password must have 8 characters or more'
        submit.setAttribute('disabled','disabled');
    }
}

password.addEventListener('change',() => {
    checkPasswordLength(password);
})




// Number (11 digits)

const phonenumber = document.querySelector('#phonenumber');
const phonestatus = document.querySelector('#phone_status');

phonestatus.style.marginLeft = '0px'
phonestatus.style.fontSize = '10px'
phonestatus.style.color = 'red'

function checkPhoneLength(phonenumber){
    const phoneno = /^\d{11}$/;

    if(phonenumber.value.match(phoneno)){
        phonestatus.textContent = ''
        submit.removeAttribute('disabled')
    } else {
        phonestatus.textContent = '*Must have 11 digits'
        submit.setAttribute('disabled','disabled');
    }
}

phonenumber.addEventListener('change',() => {
    checkPhoneLength(phonenumber);
})
