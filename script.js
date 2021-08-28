"use strict";

// find and store dom elements to work with
const selectionForm = document.querySelector(".selection_form")

var i=0;
    function buttonclick1(){
        i++;
        document.getElementById("goalvalue").value = i;
        }
    function buttonclick5(){
        document.getElementById("goalvalue").value = i+5;
        }
    function buttonclick10(){
        document.getElementById("goalvalue").value = i+10;
        }
