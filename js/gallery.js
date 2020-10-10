const imgs = document.querySelectorAll(".img-container img");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");

imgs.forEach(function(img){
    img.addEventListener("click",function(){
        modal.firstElementChild.setAttribute("src",img.getAttribute("src"));
        setTimeout(function(){
            modal.classList.add("show");
        },1000);
    })
})

modal.addEventListener("click",function(e){
    if(e.target.classList.contains("show")){
        modal.classList.remove("show");
    }
})