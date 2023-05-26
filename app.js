"use strict"

var input = document.getElementById("input");
var btn = document.querySelectorAll(".show");
var clearAll = document.querySelector(".clear");
var equalsTo = document.querySelector(".equals")

btn.forEach(function(element){
    element.addEventListener("click", function(){
        var num = element.textContent;
        input.value = input.value + num;
    })
});

clearAll.addEventListener("click", function(){
    input.value = "";
})

equalsTo.addEventListener("click", function(){
    var calculate = eval(input.value);
    input.value = calculate;
})