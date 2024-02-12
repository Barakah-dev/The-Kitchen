const body = document.querySelector('body');
const navBar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const menuClose = document.getElementById('menu-close');
const menuOpen = document.getElementById('menu-open');

menuOpen.addEventListener('click', () => {
  navBar.classList.add('active');
  console.log('click');
});
  

body.addEventListener('click', (e) => {
  let clickedEl = e.target;

  if (!clickedEl.classList.contains('menu-open') || clickedEl.classList.contains('menu-close') ) {
    navBar.classList.remove('active');
  }
  
});