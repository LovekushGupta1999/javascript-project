// ................................signup apply...............................

function signup(){
    let data=
        {
            email: document.getElementById("input1").value,
            pass: document.getElementById("input2").value
        }
    
    localStorage.setItem("signup", JSON.stringify(data))
}

let signup_data=JSON.parse(localStorage.getItem("signup"));


// ...........................login.apply...........................


function login(){
    let loginEmail=document.getElementById("email").value;
    let loginPass=document.getElementById("password").value;

    if(signup_data.email!=loginEmail || signup_data.pass!=loginPass){
        alert("user not found");
        return false;
    }
}






// ..............................validation error print function......................

function seterror(id , err){
    let err_message=document.getElementById(id);
    err_message.innerHTML=err;

}

// function setslot()
//...................................insertion data function.............................

function inserted_data(){
    let name= document.querySelector("#inputA").value;
    
        if(name.length<5){
          seterror("alertname" ,"*enter your full name" );
          return false;
        }
        else{
            seterror("alertname" ," " );

        }
        let mobino=document.querySelector("#inputB").value;

        if(mobino.length!=10){
            seterror("alertmono", "*enter 10 digits");
            return false;
        }
        else{
            seterror("alertmono" ," " );

        }
    
        let age=document.querySelector("#inputC").value;

        if(age>115){
            seterror("alertage", "*check your age again");
            return false;
        }
        else{
            seterror("alertage" ," " );

        }
    
    let patientdata=
    {
    
  doctor:document.getElementById("doctors").value,
  name:document.getElementById("inputA").value,
  monumber:document.getElementById("inputB").value,
  age:document.getElementById("inputC").value,
  date:document.getElementById("inputD").value
  
   } ;

 fetch("http://localhost:3000/patient", {

    method:"POST",
    headers:{'content-type':'application/json'},
    body: JSON.stringify(patientdata)

 }).then(r=>alert("Data submitted...!!"))
  
//  return true;
}




// ..............................display data function........................


async function display(){
  let a= await fetch("http://localhost:3000/patient");
  let b= await a.json();
  let database= b.map((patientdata)=>
`<table border=2px solid green style="width: 100%; background-color:white; text-align:center">
<tr >
<th>Doctor</th>
<th>Name</th>
<th>Mobile_NO</th>
<th>Age</th>
<th>Date</th>
<th>features</th>
<th></th>
</tr>
<tr>
<td>${patientdata.doctor}</td>
<td>${patientdata.name}</td>
<td>${patientdata.monumber}</td>
<td>${patientdata.age}</td>
<td>${patientdata.date}</td>
<td><button onclick=delete_data(${patientdata.id})>Delete</button></td>
<td><button onclick=edit(${patientdata.id})>edit</button></td>
<td>  <button type="submit"  onclick="myupdate('${patientdata.id}')">Update</button></td>

</tr>
</table>`).join(" ")
document.getElementById("demo").innerHTML=database;

}

// ................................updation data function.....................

async function edit(id){
    let res =await fetch(`http://localhost:3000/patient/${id}`);
    let data =await res.json();
    let edit_frm=`
    <input type="text" value="${data.id}" id="id1" ><br>
    <input type="text" value="${data.name}" id="name1" ><br>
    <input type="text" value="${data.city}" id="city1"><br>
    `
    document.querySelector("#editform").innerHTML=edit_frm

}

function myupdate(id){ 
  
    let update_data={
        id: document.querySelector("#id1").value,
        name: document.querySelector("#name1").value,
        city: document.querySelector("#city1").value
    }
    fetch(`http://localhost:3000/student/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(update_data)
    }).then(r=>alert("updated.........!!"))
}


// ........................Deletion data function..................................


function delete_data(id){
    fetch(`http://localhost:3000/patient/${id}`,{
        method: "Delete"
    }).then(r=>alert("deleted!"))
}












































































// function validation(){

//     let name= document.getElementById("inputA").value;
//     if(name.length<5){
//       seterror("altername" ,"enter your full name" );
//       return false;
//     }
    
//     let mobino=document.getElementById("inputB").value;
//     if(mobino.length!=10){
//         seterror("altermono", "enter 10 digits");
//         return false;
//     }

//     let age=document.getElementById("inputC").value;
//     if(age<115){
//         seterror("alterage", "check your age again");
//         return false;
//     }

//     // 
    
//     return true;
// }