document.getElementById("ticketForm").addEventListener("submit", myInsert);

        function myInsert(event) {
            // Prevent the form from submitting the default way
            event.preventDefault();

            let myName = document.getElementById("name").value;
            let myEmail = document.getElementById("email").value;
            let myPhone = document.getElementById("phone").value;
            let myTrain = document.getElementById("train").value;
            let myDate = document.getElementById("date").value;
            let myClass = document.getElementById("class").value;
            let myComments = document.getElementById("comments").value;

            let url = "http://localhost:3000/employes"; // Change to the correct URL for your server

            fetch(url, {
                // Adding method type
                method: "POST",

                // Adding body or contents to send
                body: JSON.stringify({
                    ename: myName,
                    eemail: myEmail,
                    ephone: myPhone,
                    etrain: myTrain,
                    edate: myDate,
                    eclass: myClass,
                    ecomments: myComments,
                }),

                // Adding headers to the request
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
            // Converting to JSON
            .then((response) => response.json())
            // Displaying results to console
            .then((json) => {
                console.log(json);
                alert("Data saved successfully");
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("There was an error saving the data");
            });
        }