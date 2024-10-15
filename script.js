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


// 1 Section Text
const textElement = document.getElementById('dynamic-text');
const textArray = ['Web Developer', 'Data Analyst', 'SQL/NoSQL Developer', 'Software Engineer'];
let textIndex = 0;

function changeText() {
    // Scroll the current text out
    textElement.classList.remove('scroll');
    textElement.classList.add('scroll-out');

    setTimeout(() => {
        // Change the text after the scroll-out animation completes
        textIndex = (textIndex + 1) % textArray.length;
        textElement.textContent = textArray[textIndex];

        // Scroll the new text in
        textElement.classList.remove('scroll-out');
        textElement.classList.add('scroll');
    }, 500); // Duration of the scroll-out animation
}

setInterval(changeText, 2000); // Change text every 2 seconds





// Submit Button


const form = document.getElementById("myForm");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting and reloading the page

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const feedbackInput = document.querySelector("#feedback");

    const name = nameInput.value;
    const email = emailInput.value;
    const feedback = feedbackInput.value;

    messageDiv.textContent = "Thank you for your response!";
    messageDiv.style.display = "block";
    messageDiv.style.textAlign = "center";

    if (name.trim() !== "" && email.trim() !== "") {
        setTimeout(() => {
            messageDiv.style.display = "none";
            nameInput.value = "";
            emailInput.value = "";
            feedbackInput.value = "";
        }, 5000);
    }
});



// about title effect

window.addEventListener('scroll', () => {
    const title = document.querySelector('.about-title');
    const titlePosition = title.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5; // Adjust as necessary

    if (titlePosition < screenPosition) {
        title.classList.add('visible');
    }
});

// services title effect

window.addEventListener('scroll', () => {
    const myTitle = document.querySelector('.my-title');
    const servicesWord = document.querySelector('.services-word');
    const titlePosition = myTitle.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5; // Adjust as necessary

    if (titlePosition < screenPosition) {
        myTitle.classList.add('visible'); // Show "My"
        servicesWord.classList.add('visible'); // Show "Services"
    }
});

// work title effect

window.addEventListener('scroll', () => {
    const title = document.querySelector('.work-title');
    const titlePosition = title.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5; // Adjust as necessary

    if (titlePosition < screenPosition) {
        title.classList.add('visible');
    }
});


