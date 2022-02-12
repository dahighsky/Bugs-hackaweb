// const jsonData= require('hospital.json'); 
// console.log(jsonData);

const jsonData=Window.localStorage.getItem("form.json")
data=JSON.parse(jsonData)

console.log(data)