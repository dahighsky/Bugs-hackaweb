console.log("heheh");

let data = localStorage.getItem("Session");
let dat = localStorage.getItem("rec");

let liss = ["h1","h2","h3","h4"];
let index = liss.indexOf(data);
dat = JSON.parse(dat);
dat.splice(index,1);

// distance value
let hh = [[0,59,79,49],
[59,0,19,79],
[79,19,0,39],
[49,79,39,0]];

hh = hh[index];
console.log(hh);


// jo sahi wahi dikhay
if(!dat.includes("0")){
    let my = document.querySelector(".box2");
    my.style.display = 'none';
}
if(!dat.includes("1")){
    let my = document.querySelector(".box3");
    my.style.display = 'none';
}
if(!dat.includes("2")){
    let my = document.querySelector(".box4");
    my.style.display = 'none';
}
if(!dat.includes("3")){
    let my = document.querySelector(".box5");
    my.style.display = 'none';
}


//span wala code
let dist = document.getElementById("dist1");
console.log(dist.innerHTML = hh[0]);    

dist = document.getElementById("dist2");
console.log(dist.innerHTML = hh[1]);

dist = document.getElementById("dist3");
console.log(dist.innerHTML = hh[2]);

dist = document.getElementById("dist4");
console.log(dist.innerHTML = hh[3]);

// referal store
let namme = localStorage.getItem('ref');

let active = localStorage.getItem("active");
active = JSON.parse(active)
console.log(active);

if(namme){
}else{
    let neww = JSON.stringify([[],[],[],[]]);
    localStorage.setItem("ref",neww);
    namme = localStorage.getItem('ref');
}

namme = JSON.parse(namme);
console.log(namme);

let red = document.querySelector(".box2");
red.addEventListener("click",function(){
    namme[0].push(active);
    namme = JSON.stringify(namme);
    localStorage.setItem("ref",namme);
    window.open("home.html");
});

red = document.querySelector(".box3");
red.addEventListener("click",function(){
    namme[1].push(active);
    namme = JSON.stringify(namme);
    localStorage.setItem("ref",namme);
    window.open("home.html");
});

red = document.querySelector(".box4");
red.addEventListener("click",function(){
    namme[2].push(active);
    namme = JSON.stringify(namme);
    localStorage.setItem("ref",namme);
    window.open("home.html");
});

red = document.querySelector(".box5");
red.addEventListener("click",function(){
    namme[3].push(active);
    namme = JSON.stringify(namme);
    localStorage.setItem("ref",namme);
    window.open("home.html");
});
