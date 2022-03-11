var alert = document.querySelector('.alert')
var box = document.querySelector('.box')

var eKey = document.querySelector('.card.key p:last-Child')
var eLocation = document.querySelector('.card.location p:last-Child')
var eWhich = document.querySelector('.card.which p:last-Child')
var eCode = document.querySelector('.card.code p:last-Child')
var result = document.querySelector('.result')

document.addEventListener('keydown', (e) =>{

     

    eKey.innerHTML = e.which == 32 ? 'Space' : e.key
    eLocation.innerHTML = e.location
    eWhich.innerHTML = e.which
    eCode.innerHTML = e.code
    result.innerHTML = e.whichp

    alert.classList.add('hide')
    box.classList.remove('hide')
})