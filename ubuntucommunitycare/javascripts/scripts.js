document.getElementById("enquiryForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if(name === "" || email === "" || message === "") {
        alert("Please complete all required fields.");
        return; // Stop further execution if any field is empty

    }

    document.getElementById("response").innerHTML = 
    "Thank you " + name + 
    ", your enquiry has been received."; // Display success message if all fields are filled

});

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function() {

    let filter = searchInput.value.toLowerCase();

    let items = document.querySelectorAll("#programList li");

    items.forEach(function(item) {

    let text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "" : "none";

    });


    });
    
    }

    document.getElementById("contactForm").addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Message sent successfully! We will get back to you soon.");


    });


    document.getElementById("searchInput").addEventListener("keyup", function(event) {
        let filter = this.value.toLowerCase();
        let items = document.querySelectorAll("#programList li");

        items.forEach(function(item) {

           if (item.textContent.toLowerCase().includes(filter)) {
            item.style.display = "";
           } 
           else {
                item.style.display = "none";
           }

        });
    });
            
        

