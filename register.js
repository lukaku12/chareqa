const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const date = document.getElementById('date')
const country = document.getElementById('country')
const city = document.getElementById('city')
const phone = document.getElementById('phone')
const registerForm = document.getElementById('register')
const error = document.getElementById('error')
const errorText = document.getElementById('errorText')
const errorImageDiv = document.getElementById('errorImage')
const passwordStrenght = document.getElementById('passwordStrenght')

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0')
var yyyy = String(today.getFullYear());
const todayDate = yyyy + '-' + mm + '-' + dd
date.value = todayDate

error.style.display = 'none'

registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (email.value === '') {
        errorText.innerHTML = "Email is required!"
        error.style.display = 'flex'
        return
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        errorText.innerHTML = "You have entered an invalid email address!"
        error.style.display = 'flex'
        return
    }
    else if (password.value.length < 3) {
        errorText.innerHTML = "Passwords Field is Minimum 3 letters!"
        error.style.display = 'flex'
        return
    }
    else if (password.value !== confirmPassword.value) {
        errorText.innerHTML = "Passwords Do not Match!"
        error.style.display = 'flex'
        return
    }
    else if (country.value === '') {
        errorText.innerHTML = "Country is required!"
        error.style.display = 'flex'
        return
    }
    else if (city.value === '') {
        errorText.innerHTML = "Country is required!"
        error.style.display = 'flex'
        return
    }
    else if (phone.value === '') {
        errorText.innerHTML = "Phone Number is required!"
        error.style.display = 'flex'
        return
    }
    else {
        error.style.display = 'none'
        errorText.innerHTML = ''
    }
})

password.addEventListener('input', () => {
    if (/^[A-Za-z0-9]*$/.test(password.value)) {
        passwordStrenght.innerHTML = "Strong"
        passwordStrenght.classList.add('strong')
        passwordStrenght.classList.remove('weak')
        passwordStrenght.classList.remove('average')
    }
    if (/^[a-z0-9]*$/.test(password.value)) {
        passwordStrenght.innerHTML = "Average"
        passwordStrenght.classList.add('average')
        passwordStrenght.classList.remove('strong')
    }
    if (/^[a-z]+$/.test(password.value)) {
        passwordStrenght.innerHTML = "Weak"
        passwordStrenght.classList.add('weak')
        passwordStrenght.classList.remove('average')
        passwordStrenght.classList.remove('strong')
    }
    if (password.value === '') {
        passwordStrenght.innerHTML = ""
    }

})

// else if (/^[a-zA-Z]+$/.test(password.value)) {
//     errorText.innerHTML = "Passwords Field is Minimum 3 letters!"
//     error.style.display = 'flex'
//     return
// }