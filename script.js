document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var emailInput = document.getElementById('inputEmail');
    var passwordInput = document.getElementById('inputPassword');

    var email = emailInput.value;
    var password = passwordInput.value;

    if (email === '') {
      alert('Por favor, preencha o campo de e-mail.');
    } else if (password === '') {
      alert('Por favor, preencha o campo de senha.');
    } else if (!password.match(passwordRegex)) {
        alert('A senha deve conter no mínimo 8 caracteres, pelo menos 1 letra maiúscula, 1 número e 1 caractere especial.');
      } else { 
      document.getElementById('loginForm').submit();
    }
  }
  );

  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");
    contactForm.classList.add("animated");
  });