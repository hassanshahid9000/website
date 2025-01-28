// Get elements
const input = document.getElementById('fname');
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');

// Decrease counter
decreaseButton.addEventListener('click', () => {
    let value = parseInt(input.value);
    if (!isNaN(value) && value > 1) {   
        input.value = value - 1;
    }
});

// Increase counter
increaseButton.addEventListener('click', () => {
    let value = parseInt(input.value);
    if (!isNaN(value)) {
        input.value = value + 1;
    }
});

// Function to validate input (only numbers allowed)
function validateInput() {
    let value = input.value;
    if (isNaN(value) || value <= 0) {
        input.value = 1; // Reset to 1 if invalid input
    }
}
$(document).ready(function() {
    // Initialize first carousel (with id carousel-one)
    var one = $("#carousel-one");
    one.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});$(document).ready(function(){
    $("#men-carousel").owlCarousel({
      items: 3, // You can change the number of items shown
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true
    });
    $("#woemn-carousel").owlCarousel({
        items: 3, // You can change the number of items shown
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
      });
      $("#kids-carousel").owlCarousel({
        items: 3, // You can change the number of items shown
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
      });
  });
  