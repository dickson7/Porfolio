// function parallax(element, distance, speed){
//     const item = document.querySelector(element);
//     item.style.transform = `translateY(${distance * speed}px)`;
// }

// window.addEventListener("scroll", function(){
//     parallax(".parallax", ".trivial", 1);
//     parallax(".img-trivial", window.scrollY, 0.4);
// });


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".header-area").addClass("scroll-header");
    }
    if (scroll < 150) {
        $(".header-area").removeClass("scroll-header");
    }
});
