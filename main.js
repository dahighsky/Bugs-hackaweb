console.log("Done");

var name = ["H-1","H-2","H-3","H-4"];
var bloodd = [["A+","B+","C+"],["A+","B+","C+"],["A+","B+","C+"],["A+","B+","C+"]];
var invv = [["Ventilators","CT-Scan","MRI Scan","X-Ray"],["Ventilators","CT-Scan","MRI Scan","X-Ray"],["Ventilators","CT-Scan","MRI Scan","X-Ray"],["Ventilators","CT-Scan","MRI Scan","X-Ray"]];
var specialistt = [["allergist ","dermatologist","midwife","occupational therapist","oncologist","chiropractor"],
["ophthalmologist ","dermatologist","midwife","obstetrician","neurologist","naturopath"],
["podiatrist","radiologist","pediatrician","oncologist"],
["allergist ","cardiologist","occupational therapist","occupational therapist","oncologist","fertility specialist"]
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
        // var temp = [name,age,gender,blood,inv,spec,textarea];

        // const namme = localStorage.getItem('patient');

        // if(namme){
        // }else{
        //     let neww = JSON.stringify([]);
        //     localStorage.setItem("patient",neww);
        // }
        // let nammee = JSON.parse(namme);
        //     nammee.push(temp);
        //     let nammeee = JSON.stringify(nammee);
        //     localStorage.setItem("patient",nammeee);

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

});
