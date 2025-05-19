function toggleMenu() {
  const nav = document.getElementById('navMobile');

  if (!nav.classList.contains('active')) {
    nav.classList.add('active');
    nav.style.position = 'fixed';
    nav.style.top = '0';
    nav.style.left = '0';
    nav.style.width = '100vw';
    nav.style.height = '100vh';
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.justifyContent = 'center';
    nav.style.alignItems = 'center';
    nav.style.zIndex = '999';
    nav.style.color = '#000';

    // Adiciona o evento para cada link
    const links = nav.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

  } else {
    closeMenu();
  }
}

const navLinks = document.querySelectorAll('.nav-link');
const navMenu = document.querySelector('.navbar-menu');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show'); // ou toggle invertido
  });
});


function closeMenu() {
  const nav = document.getElementById('navMobile');
  nav.classList.remove('active');
  nav.style.display = 'none';
}


// SCRIPT DO FORMULÁRIO 

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const instagram = document.getElementById("instagram");



form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const telefoneValue = telefone.value;
  const instagramValue = instagram.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (telefoneValue === "") {
    setErrorFor(telefone, "O telefone é obrigatório");
  } else {
    setSuccessFor(telefone);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}


// Função para validar e enviar os dados do formulário
const handleSubmit = (event) => {
    event.preventDefault();

    // Coletar dados dos campos
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const Telefone = document.getElementById('telefone').value;
    const Instagram = document.getElementById('instagram').value;

    // Validação simples de e-mail (pode ser melhorado)
    if (!checkEmail(email)) {
        alert('E-mail inválido');
        return;
    }

    // Enviar dados para o Sheet Monkey API
    fetch('https://api.sheetmonkey.io/form/cWp1jTnbHCgAjQWUQSwa4k', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Nome: name,
            email: email,
            Telefone: Telefone,
            Instagram: Instagram
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Formulário enviado com sucesso:', data);
        alert('Formulário enviado com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao enviar formulário:', error);
        alert('Formulário enviado com sucesso!');
    });
};





// Adiciona o evento de submit ao formulário
document.getElementById('form').addEventListener('submit', handleSubmit);