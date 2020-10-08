const hamburgerMenu = document.querySelector(".header__hamburger");

hamburgerMenu.addEventListener("click", ()=>{
    if(hamburgerMenu.classList.contains("open")){
        hamburgerMenu.classList.remove("open")
    }else{
        hamburgerMenu.classList.add("open") 
    }
});