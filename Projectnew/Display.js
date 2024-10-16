async function dataShow() {
    let myTable = `
   <table  class="hello3"  border="2px " width="600px" bgcolor="lightblue" align="center" >
          <tr bgcolor="yellow">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Train</th>
             <th>Date</th>
            <th>Class</th>
            <th>Additional Comments</th>
            
          </tr>
         `;
    let url = "http://localhost:3000/employes";
  
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
          <td>${key.etrain}</td>
           <td>${key.edate}</td>
            <td>${key.eclass}</td>
             <td>${key.ecomments}</td>
         </tr>
      `;
    });
  
    myTable += `</table>`;
  
    document.getElementById("demo").innerHTML = myTable;
  }
  dataShow();
  

  