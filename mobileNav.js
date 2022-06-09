const showNavigation = document.getElementById('showNavigation')
const navigation = document.getElementById('navigation-mobile')
const closeNav = document.getElementById('closeNav');
const languageButtons =  document.getElementById('languageButtons')

showNavigation.addEventListener('click', () => {
    navigation.classList.add('navigation-active')
    document.querySelector('html').style.overflow = 'hidden'
    languageButtons.classList.remove('language')
    languageButtons.classList.add('mobile-language')
})
closeNav.addEventListener('click', () => {
    navigation.classList.remove('navigation-active')
    document.querySelector('html').style.overflow = 'auto'
})
