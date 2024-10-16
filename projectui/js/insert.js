document.getElementById("btn1").addEventListener("click", myInsert);

function myInsert() {
  let myEmpno = document.getElementById("eno").value;
  let myNname = document.getElementById("nm").value;
  let myCity = document.getElementById("city").value;
  let mySalary = document.getElementById("salary").value;


let url = "http://localhost:3000/employess";

fetch(url, {
  method: "post",

  body: JSON.stringify({
    employeeno: myEmpno,
    name: myNname,
    city: myCity,
    salary: mySalary,
  }),

  headers: {
    "Content-type": "application/json;  charset=UTF-8",
  },
})
  .then((data) => {
    console.log(data);
    return data.json();
  })

  .then((json) => {
    console.log(json);
    alert("data saved sucessfully");
  });

}