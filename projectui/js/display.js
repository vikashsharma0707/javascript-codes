async function dataShow() {
  let myTable = `
    <table class="hello1" >
    <tr>
        <th>Employee no</th>
        <th>Employee Name</th>
        <th>City</th>
        <th>Salary</th>
    </tr>
    `;

  let url = "http://localhost:3000/employess";

  let myobj = await fetch(url);
  console.log(myobj);
  let myData = await myobj.json();
  console.log(myData);

  myData.map((key) => {
    myTable += `
        <tr>
            <td>${key.employeeno}</td>
            <td>${key.name}</td>
            <td>${key.city}</td>
            <td>${key.salary}</td>
        
        </tr>
        `;
  });

  myTable += `</table>`;
  document.getElementById("demo").innerHTML = myTable;
}

dataShow();



// border="1px" width="600px" bgcolor="lightblue" align="center"  margin-left:50%;