

function signup(){
    let data=
        {
            email: document.getElementById("input1").value,
            pass: document.getElementById("input2").value
        }
    
    localStorage.setItem("signup", JSON.stringify(data))
}

let signup_data=JSON.parse(localStorage.getItem("signup"));

function login(){
    let loginEmail=document.getElementById("email").value;
    let loginPass=document.getElementById("password").value;

    if(signup_data.email!=loginEmail || signup_data.pass!=loginPass){
        alert("user not found");
        return flase
    }
}












































// function display(){

// let table=`<table border=2px solid green>
// <tr>
// <th>name</th>
// <th>age</th>
// </tr>`
//  table+=`<tr>
// <td>${data}</td>
// <td>${data1}</td>
// `
// table+=`</table>`
// document.getElementById("demo").innerHTML=table;

// }