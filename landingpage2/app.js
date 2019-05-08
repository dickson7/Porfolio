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
    if (scroll < 500){
        $('.scroll-top').css('display','none');
       // $("#scroll-top").css("diplay", "none");
    }
    if (scroll > 500){
        $('.scroll-top').css('display','block');
    }
});


const navSlide =() => {
    const burguer = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burguer.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //animate burger
        burguer.classList.toggle('toggle');
    });


}

navSlide();