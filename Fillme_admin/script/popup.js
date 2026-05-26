// popup_Basic
document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open');
    const closeBtn = document.getElementById('close');
    const popWrapper = document.getElementById('PopWrapper');
    const body = document.body;

    // 팝업 열기
    openBtn.addEventListener('click', function() {
        popWrapper.style.display = 'flex'; // 팝업 보이기
        body.classList.add('no-scroll'); // 스크롤 비활성화
    });

    // 팝업 닫기
    closeBtn.addEventListener('click', function() {
        popWrapper.style.display = 'none'; // 팝업 숨기기
        body.classList.remove('no-scroll'); // 스크롤 활성화
    });
});

// popupSwiper
// const swiper = new Swiper('.popswiper', {
//     effect: 'coverflow',
//     grabCursor: true,
//     slidesPerView: 3, 
//     centeredSlides: true, 
//     loop: true, 
//     initialSlide: 0,
//     coverflowEffect: {
//         rotate: 0,
//         stretch: 0,
//         depth: 100,
//         modifier: 3,
//     },
//     mousewheel: {
//         thresholdDelta: 70
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     on: {
//         slideChangeTransitionStart: function () {
//             const slides = this.slides;
//             slides.forEach((slide) => {
//                 slide.style.transform = 'scale(0.8)'; 
//             });
//             const activeSlide = slides[this.activeIndex];
//             activeSlide.style.transform = 'scale(1.4)'; 

//             if (this.activeIndex === 0) {
//                 slides.forEach((slide, index) => {
//                     slide.style.transform = (index === 0) ? 'scale(1)' : 'scale(0.9)';
//                 });
//             }
//         },
//     },
// });

const swiper= new Swiper('.popswiper', {
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: '3',
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        thresholdDelta: 70
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

// popup_SelectDate 
const select = document.getElementById('dateSelect');
const display = document.getElementById('selectedDate');

select.addEventListener('change', () => {
    display.textContent = select.value + '.updated';
});

//popup_Print
printButton.addEventListener('click', () => {
    window.print();
});


// dayInput
function dayInput (){
    document.getElementById('currentDate').value = new Date().toISOString().substring(0, 10);
}
dayInput ();

