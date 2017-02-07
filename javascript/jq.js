//configuation
var height = 520;
var animationSpeed = 1000;
var pause = 3000;
var currentSlide = 1;

//cach DOM
var $slider = $(".slider");
var $slideContainer = $slider.find(".slides");
var $slide = $slideContainer.find(".slide");
var $bullet = $slider.find(".bullet");

var interval;


$(document).ready( function() {
    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({"margin-top" : "-=" + height}, animationSpeed, function() {
                currentSlide++;
                if (currentSlide === $slide.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-top', 0);
                }
                $bullet
                    .removeClass("active")
                    .addClass("inactive");
                $bullet.eq(currentSlide - 1)
                    .removeClass("inactive")
                    .addClass("active");
            });
        }, pause);
    }
    function stopSlider() {
        clearInterval(interval);
    }
    $slideContainer
        .on("mouseenter", stopSlider)
        .on("mouseleave", startSlider);

    $(".bullet1").on("click", function(){
        $slideContainer.animate({"margin-top" : 0}, animationSpeed);
        currentSlide = 1;
        $bullet
            .removeClass("active")
            .addClass("inactive");
        $bullet.eq(currentSlide - 1)
            .removeClass("inactive")
            .addClass("active");
    });
    $(".bullet2").on("click", function(){
        $slideContainer.animate({"margin-top" : "-520px"}, animationSpeed);
        currentSlide = 2;
        $bullet
            .removeClass("active")
            .addClass("inactive");
        $bullet.eq(currentSlide - 1)
            .removeClass("inactive")
            .addClass("active");
    });
    $(".bullet3").on("click", function(){
        $slideContainer.animate({"margin-top" : "-1040px"}, animationSpeed);
        currentSlide = 3;
        $bullet
            .removeClass("active")
            .addClass("inactive");
        $bullet.eq(currentSlide - 1)
            .removeClass("inactive")
            .addClass("active");
    });

    startSlider();
})
