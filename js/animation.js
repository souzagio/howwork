/*setTimeout(() => {
    alert('Bem vindo(a) ao "Como Funciona!"')
}, 11500);*/

let menu = document.querySelector("header .burguer")
let openMenu = document.querySelector("#inside")

//Burguer-menu events
menu.addEventListener('click', function(){
    let close = document.querySelector('#close')
    let open = document.querySelector('#open')

    close.classList.toggle('hide')
    open.classList.toggle('hide')
    //Check if close's hide or not to alter menu
    /*if(close.classList.contains('hide')){
        this.classList.remove('hide')
        open.classList.add('hide')
    }else{
        this.classList.add('hide')
        open.classList.remove('hide')
    }*/
})

openMenu.addEventListener('click', function(){
    let close = document.querySelector('#close')
    let open = document.querySelector('#open')

    close.classList.toggle('hide')
    open.classList.toggle('hide')
})

/* Menu-timing control */
document.querySelector("#menu-tec").addEventListener('mouseenter',function(){
    clearTimeout(subMenu)
    this.querySelector(".sub-menu-1").classList.add("expanded")
})

document.querySelector("#menu-tec").addEventListener('mouseleave',function() {
      subMenu = setTimeout(function() {
        this.querySelector(".sub-menu-1").classList.remove("expanded")
    }.bind(this), 100)
})