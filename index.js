"use strict";  //now we dont need to use "this"  keyword everywhere              

(function () {
    setModel();
})();

function setModel(name,age){
let Obj={
name: name || "rizwan",
age: age || 27
}
sessionStorage.setItem("mainMdl",JSON.stringify(Obj));
}

function  sayHi() {
    let oName = document.getElementById("in_name").value;
    let oAge = document.getElementById("in_age").value;
    setModel(oName, oAge);

    let name = JSON.parse(sessionStorage.getItem("mainMdl")).name;
    let age = JSON.parse(sessionStorage.getItem("mainMdl")).age;
    name = `hi ${name} of ${age}`
    alert(name);
}

function changeColor(){
    let oName = document.getElementById("in_name");
    let oAge = document.getElementById("in_age");
   if(oName.value){
    oName.style.backgroundColor="yellow";
   }
   if(oAge.value){
    oAge.style.backgroundColor="yellow";
   }
}
