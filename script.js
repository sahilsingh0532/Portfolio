const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
  const section = document.getElementById('about');
  const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger the callback when 10% of the element is in view
  };

  const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  }, options);

  observer.observe(section);
});

const slider = document.querySelector('.slider');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

// Initial scroll position
let scrollPosition = 0;

// Move cards left
leftBtn.addEventListener('click', () => {
  if (scrollPosition > 0) {
    scrollPosition -= 300; // width of one card
    slider.style.transform = `translateX(-${scrollPosition}px)`;
  }
});

// Move cards right
rightBtn.addEventListener('click', () => {
  if (scrollPosition < slider.scrollWidth - slider.clientWidth) {
    scrollPosition += 300; // width of one card
    slider.style.transform = `translateX(-${scrollPosition}px)`;
  }
});
