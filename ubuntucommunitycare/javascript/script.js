document.getElementById("enquiryForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Prevent the default form submission behavior

    const enquiry = document.getElementById("enquiryType").value;

    
    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === "") {
        alert("Please complete all required fields.");
        return; // Stop further execution if any field is empty

    }

    let response ="";
     if (enquiry === "volunteer") {
        response = "Thank you for your interest in volunteering. Our team will contact you within 48 hours.";
    }

    else if (enquiry === "sponsor") {
        response = "Thank you for your interest in sponsoring our programs. Sponsorship packages are available.";
    }

    else if (enquiry === "donate") {
        response = "Thank you for your donation enquiry. Donation details will be emailed to you";
    }
    else if (enquiry === "community program") {
        response = "Thank you for your interest in our community programs. We will provide more information soon.";

    }
    else{
        response = "Thank you " + name + ", your enquiry has been received. We will contact you soon.";
    }

    document.getElementById("enquiryResponse").innerHTML = response;



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

        const name = document.getElementById("fullName").value.trim();

        const email = document.getElementById("email").value.trim();

        const type = document.getElementById("messageType").value.trim();

        const message = document.getElementById("contactMessage").value.trim();

        

        window.location.href = `mailto:info@ubuntucommunitycare.org?subject=${type}&body=
        Name:${name}
        Email:${email}
        Message:${message}`;

       


    });


     
        const accordions = document.querySelectorAll(".accordion");

        accordions.forEach(item => {
            item.addEventListener("click", () => {


            const content = item.nextElementSibling;
            
            if (content.style.display === "block") {
                content.style.display = "none";
            } 
            else {
                content.style.display = "block";
            }
        });

    });

const galleryImages = document.querySelectorAll(".gallery-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

   


    document.getElementById("searchInput").addEventListener("keyup", function() {

        let filter = this.value.toLowerCase();

        let programs = document.querySelectorAll("#programList li");


        programs.forEach(function(item) {

            if (item.textContent.toLowerCase().includes(filter)) {
                item.style.display = "";
            }
            else {
                item.style.display = "none";
            }
        });
    });
          
    const programs = [
        {
            name:"Food Distribution",
            description:"Providing food parcelsto families in need."
        },

        {
            name:"Youth Development",
            description:"Supporting the growth and skills development of young people."
        },

        {
            name:"Education Support",
            description:"Providing educational support and learning opportunities."
        },

        {
            name:"Community Outreach",
            description:"Community uplifting and awareness campaigns ."
        }
    ];

    function displayPrograms(programList) {

        let output ="";
        programList.forEach(program => {
            output += `<div class="program-card">
            <h3>${program.name}</h3>
            <p>${program.description}</p>
            </div>`;
        });

        document.getElementById("programContanier").innerHTML = output;

    }

    displayPrograms(programs);

    document.getElementById("searchInput").addEventListener("keyup", function() {

        const searchValue = this.value.toLowerCase();

        const filteredPrograms = programs.filter(program =>
            program.name.toLowerCase().includes(searchValue) ||
            program.description.toLowerCase().includes(searchValue)

        );


        
document.getElementById("enquiryForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Prevent the default form submission behavior

    const enquiry = document.getElementById("enquiryType").value;

    
    // Get form values
    let phone = document.getElementById("phone").value.trim();

    let error= document.getElementById("errorMessage");

    error.innerHTML = ""; // Clear previous error messages

    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
        error.innerHTML = "Please enter a valid 10-digit phone number.";
        return; // Stop further execution if phone number is invalid
    }

    alert("Enquiry submitted successfully!");
});

document.getElementById("contactForm").addEventListener("submit", function(event) {

    let message = document.getElementById("contactMessage").value.trim();

    let error = document.getElementById("contactErrorMessage");

    error.innerHTML = ""; // Clear previous error messages

    if (message.length < 20) {
        event.preventDefault(); // Prevent form submission

        error.innerHTML = "Please enter a message with at least 20 characters.";
        return; // Stop further execution if message is too short
    }

    alert("Message submitted successfully!");
});


async  function submitFormAJAX(form){
    const statusDiv = document.getElementById("enquiryResponse");
    statusDiv.textContent = "Sending---";
    statusDiv.style.color = "blue";

    const formData = new FormData(form); // collects all form data

    try{
        const response = await fetch(form.action, {
             method: form.method,
             body: formData,
            headers: {
            "Accept": "application/json"

        }
    });

    if (response.ok){
        // Success- show message without reload
         statusDiv.textContent = "Thank you! your enquiry was sent. Ubuntu Community Care will contact you soon.";
        statusDiv.style.color ="green";
        form.reset(); // clear form
    } else{
        statusDiv.textContent = "Oops! Something went wrong. Please try again.";
        statusDiv.style.color = "red";
    }
} catch (error){
    statusDiv.textContent = "Network error. Please check your connection.";
    statusDiv.style.color = "red";

}





