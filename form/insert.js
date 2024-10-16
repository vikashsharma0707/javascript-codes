document.getElementById("appointmentForm").addEventListener("submit", myInsert);

async function myInsert(event) {
    // Prevent the form from submitting the default way
    event.preventDefault();

    let myName = document.getElementById("name").value;
    let myEmail = document.getElementById("email").value;
    let myPhone = document.getElementById("phone").value;
    let myDate = document.getElementById("date").value;
    let myTime = document.getElementById("time").value;
    let myDept = document.getElementById("department").value;
    let myDoc = document.getElementById("doctor").value;
    let myComments = document.getElementById("message").value;

    let url = "http://localhost:3000/employee"; // Change to the correct URL for your server

    try {
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                ename: myName,
                eemail: myEmail,
                ephone: myPhone,
                edate: myDate,
                etime: myTime,
                edept: myDept,
                edoc:myDoc,
                ecomments: myComments,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        let json = await response.json();
        console.log(json);
        alert("Data saved successfully");
    } catch (error) {
        console.error('Error:', error);
        alert("There was an error saving the data");
    }
}