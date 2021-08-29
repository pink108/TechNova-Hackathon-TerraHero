"use strict";
// find and store DOM elements to work with
const myVideo = document.getElementById("myVideo");

//Session duration buttons

  
document.getElementById("btn1").addEventListener("click", function() {
  document.getElementById("btn1").style.backgroundColor = "#8BC22F";
})

// video loop 
var iterations = 1
// document.getElementById('goalvalue').innerText = iterations;
// myVideo.addEventListener('ended', function () {    

//     if (iterations < 2) {       

//         this.currentTime = 0;
//         this.play();
//         iterations ++;
        
//         document.getElementById('goalvalue').innerText = iterations;
        
//     }  
  
// }, false);

document.getElementById('myVideo').addEventListener('ended', myHandler,false);
function myHandler() {      
  if (iterations < 2) {       

    this.currentTime = 0;
    this.play();
    iterations ++;    
    document.getElementById('goalvalue').innerText = iterations;          
  }  
}
    


// var iteration =1;
document.getElementById('myVideo').addEventListener('ended',myAlert,false);
function myAlert(e) {
    alert("You have finished your goal")
}