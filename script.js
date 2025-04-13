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