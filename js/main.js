setInterval(circleFn,3000);

//slide
const swiper = new Swiper('.box-slide', {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    /*autoplay: {
        delay: 4000,
    },*/
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
pinFn.from('.pin-wrap .box2', {autoAlpha: 0, duration: 1,}, "+=1")

ScrollTrigger.create({
    animation: pinFn,
    trigger: ".pin-wrap",
    start: "top top",
    scrub: true,
    pin: true, 
    anticipatePin: 1,
    onUpdate: (self) => {
        if (self.progress > 0.5) {
          document.querySelector('.pin-wrap .box2').classList.add('active');  // 50% 이상 스크롤되면 클래스 추가
        } else {
          document.querySelector('.pin-wrap .box2').classList.remove('active');  // 50% 미만일 때 클래스 제거
        }
    }
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