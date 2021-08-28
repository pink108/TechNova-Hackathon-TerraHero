"use strict";
// find and store DOM elements to work with
const myVideo = document.getElementById("myVideo");

// settig up a duration and displaying it
var i=0;
    function buttonClick1(){
        i++;
        document.getElementById("goalvalue").value = i;
        }
    function buttonClick5(){
        i=i+5;
        document.getElementById("goalvalue").value = i;
        }
    function buttonClick10(){
        i=i+10;
        document.getElementById("goalvalue").value = i;
        }

    function getInputValue(){
        var inputval = document.getElementById("userinput").value;
        document.getElementById("goal").innerHTML = inputval;
    }

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