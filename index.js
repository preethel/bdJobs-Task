const userData = [];

function submitEmployee(event) {
    event.preventDefault();

    var fnameInput = document.getElementById('fname').value;
    var lnameInput = document.getElementById('lname').value;
    var nameInput = fnameInput.concat(" ",lnameInput);
    var addressInput = document.getElementById('address').value;
    var emailInput = document.getElementById('email').value;
    var mobileInput = document.getElementById('mobile').value;
    var dobInput = document.getElementById('dob').value;
    var passwordInput = document.getElementById('password').value;
    var repasswordInput = document.getElementById('repassword').value;
    
    var checkValid = 1;
    
        //Regular Expression validation 
        function validateRegularExpression(text) {
            // Regular expression pattern for name validation (only allows letters, spaces, and hyphens)
            var pattern = /^[a-zA-Z\s-\s.]+$/;

            return pattern.test(text);
            }

        //Email Validation   
        function validateEmail(email) {
            const emailRegex = /^[a-zA-Z0-9-_]+@[^\s@]+\.[a-zA-Z]{3,}$/;
            return emailRegex.test(email);
            }
        
            //Mobile validation      
        function validateMobileNumber(mobile) {
            const mobileNumberRegex = /^01\d{9}$/;
            return mobileNumberRegex.test(mobile);
            //<!-- pattern="01[0-9]{9}" -->
            }
        //Birth Date Validation
        function validateBirthDate(date) {
            const birthDateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
            return birthDateRegex.test(date);
            }

        function validatePassword(password, repassword) {
            const passwordRegex = /^(?=.*\d)[a-zA-Z0-9]{4,}$/;
            if (password !== repassword) {
                return false; // Passwords do not match
            }
            return passwordRegex.test(password);
            }
        
        if (validateRegularExpression(nameInput)) {
        //  proceed with form submission or other actions
        } else {
            alert("Please enter a valid name.");
            checkValid = 0;
            }

        if (validateRegularExpression(addressInput)) {
            // proceed with form submission or other actions
        } else {
            alert("Please enter a valid address.");
            checkValid = 0;
            }
        
        if (validateEmail(emailInput)) {
            //  proceed with form submission or other actions
        } else {
            alert("Please enter a valid email.");
            checkValid = 0;
            }
        
        if (validateMobileNumber(mobileInput)) {
            // proceed with form submission or other actions
        } else {
            alert("Please enter a valid Mobile No. start with 01.");
            checkValid = 0;
            }
        
        if (validateBirthDate(dobInput)) {
            // proceed with form submission or other actions
        } else {
            alert("Follow this format: dd/mm/yyyy");
            checkValid = 0;
            }

        if (validatePassword(passwordInput, repasswordInput)) {
            // proceed with form submission or other actions
        } else {
            alert("Enter a valid password contain numeric value and minimum 4 digit \n password does not match.");
            checkValid = 0;
            }

    if(checkValid != 1){
        alert("Please fill correctly.")
    }
    else{
            const user = {
                name : nameInput,
                address : addressInput,
                email : emailInput,
                mobile : mobileInput,
                dob : dobInput,
                password : passwordInput
            };
        
            // Push user data object into the array
            userData.push(user);
        
            // Display data in the table
            displayUserData();
        
            // Reset form fields
            //document.getElementById("userDataForm").reset();
        
            // Show success message
            alert("Form submitted successfully!");


            // Convert JSON object to a string
            var jsonData = JSON.stringify(userData, null, 2);
            // Create a download link
            var a = document.createElement("a");
            a.href = "data:application/json;charset=utf-8," + encodeURIComponent(jsonData);
            a.download = "formData.json";
            a.style.display = "none";

            // Append the link to the body and click it
            document.body.appendChild(a);
            a.click();

            // Clean up
            document.body.removeChild(a);
            // Add the JavaScript function to the submit event of the form
            document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault();
            saveFormData();
            });
        }

        
    }



      function displayUserData() {
        const tableBody = document.querySelector("#userDataTable tbody");
        tableBody.innerHTML = "";

        // Loop through user data array
        userData.forEach(function (user) {
          const row = document.createElement("tr");
          // Insert user data into row cells
          row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.address}</td>
            <td>${user.email}</td>
            <td>${user.mobile}</td>
            <td>${user.dob}</td>
            `;

          // Append row to the table
          tableBody.appendChild(row);
        });
      }


    