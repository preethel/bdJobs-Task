const userData = [];

      document
        .getElementById("userDataForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          if (this.checkValidity()) {
            const name = document.getElementById("name").value;
            const address = document.getElementById("address").value;
            const email = document.getElementById("email").value;
            const mobile = document.getElementById("mobile").value;
            const dob = document.getElementById("dob").value;
            const password = document.getElementById("password").value;
            const repassword = document.getElementById("repassword").value;

            // Validate if password and repassword match
            if (password !== repassword) {
              document
                .getElementById("repassword")
                .setCustomValidity("Passwords do not match.");
              this.classList.add("was-validated");
              return;
            }

            // Create user data object
            const user = {
              name: name,
              address: address,
              email: email,
              mobile: mobile,
              dob: dob,
              password: password,
            };

            // Push user data object into the array
            userData.push(user);

            // Display data in the table
            displayUserData();

            // Reset form fields
            document.getElementById("userDataForm").reset();

            // Show success message
            alert("Form submitted successfully!");
          } else {
            // Show validation errors
            this.classList.add("was-validated");
          }
        });

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