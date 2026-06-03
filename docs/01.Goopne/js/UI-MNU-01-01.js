// // .order-now 버튼을 클릭했을 때 팝업과 오버레이를 표시
// document.querySelector('.order-now').addEventListener('click', function () {
//   document.querySelector('.overlay').style.display = 'flex';
// });

// // .close-btn 버튼을 클릭했을 때 팝업과 오버레이를 숨김
// document.querySelector('.close-btn').addEventListener('click', function () {
//   document.querySelector('.overlay').style.display = 'none';
// });

// // 오버레이를 클릭했을 때 팝업과 오버레이를 숨김
// document.querySelector('.overlay').addEventListener('click', function (e) {
//   // 클릭된 곳이 팝업 내부가 아니면 숨기기
//   if (e.target === this) {
//       document.querySelector('.overlay').style.display = 'none';
//   }
// });

function showPopup(overlaySelector) {
  document.querySelector(overlaySelector).style.display = 'flex';
}

function closePopup(event) {
  if (event.target.classList.contains('overlay')) {
      event.target.style.display = 'none';
  }
}

document.querySelector('.order-now').addEventListener('click', function () {
  showPopup('.order-overlay');
});

document.querySelector('.origin-info-btn').addEventListener('click', function () {
  showPopup('.origin-overlay');
});

document.querySelector('.allergy-info-btn').addEventListener('click', function () {
  showPopup('.allergy-overlay');
});

document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', function () {
      this.closest('.overlay').style.display = 'none';
  });
});

document.querySelectorAll('.overlay').forEach(overlay => {
  overlay.addEventListener('click', closePopup);
});