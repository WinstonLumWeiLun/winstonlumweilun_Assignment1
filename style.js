$(document).ready(function(){

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["A STUDENT OF NGEE ANN POLYTECHNIC"],
        typeSpeed: 90,
        backSpeed: 90,
        loop: true
    });

 



    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplaySpeed: 6000,
        autoplayHoverPause: true,
        
    });
});