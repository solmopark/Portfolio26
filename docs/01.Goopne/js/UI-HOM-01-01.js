// 헤더
fetch('../components/header/header.html')
  .then((response) => response.text())
  .then((data) => {
    document.getElementById('header-container').innerHTML = data;
  });

// 푸터
fetch('../components/footer/footer.html')
  .then((response) => response.text())
  .then((data) => {
    document.getElementById('footer-container').innerHTML = data;
  });

//   배너 스크롤
function scrollToContent() {
  document.querySelector('.content-container').scrollIntoView({ behavior: 'smooth' });
}
