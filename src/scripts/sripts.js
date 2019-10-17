// Practice: Mirror, Mirror in the Code
// Write an event listener that listens for the keyup event on the input field.
// The event handler function should update the textContent property of both sections.
// console.log("FINALLY")

// let a1 = document.getElementById("one")
// let a2 = document.getElementById("two")

// document.getElementById("message").addEventListener("keyup", () => {

//     a1.textContent = event.target.value;
//     a2.textContent = event.target.value;
// 
// })   -------------------------------------------------------------------

// Practice: Scrolling and Scaling
// The learning objective for this exercise is to practice listening for the scroll event broadcast by the browser, and updating DOM elements in response.
// console.log("Scrolling")

const audrey = document.getElementById("audrey")

    /*
        Add an event listener to the `document` object to listen
        for the "scroll" event.
    */
    document.addEventListener("scroll", function () {
        audrey.style.width = `${window.scrollY/3}px`
    })
        /*
            Adjust the width of audrey to be 1/3 the value of
            `window.scrollY`. No lower than 50px, though.
        */
       document.addEventListener("scroll", function () {
        audrey.style.height = `${window.scrollY/4}px`
    })
        /*
            Adjust the height of audrey to be 1/4 the value of
            `window.scrollY`. No lower than 100px, though.
        */
    























// let mainContainer = document.getElementById("container")
// let bitoObj = {
//     eyes: () => {
//         let pTag = document.createElement("p")
//         let bitoButton = document.createElement("button")
//         // bitoButton.type = "button"
//         // pTag.style.color.bold
//         pTag.className = "myEyes"
//         pTag.textContent = "Bito's Eyes Are Blue and bold"
//         bitoButton.addEventListener("toggle", (button) => {
//             // let theButtonIPushed = e.which || e.keyCode;
//             // if () {

//             // }
//             e.target.className = "myEyes"

//             pTag.classList.add("colorChange")
//             pTag.textContent = "Bito's eyes are green and light"


//         })

//         mainContainer.appendChild(pTag)
//         mainContainer.appendChild(bitoButton)



//     },










//     hair: () => { },
//     age: () => { },
//     height: () => { },
//     weight: () => { }


// }
// bitoObj.eyes()
