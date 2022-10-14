console.log("Js linked");
alert("Use \"h1/h2/h3/h4\" as the IDs tp log in to different hospital profiles and \"123\" as password for all of them to log in. \n\n ~~This is just a development build that's why passwords are povided otherwise all the log in credentials are kept confidential~~")

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
            localStorage.setItem("Session",email);
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

