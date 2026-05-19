// // document.querySelector("p").innerHTML = "Something"
// document.querySelector("#GlitchStudy").innerHTML = "Something"
// // Instead of modifying the first paragraph, modified the paragraph specified in the html file with the id of "GlitchStudy".
// // function declaration
// function jade() {
//     document.querySelector("#GlitchStudy").innerHTML = "Something else"
// }
// jade()
// // calling the function.
// document.querySelector("p").addEventListener("click", jade)
// function jade22222() {
//     document.querySelector("#GlitchStudy").innerHTML = "Something else"
// }
// jade22222()
// // calling the function.
// document.querySelector("p").addEventListener("click", jade22222)
// document.querySelector("p").addEventListener("click", function newfunction() {
// function newfunction() {
//     document.body.style.background = "pink"
// }
// // Listens for spacebar, calls new function when spacebar is pressed.
// window.addEventListener('keydown', (event) => {
//     if (event.code === "Space") {
//         newfunction();
//         addtonumber();
//     }
// })
// console.log("Hello World")
// // Console tells you something about the code, or can be used to test if your code is working. In this case, it will print "Hello World" in the console.
// let mynumber = 3
// console.log(mynumber)
// function addtonumber(){
//     mynumber = mynumber + 3
//     console.log(mynumber);
// }
// addtonumber()

// console.log ("Jadey")
// let element = document.getElementById("GlitchStu");
// let backgroundFlash = false
// setInterval(function() { 
//     if (backgroundFlash == false) {
//         element.style.backgroundColor = "blue"
//         backgroundFlash = true
        
//     } else { 
//         console.log("flash")
//         element.style.backgroundColor = "red"
//         backgroundFlash = false
//     }
//     // add hello to this paragtraghh
//     element.innerHTML += "\nHello"
//     // increase font size
//     // element.style.fontSize += "50px"
//     console.log(element.style.fontSize)
//     element.style.backgroundColor = "blue"

// }, 1000);