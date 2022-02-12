console.log("Done");

// Taking Values 
var but = document.querySelector('.box5');
console.log(but)
but.addEventListener("click",function(){
    var name = document.querySelector(".horzbx").value;
    var age = document.querySelector(".smallbx1").value;
    var gender = document.querySelector(".smallbx2").value;
    var blood = document.querySelector(".box1").value;
    var inv = document.querySelector(".box2").value;
    var spec = document.querySelector(".box3").value;
    var textarea = document.querySelector(".box4").value;
    console.log(name,age,gender,blood,inv,spec,textarea);
});
