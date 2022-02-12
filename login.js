console.log("Js linked");

// Login system Start

var submit_login = document.querySelector('.submit_login') ;
console.log(submit_login);
submit_login.addEventListener("click",function(){
    var username = "";
    var pwd = "";
    var email = document.querySelector(".email_login").value;
    var pass = document.querySelector(".pass_login").value;
    // Login Authentication
    // Storing
    localStorage.setItem("Session",email);
    window.open("1.html");
});

// Login system stop

