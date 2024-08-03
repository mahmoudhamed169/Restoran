$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3, // Set the number of items to show per slide
        loop: true, // Enable loop mode
        margin: 10, // Adjust margin as needed
        center: true, // Center the active item
        autoplay: true, // Enable autoplay
        autoplayTimeout: 5000, // Autoplay interval in milliseconds
        autoplayHoverPause: true, // Pause autoplay when hovering over carousel
        animateOut: 'fadeOut', // Set the animation for outgoing slides
        animateIn: 'fadeIn', // Set the animation for incoming slides
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1 ,// Number of items to show on smaller screens
                nav:true,
                smartSpeed: 1000
            },
            768:{
                items:3 // Number of items to show on larger screens
            }
        },
        onTranslated: function(event) {
            $(".owl-item").removeClass("middle-item"); // Remove previous middle item class
            $(".owl-item.active").eq(1).addClass("middle-item"); // Add middle item class to current middle item
        }
    });
    
});
