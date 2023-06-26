const Navbar = document.getElementById('nav-bar')
const Bar = document.getElementById('ham-bar')
const Close = document.getElementById('close')

// console.log(Close)

   function toggleNavbar(){
    if(Bar){
        Bar.addEventListener('click',()=>{
            Navbar.classList.add('active')
            Bar.style.display = 'none'
        })
    }
    if(Close){
        Close.addEventListener('click',()=>{
            Navbar.classList.remove('active')
            Bar.style.display = 'initial'
        })
    }
   }
toggleNavbar()