

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

function submit(){
    let patientdata=
        {
        
      doctor:document.getElementById("doctors").value,
      name:document.getElementById("inputA").value,
      monumber:document.getElementById("inputB").value,
      age:document.getElementById("inputC").value,
      date:document.getElementById("inputD").value
      
    } 
    localStorage.setItem("patientdetails",JSON.stringify(patientdata))
}




let patientdeta=JSON.parse(localStorage.getItem("patientdetails"));














function display(){

let table=`<table border=2px solid green>
<tr>
<th>Name</th>
<th>Mobile_NO</th>
<th>Age</th>
<th>Date</th>
<th></th>
</tr>`
 table+=`<tr>
<td>${patientdeta.name}</td>
<td>${patientdeta.monumber}</td>
<td>${patientdeta.age}</td>
<td>${patientdeta.date}</td>
`  
table+=`</table>`
document.getElementById("demo").innerHTML=table;

}

function seterror(id , err){
    let error=document.getElementByid(id);
    error.innerHTML=err;

}

function validation(){

    let name= document.getElementById("inputA").value;
    if(name.length<5){
      seterror("altername" ,"enter your full name" );
      return false;
    }
    
    let mobino=document.getElementById("inputB").value;
    if(mobino.length!=10){
        seterror("altermono", "enter 10 digits");
        return false;
    }

    let age=document.getElementById("inputC").value;
    if(age<115){
        seterror("alterage", "check your age again");
        return false;
    }

    // 
    
    return true;
}