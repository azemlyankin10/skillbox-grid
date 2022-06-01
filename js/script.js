const burger = document.querySelector('.navigation__burger')
const nav = document.querySelector('.navigation')
burger.addEventListener('click', () => {
  nav.classList.toggle('navigation--active')
  document.querySelector('.header__nav').classList.toggle('navigation__burger--active')
})
