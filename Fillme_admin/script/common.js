// Topmenu_Bar
function TopMenu__Bar(){
  $(function () {
    $(".menu > li > a.cate").click(function (e) {
        e.preventDefault();  
        const submenu = $(this).next(".subMenu");
        const isActive = submenu.hasClass("active");
  
        $(".menu > li > a.cate").removeClass("active");
        $(".subMenu").removeClass("active").slideUp(200);
  
        if (!isActive) {
            $(this).addClass("active");
            submenu.addClass("active").slideDown(200); 
        }
    });
  
    // 닫기 버튼 클릭 시 서브메뉴 닫기
    $(".menuArea").on("click", ".close-submenu", function (e) {
        e.preventDefault();
        $(this).closest(".subMenu").removeClass("active").slideUp(200); 
        $(this).closest(".menu").find(".cate").removeClass("active"); 
    });
  
    $(".menuArea").on("click", ".subMenu-3 > li > a", function (e) {
        e.preventDefault(); 
        const submenu = $(this).closest(".subMenu"); 
        const titleElement = submenu.find(".sub p.title"); 

        submenu.find(".sub p.title").removeClass("active");

        titleElement.addClass("active");
  
        submenu.find(".subMenu-3 > li > a").removeClass("active");
        $(this).addClass("active");
    });
  });  
}
TopMenu__Bar();

// Check__clickEvent
$('.check_All').change(function() {
  if ( this.checked ) {
    $('.check_Item:not(:checked)').prop('checked', true);
  }
  else {
    $('.check_Item:checked').prop('checked', false);
  }
});

$('.check_Item').change(function() {
  let allChecked = $('.check_Item:not(:checked)').length == 0;
  $('.form-1__checkbox-all').prop('checked', allChecked);
});

// On_off ClickEvent
$(function () {
  $(".btn").click(function () {
    $(".btn").removeClass("on");
    $(this).addClass("on");
  });
});

$(function () {
  $(".bookMark i").click(function () {
    $(".bookMark i").removeClass("on");
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

// userProfile
function User__Profile (){
    document.getElementById('profileImage').addEventListener('click', function() {
      document.getElementById('fileInput').click();
  });

  document.getElementById('fileInput').addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
              const imagePreview = document.getElementById('imagePreview');
              imagePreview.src = e.target.result;
              imagePreview.classList.add('show'); // 이미지가 업로드되면 클래스 추가
              document.getElementById('uploadText').style.display = 'none'; // 텍스트 숨기기
          };
          reader.readAsDataURL(file);
      }
  });
}
User__Profile();

// input (,)설정
function onlyNumberWithComma(obj) {
  var number = obj.value;

  //숫자가 아닌 값 모두 replace 해주기
  number=number.replace(/[^0-9]/g,'');

  //콤마 표시
  number=Number(number).toLocaleString();
  
  //다시 value 지정해주기
  obj.value = number;
}


// file_UpLoad
$(document).ready(function(){
  $('.file-upload .upload-hidden').on('change', function(){
      // 파일이 선택된 경우
      if (this.files && this.files.length > 0) {
          var filename = this.files[0].name;
          $(this).siblings('.upload-name').val(filename);
      } else {
          // 파일이 선택되지 않은 경우 (필요시)
          $(this).siblings('.upload-name').val(''); // 기본값으로 비우기
      }
  });
});


