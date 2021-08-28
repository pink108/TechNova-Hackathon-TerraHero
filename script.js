"use strict";

// find and store dom elements to work with
const selectionForm = document.querySelector(".selection_form")

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

   