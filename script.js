document.querySelector(".burger__icon").addEventListener("click", ()=>{
    document.querySelector(".header__burger").classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
})