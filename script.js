const burgir = document.querySelector(".burgir__menu")
const ulo = document.querySelector(".header__nav")
burgir.addEventListener("click", () =>{
    burgir.classList.toggle("open");  
    ulo.classList.toggle("open");  
})
