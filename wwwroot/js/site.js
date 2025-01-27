// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

"use strict"; 

let startBtnEl = document.getElementById("startBtn"); 
let secretMsgEl = document.getElementById("secretMsg");

startBtnEl.addEventListener('click', () => {
    secretMsgEl.innerHTML = "Grattis du får ett hemligt meddelande! Hoppas du har en fin dag!"
})