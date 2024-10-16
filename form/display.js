async function dataShow() {
    let myTable = `
   <table  class="hello3"  border="2px " width="800px" bgcolor="teal" align="center" >
          <tr bgcolor="blue">
            <th>Patient Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
             <th>Time</th>
            <th>Department</th>
            <th>Doctor Name</th>
            <th>Additional Message</th>
            
          </tr>
         `;
    let url = "http://localhost:3000/employee";
  
    let myobj = await fetch(url);
    console.log(myobj);
    let myData = await myobj.json();  
    console.log(myData);
  
    myData.map((key) => {
      myTable += `
         <tr>
          <td>${key.ename}</td>
          <td>${key.eemail}</td>
          <td>${key.ephone}</td>
          <td>${key.edate}</td>
           <td>${key.etime}</td>
            <td>${key.edept}</td>
            <td>${key.edoc}</td>
             <td>${key.ecomments}</td>
         </tr>
      `;
    });
  
    myTable += `</table>`;
  
    document.getElementById("demo").innerHTML = myTable;
  }
  dataShow();
  

  