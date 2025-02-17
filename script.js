// ................................signup apply...............................

function signup(){
    let data=
        {
            email: document.getElementById("input1").value,
            pass: document.getElementById("input2").value,
            cpass: document.getElementById("input3").value
           
        }
    
    if(data.pass!=data.cpass){
        seterror("alertpass","*password not match")
        return false;
    }
    else{
    localStorage.setItem("signup", JSON.stringify(data))
    }
}


let signup_data=JSON.parse(localStorage.getItem("signup"));


// ...........................login.apply...........................


function login(){
    let loginEmail=document.getElementById("email").value;
    let loginPass=document.getElementById("password").value;

    if(signup_data.email!=loginEmail || signup_data.pass!=loginPass){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">User Not Found?</a>'
          });
        return false;
    }
}



// ..............................validation error print function......................

function seterror(id , err){
    let err_message=document.getElementById(id);
    err_message.innerHTML=err;

}

//.................................alert Message........................................

    function alertwindow(){
    Swal.fire({
        title: 'Login / Sign Up',
        html: `
            <p>Please login to your account or sign up to get started.</p><br>
            <a href="loginaccount.html" class="swal-link"><button>Login Here</button></a> <br><br>
            <a href="signup.html" class="swal-link"><button>Sign up Here</button></a>
        `,
        icon: 'info',
        confirmButtonText: 'Close'
    });
};

//................................Get time slot from div..................................

function setslot(id){

    var div1=document.getElementById(id)
    var slotvalue=div1.innerHTML;
    let div2 =document.getElementById("demo25")
       div2.innerHTML+=  `    <input type="text" value="${slotvalue}" id="slot123" ><br>
`
    div1.style.backgroundColor="green"
         console.log(div1.innerText)
        
        }
        
//...................................insertion data function.............................

function inserted_data(){
     
  

        let name= document.querySelector("#inputA").value;
    
        if(name.length<7){
          seterror("alertname" ,"*enter your full name" );
          return false;
        }
        else{
            seterror("alertname" ," " );

        }
        let mobino=document.querySelector("#inputB").value;

        if(mobino.length!=10){
            seterror("alertmono", "*check your mobile number ");
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
  date:document.getElementById("inputD").value,
  slot:document.getElementById("slot123").value

   } ;

 fetch("http://localhost:3000/patient", {

    method:"POST",
    headers:{'content-type':'application/json'},
    body: JSON.stringify(patientdata)

 }).then(r=>Swal.fire({
    title: "Submitted",
    text: "You clicked the button!",
    icon: "success",
    confirmButtonText: "ok"
   
  }));
 
  return true;
}




// ..............................display data function........................


async function display(){
  let a= await fetch("http://localhost:3000/patient");
  let b= await a.json();
  let database= b.map((patientdata)=>
`

<tr>

<td>${patientdata.doctor}</td>
<td>${patientdata.name}</td>
<td>${patientdata.monumber}</td>
<td>${patientdata.age}</td>
<td>${patientdata.date}</td>
<td>${patientdata.slot}</td>
<td><button onclick="delete_data('${patientdata.id}')"><i class="fa-solid fa-trash"></i></button>
<button onclick="edit('${patientdata.id}')"><i class="fa-solid fa-user-pen"></i></button></td>

</tr>
</table>`).join(" ")
document.getElementById("showdata").innerHTML=database;

}

// ..............................Get data for updation function.....................

async function edit(id){
    let res =await fetch(`http://localhost:3000/patient/${id}`);
    let data =await res.json();
    let edit_form=`
    <h1 class="edittag">EDIT TABLE</h1>
   <div class="form-container">

    <label for="id1">ID</label>
    <input type="text" value="${data.id}" id="id1" readonly><br>

    <label for="doctors1">Doctor</label>
    <select value="Dr. list" id="doctors1">
        <option value="Dr. love">Dr. love</option>
        <option value="Dr. kush">Dr. kush</option>
        <option value="Dr. lovekush">Dr. lovekush1</option>
        <option value="Dr. lovekush">Dr. lovekush2</option>
        <option value="Dr. lovekush">Dr. lovekush3</option>
        <option value="Dr. lovekush">Dr. lovekush4</option>
    </select><br>

    <label for="name1">Name</label>
    <input type="text" value="${data.name}" id="name1"><br>

    <label for="monumber1">Mobile Number</label>
    <input type="number" value="${data.monumber}" id="monumber1"><br>

    <label for="age1">Age</label>
    <input type="text" value="${data.age}" id="age1"><br>

    <label for="date1">Date</label>
    <input type="date" value="${data.date}" id="date1"><br>

    <label for="slot_time">Time Slot</label>
    <input type="time" value="${data.slot}" id="slot_time"><br>

    <button id="updatebtn" onclick="myupdate('${data.id}')">Update</button>
</div>

    `
    document.querySelector("#editform").innerHTML=edit_form

}

// ...................................put data in database.......................
function myupdate(id){ 
  
    let update_data={
        id: document.querySelector("#id1").value,
        doctor: document.querySelector("#doctors1").value,
        name: document.querySelector("#name1").value,
        monumber:document.getElementById("monumber1").value,
        age:document.getElementById("age1").value,
        date:document.getElementById("date1").value,
        slot:document.querySelector('#slot_time').value
    }

    console.info(update_data)

    fetch(`http://localhost:3000/patient/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(update_data)
    }).then(r=>alert("updated.........!!"))

    location.reload();
}


// ........................Deletion data function..................................


function delete_data(id){
    fetch(`http://localhost:3000/patient/${id}`,{
        method: "DELETE"
    }).then(r=>alert("deleted!"))
}



// -----------------------------------------------

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });



















































