const header = document.querySelector(".header");
const hamburger = document.querySelector(".header__hamburger");

hamburger.addEventListener("click", ()=>{
    if(header.classList.contains("open")){
        header.classList.remove("open");
        document.body.classList.remove("overflow-hidden");
    }else{
        header.classList.add("open") ;
        document.body.classList.add("overflow-hidden");
    }
});