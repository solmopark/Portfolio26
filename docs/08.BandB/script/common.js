//====aos
AOS.init({
  //duration: 1000,
  easing: "linear",
  //once: true
});

document.addEventListener("DOMContentLoaded", function () {
  // box3, box2, box1 애니메이션
  setTimeout(() => {
    document.querySelector(".box3").style.transform = "translateY(-100%)";
    document.querySelector(".box3").style.opacity = "1"; // opacity 1로 설정
    document.querySelector(".box2").style.transform = "translateY(-100%)";
    document.querySelector(".box2").style.opacity = "1"; // opacity 1로 설정
  }, 1000); // 1초 뒤

  setTimeout(() => {
    document.querySelector(".box3").style.transform = "translateY(0%)";
    document.querySelector(".box3").style.opacity = "1"; // opacity 1로 설정
    document.querySelector(".box2").style.transform = "translateY(0%)";
    document.querySelector(".box2").style.opacity = "1"; // opacity 1로 설정
    document.querySelector(".box1").style.transform = "translateY(0%)";
    document.querySelector(".box1").style.opacity = "1"; // opacity 1로 설정
  }, 2000); // 2초 뒤

  // sec1con show
  const sec1cons = document.querySelectorAll(".sec1con");
  sec1cons.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 1000);
  });

  // 타이핑
  new TypeIt("#showtext", {
    strings: ["김앤빛님의 <b>달라진 시력</b>을", "<u>지금 확인해 보세요!</u>"],
    speed: 100,
    waitUntilVisible: true,
    afterComplete: function () {
      setTimeout(() => {
        document.querySelector("u").classList.add("show-u-before");
      }, 500);
    }
  }).go();

  // 탭
  const tabButtons = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab");

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      button.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });
});



// ====카운트 다운
// 초기 설정: 일 02:00시 기준
const targetTime = new Date();
targetTime.setHours(2, 0, 0, 0); // 오늘 02:00:00.000으로 설정

// 카운트다운 시작
function updateCountdown() {
  const now = new Date();
  let timeLeft = targetTime - now; // 남은 시간 (밀리초 단위)

  // 만약 타이머가 0을 초과하면, 24시간을 다시 세팅하여 카운트다운 시작
  if (timeLeft < 0) {
    targetTime.setDate(targetTime.getDate() + 1); // 하루를 더해서 24시간으로 재설정
    timeLeft = targetTime - now;
  }

  // 밀리초를 시, 분, 초로 변환
  const hours = Math.floor(timeLeft / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // HTML 요소에 표시
  document.getElementById("countdown").innerHTML = `${String(hours).padStart(
    2,
    "0"
  )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// 1초마다 업데이트
setInterval(updateCountdown, 1000);

// 최초 실행
updateCountdown();
