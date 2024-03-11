const menuBtn = document.querySelector('#menuBtn')
const menu = document.querySelector('#menu')
const openMenu = document.querySelector('.open')
const closeMenu = document.querySelector('.close')

menuBtn.addEventListener('click', ()=>{
    openMenu.classList.toggle('hidden')
    closeMenu.classList.toggle('hidden')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
})
