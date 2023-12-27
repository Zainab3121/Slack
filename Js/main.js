

const navOpen = document.querySelector(".ri-menu-line")
const navClose = document.querySelector(".ri-close-fill")
const nav = document.querySelector("nav ul")

navOpen.addEventListener("click", function(){
  nav.style.top = "35%"
  navOpen.style.display = "none"
  navClose.style.display = "block"
})

navClose.addEventListener("click", function(){
    nav.style.top = "-35%"
    navOpen.style.display = "block"
    navClose.style.display = "none"
  })

  const navLinks = document.querySelectorAll("nav ul li")
console.log(navLinks)
navLinks.forEach(function(link){
    link.addEventListener("click", function(){
        nav.style.top = "-35%"
        navOpen.style.display = "block"
        navClose.style.display = "none"
    })
})