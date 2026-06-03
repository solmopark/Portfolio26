
// tabStyle
$(document).ready(function () { 
  $(".maintab-Wrap").each(function () {
    const mainTab = $(this).children('.maintab');
    const mainTabBtn = mainTab.children('li');
    const tabConBox = $(this).children('.tabcontents').children('.tabcon');

    mainTabBtn.on('click focusin', function () {
      // 클릭된 탭 인덱스 찾기
      let current = mainTabBtn.index($(this));

      // 모든 탭 리셋
      mainTabBtn.removeClass('active');
      tabConBox.removeClass('active');

      // 클릭된 탭과 컨텐츠 활성화
      $(this).addClass('active');
      tabConBox.eq(current).addClass('active');
    });
  });
});

// swiperStyle
var swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  slidesPerView: 'auto', // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 30,
  loop: true, // 무한 반복
  autoplay: {
    delay: 2000, // 2초마다 자동 슬라이드
    disableOnInteraction: false
  }
  // breakpoints: {
  //   640: { slidesPerView: 1 },
  //   768: { slidesPerView: 2 },
  //   1024: { slidesPerView: 3 }
  // }
});
