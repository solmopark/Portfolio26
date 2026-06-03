window.onscroll = function() {
  const topButton = document.getElementById("topButton");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      topButton.classList.add("visible");
  } else {
      topButton.classList.remove("visible");
  }
};

document.getElementById("topButton").onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};


  // Main Tab
  $('.maintab-wrap').each(function () {
    const mainTab = $(this).children('.maintab');
    const mainTabBtn = mainTab.children('li');
    const tabConBox = $(this).children('.tabcontents').children('.tabcon');

    // mainTab.addClass('activeTab')

    mainTabBtn.on('click focusin', function () {
      console.log($(this));

      //변수 할당
      let current = mainTabBtn.index($(this));

      //Tab Reset
      mainTabBtn.removeClass('active');
      tabConBox.removeClass('active');

      //Click Tab, Tab Con Active
      $(this).addClass('active');
      tabConBox.eq(current).addClass('active');
    });
  });


  //ticket_Box
  const prices = { adult: 19000, teen: 16000, child: 13000 };
  let quantities = { adult: 0, teen: 0, child: 0 };

  function updateQuantity(type, change) {
      if (quantities[type] + change >= 0) {
          quantities[type] += change;
          document.getElementById(`${type}-count`).innerText = quantities[type];
          updateTotalPrice();
          updateButtonState(type);
      }
  }

  function updateTotalPrice() {
      let total = (quantities.adult * prices.adult) + (quantities.teen * prices.teen) + (quantities.child * prices.child);
      document.getElementById("total-price").innerText = total.toLocaleString();
  }

// btn -> on/off
// const purchaseButton = document.getElementById('purchaseButton');

//   purchaseButton.addEventListener('click', function(event) {
//       event.preventDefault(); // 기본 링크 동작 방지
//       purchaseButton.classList.toggle('active'); 
//       console.log('구매하기 버튼이 클릭되었습니다.');
//   });
let clickCount = 0;

document.getElementById('Btn').addEventListener('click', function(event) {
    event.preventDefault(); // 링크 기본 동작 방지
    clickCount++;

    if (clickCount === 1) {
        this.classList.add('active'); // 첫 번째 클릭 시 활성화
    } else if (clickCount === 2) {
        this.classList.remove('active'); // 두 번째 클릭 시 비활성화
        clickCount = 0; // 클릭 카운트 초기화
    }
});



