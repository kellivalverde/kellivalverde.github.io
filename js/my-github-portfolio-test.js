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