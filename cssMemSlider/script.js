const BTNS = document.querySelectorAll('.button')
const MEMES = document.querySelectorAll('.meme')
const ICONS = document.querySelectorAll('.icon')
const SUB = document.querySelectorAll('.text')

BTNS.forEach(function b(button, i) {
    button.addEventListener('click', () => {
        ICONS.forEach(function i(icon) {
            icon.classList.remove('active')
        })
        ICONS[i].classList.add('active')
        SUB.forEach(function t(text) {
            text.classList.remove('active')
        })
        SUB[i].classList.add('active')
        MEMES.forEach(function m(meme) {
            meme.classList.remove('active')
        })
        MEMES[i].classList.add('active')
    })
})