const header = document.querySelector(".header");
const hamburger = document.querySelector(".header__hamburger");

hamburger.addEventListener("click", ()=>{
    if(header.classList.contains("open")){
        header.classList.remove("open")
    }else{
        header.classList.add("open") 
    }
});