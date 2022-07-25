var btns = document.querySelectorAll(".btn")
var img = document.getElementById("flipper")

var images = ["images/1112.jfif","images/Layer 8.png","images/Layer 6.png","images/Layer 2.png"]

btns.forEach(function (btn){
    btn.addEventListener("click",function(){
        btns[0].classList.remove("enabled")
        btns[1].classList.remove("enabled")
        btns[2].classList.remove("enabled")
        btns[3].classList.remove("enabled")
            if(btn.classList.contains("firstb")){
                img.style.backgroundImage = `url("${images[0]}")`
                btns[0].classList.add("enabled")
            }
            if(btn.classList.contains("seconds")){
                img.style.backgroundImage = `url("${images[1]}")`
                btns[1].classList.add("enabled")
            }
            if(btn.classList.contains("thirdb")){
                img.style.backgroundImage = `url("${images[2]}")`
                btns[2].classList.add("enabled")
            }
            if(btn.classList.contains("fourthb")){
                img.style.backgroundImage = `url("${images[3]}")`
                btns[3].classList.add("enabled")
            }
    })
})