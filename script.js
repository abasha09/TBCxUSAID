//onScroll navbar transparent functionlity

document.addEventListener("scroll", () => {
  const header = document.querySelector("nav");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// Carousel functionality

let slideIndex = 0;
let slideTimeout; // Variable to store the timeout ID

showSlides();

// Next and previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Dot controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment or decrement slideIndex, and handle wrap-around
  slideIndex = (slideIndex + slides.length) % slides.length;

  // Display the current slide and add "active" class to the corresponding dot
  slides[slideIndex].style.display = "block";

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  dots[slideIndex].className += " active";

  // Clear existing timeout and set a new one
  clearTimeout(slideTimeout);
  slideTimeout = setTimeout(function () {
    plusSlides(1); // Change image every 5 seconds
  }, 5000);
}

// Accordion Functionality

var acc = document.getElementsByClassName("accordion");
var i;
var openAccordion = null;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Close the previously opened accordion
    if (openAccordion && openAccordion !== this) {
      openAccordion.classList.remove("active-accordion");
      var openPanel = openAccordion.nextElementSibling;
      openPanel.style.maxHeight = null;
      openPanel.classList.remove("open-panel");
    }

    // Toggle the active class and adjust the max height
    this.classList.toggle("active-accordion");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.remove("open-panel");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.classList.add("open-panel");
    }

    // Update the currently open accordion
    openAccordion = this;
  });
}

// Mobile Sidebar Navigation Functionality
document
  .querySelector(".sidebar .toggle-btn")
  .addEventListener("click", function () {
    document.querySelector(".sidebar").classList.toggle("active");
  });
