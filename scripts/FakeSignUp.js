let first_name = document.getElementById("fname");
let last_name = document.getElementById("lname");
let user_name = document.getElementById("uname");
let password = document.getElementById("pword");


function writeName(){
    if (first_name.value.trim() === ""){
        first_name.style.border = "2px solid red";
    }else if (last_name.value.trim() === ""){
        last_name.style.border = "2px solid red";
    } else if (user_name.value.trim() === ""){
        user_name.style.border = "2px solid red";
    } else if (password.value.trim() === ""){
        password.style.border = "2px solid red"
    } else{
         first_name.style.border = "none"
        last_name.style.border = "none"
        user_name.style.border = "none"
        password.style.border = "none"
        window.location.href = "mainScreen.html";
    }
}

