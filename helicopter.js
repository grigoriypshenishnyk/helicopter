const helicopter = document.querySelector(".helicopter");
const hill = document.querySelector(".hill");
const propeller = document.querySelector(".propeller");
const fon = document.querySelector(".game")

document.addEventListener("keydown", function() {
    jump();
})

function jump() {
    if (helicopter.classList != "jump" && propeller.classList != "jump") {
        helicopter.classList.add("jump")
        
    } 

    setTimeout(function() {
       helicopter.classList.remove("jump")
        
    }, 1200)
    
} 

setInterval ( function() {
    let helicopterTop = parseInt(window.getComputedStyle(helicopter).getPropertyValue("top"))
    let hillLeft = parseInt(window.getComputedStyle(hill).getPropertyValue("left"))

    if (helicopterTop >= 370 && hillLeft < 190 && hillLeft > 0  ) {
        
        fon.innerHTML = "<img src='img/5afe95427ffe8.jpeg'><h2>M'EXCUSE</h2>"
    }
}, 5)