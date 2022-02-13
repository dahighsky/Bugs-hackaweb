console.log("Done");

var name = ["h1","h2","h3","h4"];
var bloodd = [["A+","B+","A-","B-","O-","O+","AB-"],["A+","B+","A-","B-","O-","O+"],["A+","B+","A-","B-","O-","O+"],["A+","B+","AB+","AB-"]];
var invv = [["Ventilators","CT-Scan","MRI Scan","X-Ray"],["Ventilators","CT-Scan","MRI Scan","X-Ray"],["Ventilators","CT-Scan","MRI Scan","X-Ray"],["Ventilators","CT-Scan","MRI Scan","X-Ray"]];
var specialistt = [
    ["Neurologist","Urologist","Pediatrician","Cardiologist"],
    ["Neurologist","Urologist","Pediatrician","Cardiologist"],
    ["Neurologist","Urologist","Pediatrician","Cardiologist"],
    ["Neurologist","Urologist","Pediatrician","Cardiologist"]
];

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
    
        var temp = [name,age,gender,blood,inv,spec,textarea];

        const namme = localStorage.getItem('patient');

        if(namme){
        }else{
            let neww = JSON.stringify([]);
            localStorage.setItem("patient",neww);
        }
        let nammee = JSON.parse(namme);
            nammee.push(temp);
            let nammeee = JSON.stringify(nammee);
            localStorage.setItem("patient",nammeee);
            let temm = JSON.stringify(temp);
            localStorage.setItem("active",temm);
    
    let chick = []
    let check = [0,0,0,0];
    for(let i = 0;i < 4;++i){
        if(bloodd[i].includes(blood)){
            check[i]=check[i]+1;
        }
        if(invv[i].includes(inv)){
            check[i]=check[i]+1;
        }
        if(specialistt[i].includes(spec)){
            console.log(specialistt[i])
            check[i]=check[i]+1;
        }
    }
    console.log(check);
    for(let i in check){
        if(check[i] == 3){
            chick.push(i);
        }
    }
    chick = JSON.stringify(chick);
    localStorage.setItem("rec",chick);
    window.open("referal.html")

});
