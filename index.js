"use strict";  //now we dont need to use "this"  keyword everywhere              

(function () {
    setModel();
})();

function setModel(name, age) {
    let Obj = {
        name: name || "rizwan",
        age: age || 27
    }
    sessionStorage.setItem("mainMdl", JSON.stringify(Obj));
}

function sayHi() {
    let oName = document.getElementById("in_name").value;
    let oAge = document.getElementById("in_age").value;
    setModel(oName, oAge);

    let name = JSON.parse(sessionStorage.getItem("mainMdl")).name;
    let age = JSON.parse(sessionStorage.getItem("mainMdl")).age;
    name = `hi ${name} of ${age}`
    alert(name);
}

function changeColor() {
    let oName = document.getElementById("in_name");
    let oAge = document.getElementById("in_age");
    if (oName.value) {
        oName.style.backgroundColor = "yellow";
    }
    if (oAge.value) {
        oAge.style.backgroundColor = "yellow";
    }
}

//open menu
function onPressLogo() {
    let leftDiv = document.getElementsByClassName("left");
   
    let divWidth = leftDiv[0].style.width;
    if (divWidth == "30%") {
        leftDiv[0].style.width = "8%";
        leftDiv[0].style.transition = "width 0.3s";
    }
    else {
        leftDiv[0].style.transition = "width 0.3s";
        leftDiv[0].style.width = "30%";
    }
}


// function onPressLogo() {
//     let leftDiv = document.getElementsByClassName("left");
//     let rightDiv = document.getElementsByClassName("right");
//     let divWidth = leftDiv[0].style.width;
//     if (divWidth == "20%") {
//         leftDiv.classList.toggle("open");
//     }
//     else {
//         leftDiv.classList.toggle("close");
//     }
// }
