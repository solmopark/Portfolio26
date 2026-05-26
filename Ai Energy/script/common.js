// On_off ClickEvent
$(function () {
    $(".btn, .btn01").click(function () {
        $(".btn, .btn01").removeClass("on");
        $(this).addClass("on");
    });
});

// MenuScript
const menuLinks = document.querySelectorAll('.menu li a');
const submenu = document.querySelector('.subwrap');

// 메뉴 항목에서 마우스가 올라갔을 때 서브 메뉴 활성화
menuLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        // 서브 메뉴가 활성화되지 않았으면 활성화
        if (!submenu.classList.contains('active')) {
            submenu.classList.add('active');
        }
    });
});

// 서브 메뉴 항목에서 마우스가 벗어날 때 서브 메뉴 닫기
submenu.addEventListener('mouseleave', () => {
    submenu.classList.remove('active');
});

// 메뉴 영역 외부 클릭 시 서브 메뉴 닫기
document.addEventListener('click', (event) => {
    const isMenuClicked = event.target.closest('#header'); 

    if (!isMenuClicked) {
        submenu.classList.remove('active');
    }
});


// tab-content -> active
function openTab(event, tabId) {
    var tabs = document.querySelectorAll('.tab', '.tabMenu .tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    event.currentTarget.classList.add('active');

    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(content) {
        content.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
}

// 파일 업로드 및 샘플 파일 다운로드
document.getElementById('save-btn').addEventListener('click', () => {
    alert('저장되었습니다!');
});

document.getElementById('download-btn').addEventListener('click', () => {
    // 샘플 파일 다운로드 (여기서는 임시로 alert로 대체)
    alert('샘플 파일을 다운로드합니다!');
});


// 페이지네이션
let currentPage = 1;
const totalPages = 10;

const currentPageElement = document.querySelector('.current-page');
const totalPagesElement = document.querySelector('.total-pages');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

function updatePagination() {
    currentPageElement.textContent = currentPage;
    totalPagesElement.textContent = totalPages;

    // 비활성화 처리
    leftArrow.disabled = currentPage === 1;
    rightArrow.disabled = currentPage === totalPages;
}

leftArrow.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
    }
});

updatePagination();

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

 // 파일 업로드 시 파일 이름을 표시하는 함수
 function showFileName() {
    const fileInput = document.getElementById('filename');
    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : '';
    document.getElementById('uploadName').value = fileName;
}

// 파일 다운로드 함수
function downloadFile() {
    // 다운로드할 파일의 URL (서버에 있는 파일 경로)
    const fileUrl = 'path/to/your/file.ext'; // 파일 경로를 실제 파일 경로로 수정하세요.
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileUrl.split('/').pop(); // 파일명으로 다운로드
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}