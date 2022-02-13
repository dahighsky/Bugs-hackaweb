console.log("Js linked");

let id = ["h1","h2","h3","h4"];

// Login system Start

var submit_login = document.querySelector('.button') ;
console.log(submit_login);
submit_login.addEventListener("click",function(){
    var username = "";
    var pwd = "";
    var email = document.querySelector(".id").value;
    var pass = document.querySelector(".pass").value;
    
    if(id.includes(email)){
        if(pass == 123){
            window.open("home.html", "_self"); 
        }
        else{
            alert("Invalid Login Credentials")
        }
    }
    else{
        alert("Invalid Login Credentials")
    }
});

// Login system stop

