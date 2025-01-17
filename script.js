const burgerNav = document.getElementById('burgerNav');
const burgerToggleBtn = document.getElementById('toggleBurger');

burgerToggleBtn.addEventListener('click', () => {
  burgerNav.classList.toggle('active');
});