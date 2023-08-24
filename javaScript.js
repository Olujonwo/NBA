const USERNAME_LENGTH = 5

document.addEventListener("DOMContentLoaded", function() {
    var create = document.getElementById("linkCreateAccount");
    var haveAcc = document.getElementById("linkLogin");
    var formLogin = document.getElementById("Login");
    var formCreateAcc = document.getElementById("CreateAccount");
  
    create.addEventListener("click", function(e) {
      e.preventDefault();
  
      hide(formLogin);
      show(formCreateAcc);
    });
  
    haveAcc.addEventListener("click", function(e) {
      e.preventDefault();
  
      show(formLogin);
      hide(formCreateAcc);
    });
  });
  
  function hide(elem) {
      elem.classList.add("form-hidden");
      elem.classList.remove("form-unhidden");
  }
  function show(elem) {
    elem.classList.add("form-unhidden");
    elem.classList.remove("form-hidden");
  }

// function checkUsername() {            //Declare function
//   var signIn = document.getElementById('feedback');    //Get feedback element
//   var inUser = document.querySelectorAll('#username');  
//     // Get username input
// inUser.forEach(function(inputUser)   {
//     if(inputUser.value.length < 5) {                        // If username too short 
//       signIn.textContent = 'username is less than 5 characters';  // Set msg
//       signIn.style.color = 'red'
//   }else{               // otherwise
//       signIn.textContent = '';   //clear message
//   }

//   })
// };

const createAccountForm = document.querySelector('#CreateAccount')

function submitForm(e){ //creating a sumbit function for the sign up div 
  e.preventDefault() // preventing the form div from taken the default action 
  let correct = true; // declaring a varible correct 
  createAccountForm.querySelectorAll('input').forEach(inputElement => {
    if (!inputElement.classList.contains('correct')){ //to check if an element contain a class in javaScript use .classList.contain
      correct = false
    }
  })
  if (correct) e.target.submit();  //to sumbit a form after calling a e.preventDefault()
}
createAccountForm.addEventListener('submit', submitForm)


function check_length(eve) { // creating a function name check_length 
  const inputElement = eve.target; //
  const form_input = inputElement.parentElement 
  const feedback = form_input.querySelector('.feedback') //calling te feedback class in the html file by declearing a var for it 
  const label = form_input.querySelector('label') //declearing a var label by selecting the label in the html file
  show_error(
    () => inputElement.value.length < USERNAME_LENGTH,
    'green',
    `${label.textContent.toLowerCase()} is less than ${USERNAME_LENGTH} characters`,
    feedback,
    inputElement
  )
  // if (inputElement.value.length < USERNAME_LENGTH){ //USERNAME_LENGTH is a variable that has been decleared top as 5
  //   feedback.textContent = ; //writing it inside the html file.${label}=> is for the label name. e.g First Name ${USERNAME_LENGTH} => is calling the var name 5 that has been decleared up
  //   feedback.style.color = 'red' //styling the font for the textcontent
  // } else {
  //   feedback.textContent = '' //if this action was not found it should display none
  // }
}

function check_username(){  //Declearing a function check_username()
  const usernames = document.querySelectorAll('.check_username'); //calling all the class that has .check_username in the html file 
  usernames.forEach(username => {  // callinf the element usernames that was the decleared 
    username.addEventListener('input', check_length); // calling the check_length function
  });
}

check_username() //print out this action.

function show_error(callback, color, message, error_container,input) {
  console.log(input)
  if (callback()) {
    input.classList.remove("correct")
    error_container.textContent = message;
    error_container.style.color = color;
  } else {
    input.classList.add("correct")
    error_container.textContent = ''
  }
}


function check_validateEmail(event) {
  const inputEmail = event.target;
  const address = inputEmail.parentElement
  const emailError = address.querySelector('.email-error')
  show_error(
    () => !inputEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/),
    'blue',
    'please enter a valid email',
    emailError,
    inputEmail
  )
}

function check_emailname() {
  const mail = document.querySelector('.check_mail');
  mail.addEventListener('input', check_validateEmail);
}

check_emailname()





function check_correctPassword(pass) {
  const inputPassword = pass.target;
  const password = inputPassword.parentElement
  const strongPassword = password.querySelector('.passing')
  show_error(
    () => !inputPassword.value.match(/^(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*\d+)[^\W_]{8,}$/),
    'red', 'Must have 1 number, 1letter(uppercase & lowercase) 1 symbol and at least 8 characters in length', 
     strongPassword,
     inputPassword
  )
}

function check_password_field() {
  const rightPassword = document.querySelector('.current-password');
  rightPassword.addEventListener('input',check_correctPassword);
}

check_password_field()



function check_confirm_password(confirm_pass) {
  const confirmPassword = confirm_pass.target;
  const password = confirmPassword.parentElement
  const diffrentPassword = password.querySelector('.passing')
  show_error(
    () => confirmPassword.value != document.querySelector('#newPass').value,
    'red',
    'Confirm password is shoul be the sam as password',
    diffrentPassword,
    confirmPassword
  )
}

(() => {
  const confirmPasswordInput = document.querySelector('#againPass')
  confirmPasswordInput.addEventListener('input', check_confirm_password)
})()


// const form1 = document.querySelector('.form2')
// form1.addEventListener('submit', submitForm)


// function ade() {
//   return 1
// }

// let bola = () => {
//   return 1
// }

// bola = () => {
//   return 1000
// }

// function check_password(confirmPassword) {
//   const reinputPassword = confirmPassword.target;
//   const newPassword = reinputPassword.parentElement
//   const rewritePassword = newPassword.querySelector('.confirm_password')
//   if (check_password_field === check_password) {
//     rewritePassword.textContent = "password is correct" ;
//   } else {
//     rewritePassword.textContent = 'incorrect password';
//   }
// }

// function check_correctPassword(pass) {
//   const inputPassword = pass.target;
//   const password = inputPassword.parentElement
//   const strongPassword = password.querySelector('.new-password')
//   show_error(
//     () => !inputPassword.value.match(),
//   )
// }
// function check_correctPassword() {
//   const rightPassword = document.querySelector('.new-password');
//   rightPassword.addEventListener('input',check_correctPassword);
// }
// check_correctPassword()

// function arithmetrics(a, b , callback){
//   return callback(a, b)
// }

// arithmetrics(1, 2, (first, second) => second + first)

// var inUsername = document.getElementById('username');  // Get username input
// inUsername.onblur = checkUsername;  // When it loses focus call checkuserName()

  // function checkEmail(input) {
  //   var enterEmail = document.getElementById('feedback1');
  //   var inEmail = document.getElementById('email');
  //   var validRegex = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";
  //   if(input.value.match(validRegex)){
  //     enterEmail.textContent = 'Incorrect email address'
  //   }else{
  //     enterEmail.textContent = '';
  //   }
  // }
// var input = document.getElementById('email');
// input.onblur = checkEmail;

// var emailInput = document.getElementById('email-input');
// var emailLabel = document.getElementById('emailLabel');
// var emailError = document.getElementById('email-error');

// function validateEmail() {
//   if (!emailInput.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
//     emailError.innerHTML = "Please enter a valid email";
//     return false;
//   }else {
//     emailError.innerHTML = "";
//     return true;
//   }
// }