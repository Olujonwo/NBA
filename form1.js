// function show_error(callback, color, message, error_container) {
//     if (callback()) {
//       error_container.textContent = message;
//       error_container.style.color = color
//     } else {
//       error_container.textContent = ''
//     }
//   }

function check_signInEmail(hello) {
    const inputEmail = hello.target;
    console.log(hello)
    const star = inputEmail.parentElement
    const emailCheck = star.querySelector('.signIn_feedback')
    show_error(
      () => !inputEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/),
      'blue',
      'please enter a valid email',
      emailCheck
    )
  }
  
    ( () => {
      const signIn_Email = document.querySelector ('.SignIn_name');
      signIn_Email.addEventListener('input',check_signInEmail)
    }
    )()