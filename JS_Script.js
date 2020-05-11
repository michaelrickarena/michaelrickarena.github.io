
var userName = prompt("What is your name?")

alert("Hi " + userName + ", This is Michael Arena's CV which he created with HTML, CSS and Javascript. \n\nUnder the photo of me, you will find a link to my offical resume. In addition, under Programming Projects, you will find the most recent and best projects, descriptions of them and a link to the code i used to create them. \n\nIf you have any questions direct them to arenam1@mcmaster.ca");


let state = {
    name : "resume-link"
}


function blue() {
    document.getElementById(state.name).id = "resume-link-blue";
    state.name = "resume-link-blue";

}
function red() {
    document.getElementById(state.name).id = "resume-link-red";
    state.name = "resume-link-red";
  
}
function green() {
    document.getElementById(state.name).id = "resume-link-green";
    state.name = "resume-link-green";
 
}
function yellow() {
    document.getElementById(state.name).id = "resume-link-yellow";
    state.name = "resume-link-yellow";
 
}
function orange() {
    document.getElementById(state.name).id = "resume-link-orange";
    state.name = "resume-link-orange"
}


