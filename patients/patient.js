console.log("hehehe");

let data = localStorage.getItem("patient");
data = JSON.parse(data);

console.log(data);

console.log(length);
for (let i in data){
    let body = document.querySelector("BODY");
console.log(body);

body.innerHTML += `
<section>
<div class="centre">
    <div class="left">
        <form class="contentleft">
        <div class="imgbx">
            <img src="../images/user.png" class="image">
        </div>
        <input type="text" class="horzbx" value="${data[i][0]}" disabled></input>
        <input type="text" class="smallbx1" value="${data[i][1]}" disabled></input>
        <input type="text" class="smallbx2" value="${data[i][2]}" disabled></input>
    </form>
    </div>
    <div class="right">
        <form class="contentright">
            <input type="text" name="name" class="box1" value="${data[i][3]}" disabled></input>
            <input type="text"  class="box2" value="${data[i][4]}" disabled></input>
            <input type="text" class="box3" value="${data[i][5]}" disabled></input>
            <input type="text" class="box4" value="${data[i][6]}" disabled></input>
            <button type="text" class="box5" disabled><b>See</b></button>
        </form>
    </div>
</div>
<!-- </form>  -->
</section>
`;
}

