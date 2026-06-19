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
    ", your enquiry has been received. We will contact you soon."; // Display success message if all fields are filled

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


     
        const accordions = document.querySelectorAll(".accordion");

        accordions.forEach(item => {
            item.addEventListener("click", () => {


            const panel = item.nextElementSibling;
            
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } 
            else {
                panel.style.display = "block";
            }
        });

    });

    function openLightbox(src){

        document.getElementById("lightbox").style.display = "block";

        document.getElementById("lightbox-image").src = src;
    }

    function closeLightbox(){
        document.getElementById("lightbox").style.display = "none";
    }


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
        
