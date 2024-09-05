const tablinks = document.querySelectorAll(".tab-link");
const tabcontents = document.querySelectorAll(".tab-content");


function ontab(tabname) {

    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


// Menu

const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

// Submit Button


const form = document.getElementById("myForm");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting and reloading the page

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    messageDiv.textContent = "Thank you for your response!";
    messageDiv.style.display = "block";
    messageDiv.style.textAlign = "center";

    if (name.trim() !== "" && email.trim() !== "") {
        setTimeout(() => {
            messageDiv.style.display = "none";
        }, 5000);
    }
});

