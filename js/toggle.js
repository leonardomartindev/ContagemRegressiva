let toggleTheme = document.querySelector(".toggleTheme")
let html = document.querySelector("html")
toggleTheme.addEventListener('click', function(){
  html.classList.toggle("dark-mode")
})

