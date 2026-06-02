// Accordion menu
function AccordionMenu (){
    $(function () {
        $(".menu>li>a").click(function () {
            $(this).next(".submenu").slideToggle(200);
            $(this).parent(".menu li").siblings(".menu li").children(".submenu").slideUp(200);
        });
    });
    // menu On Event 
    $(function () {
        $(".menu li a").click(function () {
            $(".menu li a").removeClass("on");
            $(this).addClass("on");
        });
    });
    // mobile
    $(function () {
        $(".moble_Menu .menu>li>a").click(function () {
            $(this).next("div").slideToggle(200);
            $(this).parent("li").siblings("li").children("div").slideUp(200);
        });
    });
}AccordionMenu();

// subtitle active될때
// $(document).ready(function () {
//   $(".menu li div p").click(function () {
//     $(".menu li div p").removeClass("active");
//     $(this).addClass("active");
//   });
// });

// On_off ClickEvent
$(function () {
    $(".btn, .btn01").click(function () {
        $(".btn, .btn01").removeClass("on");
        $(this).addClass("on");
    });
});

// Mobile Menu
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    // document.getElementById("nav").classList.toggle("change");
    document.getElementById("noneMenu").classList.toggle("mobileMenu");
}

// checkBox--> checkEvent
function checkEvent__ () {
    document.querySelectorAll('.dotCheck').forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            document.querySelectorAll('.dotCheck').forEach(function(otherCheckbox) {
                const otherSecDate = otherCheckbox.closest('.secDate');
                
                otherSecDate.classList.remove('on');
            });

            if (this.checked) {
                const secDate = this.closest('.secDate');
                secDate.classList.add('on');
            }
        });
    });
}
checkEvent__ ();



// Check__clickEvent
$('.check_All').change(function () {
    if (this.checked) {
        $('.check_Item:not(:checked)').prop('checked', true);
    }
    else {
        $('.check_Item:checked').prop('checked', false);
    }
});

$('.check_Item').change(function () {
    let allChecked = $('.check_Item:not(:checked)').length == 0;
    $('.form-1__checkbox-all').prop('checked', allChecked);
});


// sec07 -> btn 클릭이벤트
// toggleOn 함수는 클릭된 버튼과 해당 섹션을 활성화하거나 비활성화합니다.
function toggleOn(button) {
    const parentDiv = button.closest('.sec07 .checkEvent');  // 버튼의 부모 요소인 .secDate를 찾습니다.
    const allSections = document.querySelectorAll('.sec07 .checkEvent');
    
    // 모든 섹션을 비활성화 상태로 되돌림
    allSections.forEach(section => {
        section.classList.remove('on');
        section.querySelector('.btn').classList.remove('on');
    });

    // 클릭된 버튼이 속한 섹션에 활성화 클래스 추가
    parentDiv.classList.add('on');
    button.classList.add('on');
}

// swiper
document.addEventListener("DOMContentLoaded", function() {
    let swiper = new Swiper(".serviceSwiper", {
        cssMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });
});

// input (,)설정
function onlyNumberWithComma(obj) {
    let number = obj.value;

//숫자가 아닌 값 모두 replace 해주기
number=number.replace(/[^0-9]/g,'');

//콤마 표시
number=Number(number).toLocaleString();

//다시 value 지정해주기
obj.value = number;
}

// 상세보기
function more__Content (){
    $(function () {
        $(".ChartList>li").click(function () {
            $(this).next("div").slideToggle(200);
            $(this).parent("li").siblings("li").children("div").slideUp(200);
        });
    });
    
    $(function () {
        $(".ChartList").click(function () {
            $(".ChartList").removeClass("on");
            $(this).addClass("on");
        });
    });
}more__Content ();

// 라인chart 01 
document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('lineChart_01').getContext('2d');  // 차트를 그릴 컨텍스트 가져오기

    const data = {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'], // x축 값
        datasets: [
            {
                label: '모멘텀 기반 AI모델',  // 첫 번째 데이터셋 이름
                data: [4, 1, 2, 2.5, 3, 3.5, 0, 1, 4, 6], // 첫 번째 값들
                borderColor: 'rgba(247, 174, 45, 1)', // 라인 색
                tension: 0.3,  // 라인 곡선 정도
                pointStyle: false,
                borderWidth: 1
            },
            {
                label: '가치 기반 AI모델',  // 두 번째 데이터셋 이름
                data: [3, 1, 3, 2, 1.5, 3, 3.5, 3, 1, 5], // 두 번째 값들
                borderColor: 'rgba(176, 183, 205, 1)', // 라인 색
                pointStyle: false,
                tension: 0.3,
                borderWidth: 1
            },
            {
                label: '머신러닝 기반 AI모델',  // 세 번째 데이터셋 이름
                data: [5, 3, 4, 1, 2, 1, 2, 0, 2, 3], // 세 번째 값들
                borderColor: 'rgba(111, 159, 215, 1)', // 라인 색
                pointStyle: false,
                tension: 0.3,
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 6,
                ticks: {
                    stepSize: 1  // y축 간격 설정
                }
            },
            x: {
                type: 'category',
                labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                grid: {
                    display: false,
                },
            }
        },
        plugins: {
            legend: {
                display: false, // x축 line
            }
        }
    };

    const lineChart_01 = new Chart(ctx, {
        type: 'line',  // 라인 차트
        data: data,    // 데이터
        options: options // 옵션
    });
});

// 버블chart 
document.addEventListener('DOMContentLoaded', function () {
    const ctx1 = document.getElementById('myBubbleChart').getContext('2d');

    const myBubbleChart = new Chart(ctx1, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Bubble Chart Example',
                data: [
                    { x: 7, y: 3, r: 8 },
                    { x: 15, y: -1, r: 8 },
                    { x: 14, y: 13, r: 8 },
                    { x: 16, y: 1, r: 20 },
                    { x: 5, y: 3, r: 20 },
                    { x: 8, y: 1, r: 8 },
                    { x: 9, y: -1, r: 8 },
                    { x: 0, y: 2, r: 12 } // MMF
                ],
                // 각각의 버블 색을 다르게 설정
                backgroundColor: [
                    '#FFF9AB',  // 제안 포트폴리오
                    '#E3F2FD',  // 국내주식
                    '#C8E7FD',  // 선진국 주식
                    '#B3C3DB',  // 신흥국주식
                    '#7588C7', // 국내채권
                    '#4F54C4',  // 선진국채권
                    '#0041AD',  // 신흥국채권
                    '#0554F2' // MMF
                ],
                // borderColor: [
                //     'rgba(255, 99, 132, 1)',    // 빨강
                //     'rgba(54, 162, 235, 1)',    // 파랑
                //     'rgba(255, 159, 64, 1)',    // 주황
                //     'rgba(75, 192, 192, 1)',    // 민트
                //     'rgba(153, 102, 255, 1)',   // 보라
                //     'rgba(255, 159, 64, 1)',    // 주황 (중복 사용)
                //     'rgba(255, 99, 132, 1)',    // 빨강 (중복 사용)
                //     'rgba(75, 192, 192, 1)'     // 민트 (중복 사용)
                // ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    min: -2,
                    max: 18,
                },
                y: {
                    min: -2,
                    max: 14,
                }
            },
            plugins: {
                legend: {
                    display: false, // x축 line
                }
            }
        }
    });
});

// 기대수익 chart
document.addEventListener('DOMContentLoaded', function () {
    // 그래프 데이터를 설정
    const labels = ['5.0', '5.0', '35.3', '34.7', '5.0', '5.0', '10.0'];
    const values = [5.0, 5.0, 35.3, 34.7, 5.0, 5.0, 10.0];
    const colors = [
        '#E3F2FD', // A
        '#C8E7FD', // B
        '#B3C3DB', // C
        '#7588C7', // D
        '#4F54C4',  // 선진국채권
        '#0041AD',  // 신흥국채권
        '#0554F2'  // G
    ];

    // Chart.js로 가로 막대 그래프 생성
    const ctx5 = document.getElementById('myChart2').getContext('2d');
    const myChart2 = new Chart(ctx5, {
        type: 'bar', // 막대 그래프
        data: {
            labels: labels, // x축 레이블
            datasets: [{
                label: '값',
                data: values, // y축 값
                backgroundColor: colors, // 막대 색상
                borderRadius: 10
            }]
        },
        options: {
            indexAxis: 'y', // 가로 방향으로 막대 표시
            responsive: true,
            plugins: {
                legend: {
                    display: false, // x축 line
                },
                datalabels: {
                    anchor: 'start',
                    align: 'start',
                    color: 'black',
                    font: {
                        weight: 'bold'
                    },
                    formatter: function (value) {
                        return value.toFixed(1); // 소수점 1자리까지 표시
                    }
                }
            },

            scales: {
                x: {
                    beginAtZero: true, // x축이 0부터 시작하도록 설정
                    grid: {
                        display: false // x축 그리드 라인 숨기기
                    },
                    ticks: {
                        display: false // x축 라벨 숨기기
                    },
                    border: {
                        display: false // x축의 축선 (라인) 숨기기
                    },
                    reverse: true
                },
                y: {
                    beginAtZero: true, // y축도 0부터 시작
                    grid: {
                        display: false // y축 그리드 라인 숨기기
                    },
                    border: {
                        display: false // y축의 축선 (라인) 숨기기
                    },
                    position: 'right' // y축을 오른쪽에 표시
                }
            },
            elements: {
                bar: {
                    borderWidth: 0, // 막대 테두리 제거
                }
            }
        }
    });

    const ctx4 = document.getElementById('myChart1').getContext('2d');
    const myChart1 = new Chart(ctx4, {
        type: 'bar', // 막대 그래프
        data: {
            labels: labels, // x축 레이블
            datasets: [{
                label: '값',
                data: values, // y축 값
                backgroundColor: colors, // 막대 색상
                borderRadius: 10
            }]
        },
        options: {
            indexAxis: 'y', // 가로 방향으로 막대 표시
            responsive: true,
            plugins: {
                legend: {
                    display: false, // x축 line
                },
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    color: 'black',
                    font: {
                        weight: 'bold'
                    },
                    formatter: function (value) {
                        return value.toFixed(1); // 소수점 1자리까지 표시
                    }
                }
            },

            scales: {
                x: {
                    beginAtZero: true, // x축이 0부터 시작하도록 설정
                    grid: {
                        display: false // x축 그리드 라인 숨기기
                    },
                    ticks: {
                        display: false // x축 라벨 숨기기
                    },
                    border: {
                        display: false // x축의 축선 (라인) 숨기기
                    },
                    
                },
                y: {
                    beginAtZero: true, // y축도 0부터 시작
                    grid: {
                        display: false // y축 그리드 라인 숨기기
                    },
                    border: {
                        display: false // y축의 축선 (라인) 숨기기
                    }
                }
            },
            elements: {
                bar: {
                    borderWidth: 0, // 막대 테두리 제거
                }
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const ctx3 = document.getElementById('lineChart_02').getContext('2d');  
    const DATA_COUNT = 6;
    const NUMBER_CFG = {count: DATA_COUNT, min: -20, max: 5};

    const data = {
        labels: ['2021.10.25', '2022.09.26', '2023.03.13', '2024.02.13', '2024.07.29'], // x축 값 (날짜)
        datasets: [
            {
                label: '제안 포트폴리오',  // 첫 번째 데이터셋 이름
                data: [0, -20, -5, -15, -20, -15, -12, -5, 5], // 첫 번째 값들: 0에서 시작하여 5로 끝남
                borderColor: 'rgba(176, 183, 205, 1)', // 라인 색
                pointStyle: false,
                tension: 0.3,
                borderWidth: 1
            },
            {
                label: '제안자산배분',  // 두 번째 데이터셋 이름
                data: [0, -18, -20, -14, -15, -20, -16, -10], // 두 번째 값들: 0에서 시작하여 -10으로 끝남
                borderColor: 'rgba(111, 159, 215, 1)', // 라인 색
                pointStyle: false,
                tension: 0.3,
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                min: -20,   // y축 최소값 설정
                max: 5,     // y축 최대값 설정
                ticks: {
                    stepSize: 5  // y축 간격 설정
                }
            },
            x: {
                type: 'category',
                labels: ['2021.10.25', '2022.09.26', '2023.03.13', '2024.02.13', '2024.07.29'], // x축 날짜 값
                grid: {
                    display: false,
                },
            }
        },
        plugins: {
            legend: {
                display: false, // 범례 표시 안 함
            }
        }
    };

    const lineChart_02 = new Chart(ctx3, {
        type: 'line',  // 라인 차트
        data: data,    // 데이터
        options: options // 옵션
    });
});

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


//popup_script
const popupButton = document.getElementById('popupButton');
// 팝업창
const popup = document.getElementById('popup');
// 닫기 버튼
const closeButton = document.getElementById('closeButton');

// 팝업 열기
popupButton.addEventListener('click', () => {
    popup.style.display = 'flex';
});

// 팝업 닫기
closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

// 팝업 바깥 부분 클릭 시 닫기
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
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