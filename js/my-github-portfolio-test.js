// ******  NAV BAR  ******
function myNavBarFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// ******  IMAGE CAROUSEL  ******
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = " block";
    dots[slideIndex - 1].className += " active";

    console.log("Dots update: " + dots[slideIndex - 1].className);
    console.log("Dots number: " + slideIndex);

}
// ******   MODAL BIO BUTTON  ******
var confirmButton = document.getElementById('confirm');
confirmButton.onclick = function() {
    var userResponse = confirm('My Full Tech Stack: Java • Spring • Hibernate • JPA • JavaScript • MVC • HTML • CSS • Flexbox • Grid • TDD • Agile (Scrum), Object Oriented Programming (OOP) • AJAX • JSON • Restful APIs • Responsive Design / Mobile • Relational Databases • Source Control / Git • Trello / Kanban • Adobe XD • Adobe Photoshop • Adobe Illustrator');
    var displayContainer = document.getElementById('confirmResponse');
    var displayMessage = '';
    if (userResponse) {
        displayMessage += ';)'
    } else {
        displayMessage += ''
    }
    displayContainer.innerText = displayMessage;
    // if "true," user clickerd "Ok." If "false, user clicked "Cancel"
    console.log(userResponse); 
}


// ******   COLLAPSIBLE DECRIPTION BUTTONS  ******
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var description = this.nextElementSibling;
        if (description.style.display === "block") {
            description.style.display = "none";
            console.log("Changed text to hidden!");
        } else {
            description.style.display = "block";
            console.log("Changed text to visible");
        }
    });
}