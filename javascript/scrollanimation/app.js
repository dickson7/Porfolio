const flightPath = {
    curviness: 2.5,
    autoRotate:true,
    values: [
        {x: 100, y: 20}, 
        {x: 300, y: 10},
        {x: 500, y:-100},
        {x: 350, y:-50},
        {x: 600, y: 100},
        {x: 800, y: 50},
        {x: 850, y: 0},
        {x: window.innerWidth, y:-250}
    ]
};

const flightPath2 = {
    curviness: 2.5,
    autoRotate:false,
    values: [
        {x: -100, y: 20}, 
        {x: -300, y: 10},
        {x: -400, y: 0},
        {x: -500, y:10},
        {x: -600, y: 20},
        {x: -800, y: 10},
        {x: -1800, y: 0},
        {x: window.innerWidth, y:10}
    ]
};

const tween = new TimelineLite();
const tween2 = new TimelineLite();

tween.add(
    TweenLite.to(".paper-plane", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

tween2.add(
    TweenLite.to(".nube-plane", 2, {
        bezier: flightPath2,
        ease: Power1.easeInOut
    })
);


const controller = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 1000,
    triggerHook: 0
})
.setTween(tween)
//.addIndicators()
.setPin(".animation")
.addTo(controller);
