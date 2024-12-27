function submit(){
    let data=[
        {
            name:document.getElementById("input1").value,
            age:document.getElementById("input2").value,
        }
    ]
    localStorage.setItem(data)
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