setInterval(circleFn,3000);

//slide
const careerSlide = new Swiper('.career-slide', {
    effect: "cards",
    grabCursor: true,
    loopAdditionalSlides : 1,
    observer: true,
    observeParents: true,
});

const boxSlide = new Swiper('.box-slide', {
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
    },
    speed: 1000,
    loopAdditionalSlides : 1,
    observer: true,
    observeParents: true,
});

//circle funtion
let i=1;
function circleFn () {
    const rotateTarget = $('.js-rotate');
    const reverseRotate = $('.reverse');
    let newRotate = 120 * i;

    rotateTarget.css("transform" , "rotate("+newRotate+"deg)");
    reverseRotate.css("transform", "rotate(-"+newRotate+"deg)");

    i++;
}

//pin
const pinFn = gsap.timeline();
pinFn.from('.pin-wrap .box2', {autoAlpha: 0, duration: 0.3,}, "+=0.3")
     .from('.pin-wrap .box3', {autoAlpha: 0, duration: 0.3,}, "+=0.3")
     .from('.pin-wrap .box4', {autoAlpha: 0, duration: 0.3,}, "+=0.3")

ScrollTrigger.create({
    animation: pinFn,
    trigger: ".pin-wrap",
    start: "top top",
    scrub: true,
    pin: true, 
    anticipatePin: 1,
    invalidateOnRefresh: true,
});

//footer
const showNav = gsap.from(".footer", {
    yPercent: 200,
    paused: true,
    duration: 0.2
}).progress(1);

ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
        self.direction === -1 ? showNav.play() : showNav.reverse();
    }
});

let varInterval;
$(window).blur(function() {
    clearInterval(varInterval);
});
$(window).focus(function() {
    clearInterval(varInterval);
    varInterval = setInterval(circleFn, 3000);
});