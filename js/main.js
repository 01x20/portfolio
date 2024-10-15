setInterval(circleFn,3000);

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


/*
//pin
const horizontal = document.querySelector('.list-wrap'); 
const sections = gsap.utils.toArray(".list-wrap .list");

gsap.to(sections, {
    xPercent: -100 * (sections.length -1),
    ease: "none",
    scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        end: () => "+=" + (horizontal.offsetWidth - innerWidth),
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
    }
});*/

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


/*
//pin type1
const pinType1 = gsap.timeline();
pinType1.to(".pin-wrap1 .box1", {xPercent: 3000, duration: 3}, "text")
        .to(".pin-wrap1 .box2", {xPercent: -3000, duration: 3}, "text")
        .to(".pin-wrap1 .box3", {xPercent: 3000, duration: 3}, "text")

ScrollTrigger.create({
    animation: pinType1,
    trigger: ".pin-wrap1",
    start: "top top",
    scrub: true,
    pin: true, 
    anticipatePin: 1,
    pinSpacing: false,
    markers: true,
});
*/