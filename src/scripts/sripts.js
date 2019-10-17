console.log("FINALLY")

let a1 = document.getElementById("one")
let a2 = document.getElementById("two")

document.getElementById("message").addEventListener("keyup", function(){
   
    a1.textContent = event.target.value;
    a2.textContent = event.target.value;
})