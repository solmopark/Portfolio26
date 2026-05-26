// Accordion menu

function AccordionMenu (){
  $(function () {
    $(".menu>li>a").click(function () {
      $(this).next("div").slideToggle(200);
      $(this).parent("li").siblings("li").children("div").slideUp(200);
    });
  });
  
  $(function () {
    $(".menu li a").click(function () {
      $(".menu li a").removeClass("on");
      $(this).addClass("on");
    });
  });
  
}
AccordionMenu();
  // subtitle active될때
  $(document).ready(function () {
    $(".menu li div p").click(function () {
      $(".menu li div p").removeClass("active");
      $(this).addClass("active");
    });
  });

// 체크 박스 
$('.form-1__checkbox-all').change(function() {
  if ( this.checked ) {
    $('.form-1__checkbox-item:not(:checked)').prop('checked', true);
  }
  else {
    $('.form-1__checkbox-item:checked').prop('checked', false);
  }
});

$('.form-1__checkbox-item').change(function() {
  let allChecked = $('.form-1__checkbox-item:not(:checked)').length == 0;
  $('.form-1__checkbox-all').prop('checked', allChecked);
});

// Mobile Menu
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

// user_setting
$(function () {
  $(".user").click(function (e) {
    e.stopPropagation();
    $(".user_setting").fadeToggle(); // Use fadeToggle() instead of fadeIn()
  });

  $(".user_setting, .userbox").click(function (e) {
    e.stopPropagation();
  });

  $(".user_item").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).find("*").addClass("read");
  });

  $(document).click(function () {
    $(".user_setting").fadeOut();
  });
});
//user_setting on
$(function () {
  $(".user_setting .userbox li .user_item").click(function () {
    $(".user_setting .userbox li .user_item").removeClass("on");
    $(this).addClass("on");
  });
});

// button_on
$(function () {
  $(".btn").click(function () {
    $(".btn").removeClass("on");
    $(this).addClass("on");
  });
});

$(function () {
  $(".filterName li ").click(function () {
    $(".filterName li").removeClass("on");
    $(this).addClass("on");
  });
});

// filterList
function Filter__List (){
  const table_filterList = document.querySelectorAll(".filter__name");

  for (let i = 0; i < table_filterList.length; i++) {
      table_filterList[i].addEventListener("click", () => {
      table_filterList[i].classList.toggle("active");
  });

      table_filterList[i].addEventListener("keyup", (e) => {
          if (e.keyCode === 13) {
              table_filterList[i].classList.toggle("active");
          }
      });
  }
}
Filter__List ();

// click-> menuplus
function Menuplus (){
  // DOMContentLoaded 이벤트를 사용하여 DOM이 로드된 후에 JavaScript 코드 실행
  document.addEventListener("DOMContentLoaded", function() {
      // 삭제 버튼(i 태그)에 클릭 이벤트를 추가하여 input__flex 클래스가 삭제되도록 처리
      let deleteButtons = document.getElementsByName("del");
      deleteButtons.forEach(function(button) {
          button.addEventListener("click", function() {
              let inputFlex = this.closest(".input__flex");
              inputFlex.remove();
              checkInputFlex();
          });
      });

      // 추가 버튼에 클릭 이벤트를 추가하여 input__flex 클래스를 추가하는 기능 구현
      let addButton = document.getElementById("addMenu");
      addButton.addEventListener("click", function() {
          let inputMenu = document.querySelector(".input_menu");
          let newInputFlex = document.createElement("div");
          newInputFlex.classList.add("input__flex", "mb10");
          newInputFlex.innerHTML = `
              <div class="flex_02">
                  <input type="checkbox" name="" class="form-1__checkbox-all">
                  <span class="ml5"> 대표메뉴</span>
              </div>
              <div class="input_box02">
                  <input type="text" name="menuName" class="menuName d_gray" placeholder="메뉴명">
                  <input type="text" name="menuPrice" class="menuPrice ml10 d_gray" placeholder="가격">
              </div>
              <div class="flex_02 mr10">
                <input type="checkbox" name="" class="form-1__checkbox-item">
                <span>수동</span>
              </div>
              <i class="fa-solid fa-minus cs_p" name="del"></i>
          `;
          inputMenu.insertBefore(newInputFlex, inputMenu.lastElementChild);
          
          // 새로 추가된 삭제 버튼에 클릭 이벤트를 추가하여 input__flex 클래스가 삭제되도록 처리
          let newDeleteButton = newInputFlex.querySelector("i[name='del']");
          newDeleteButton.addEventListener("click", function() {
              newInputFlex.remove();
              checkInputFlex();
          });

          checkInputFlex();
      });

      // 입력 요소가 모두 삭제되었을 때 butArea의 margin-left 값을 0으로 변경하는 함수
      function checkInputFlex() {
          let inputFlexes = document.querySelectorAll(".userInput .input__flex");
          let butArea = document.querySelector(".userInput .butArea");
          if (inputFlexes.length === 0) {
              butArea.style.marginLeft = "0";
          } else {
              butArea.style.marginLeft = "10.4rem"; // 기본값
          }
      }

      // 페이지 로드 시 한 번 실행하여 초기 상태를 체크
      checkInputFlex();
  });
}
Menuplus();

// map_searchPopup
function Modal_add (){
    // 주소검색 버튼 클릭 시 모달 열기
    document.getElementById('addressSearchBtn').addEventListener('click', function() {
      var modal = document.getElementById('myModal');
      modal.style.display = 'block';
    });
    
    // 모달에서 닫기 버튼 클릭 시 모달 닫기
    document.getElementsByClassName('close')[0].addEventListener('click', function() {
      var modal = document.getElementById('myModal');
      modal.style.display = 'none';
    });
    
    // 검색 버튼 클릭 시 주소 검색 기능 추가 (예시로 alert 창 표시)
    document.getElementById('searchButton').addEventListener('click', function() {
      var address = document.getElementById('addressInput').value;
      alert('주소 검색 기능 추가: ' + address); // 여기에 실제 주소 검색 기능을 추가할 수 있습니다.
    });
}
Modal_add();

