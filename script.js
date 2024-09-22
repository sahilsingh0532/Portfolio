// Variables for menu and navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

// Toggle class on click for menu icon and navbar
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

// Scroll to top button (missing definition of mybutton)
const mybutton = document.getElementById('myBtn'); // Assuming you have an element with id 'myBtn'

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block"; // Shows the button when scrolling down
  } else {
    mybutton.style.display = "none"; // Hides the button when at the top
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Functions to open/close form (assuming you have an element with id 'myForm')
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Scroll reveal effect on 'about' section (assuming section with id 'about')
document.addEventListener('DOMContentLoaded', function () {
  const section = document.getElementById('about');
  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 
  };

  const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target); // Stops observing once in view
          }
      });
  }, options);

  if (section) {
    observer.observe(section); // Only observe if section exists
  }
});

// Slider functionality for moving cards
const slider = document.querySelector('.slider');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

let scrollPosition = 0;

// Move cards left
leftBtn.addEventListener('click', () => {
  if (scrollPosition > 0) {
    scrollPosition -= 300; 
    slider.style.transform = `translateX(-${scrollPosition}px)`;
  }
});

// Move cards right
rightBtn.addEventListener('click', () => {
  if (scrollPosition < slider.scrollWidth - slider.clientWidth) {
    scrollPosition += 300; 
    slider.style.transform = `translateX(-${scrollPosition}px)`;
  }
});
