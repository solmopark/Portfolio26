function mainChart_1 (){
    const canvas = document.getElementById('lineChart');
    const ctx = canvas.getContext('2d');

    // 차트 데이터 (0-5 범위)
    const data = [1, 2, 1.5, 2.5, 3, 3.5, 5];

    // 축 그리기
    ctx.beginPath();
    ctx.moveTo(5, 35); // Y축 시작점
    ctx.lineTo(5, 5); // Y축 끝점
    ctx.moveTo(5, 35); // X축 시작점
    ctx.lineTo(35, 35); // X축 끝점
    ctx.strokeStyle = '#999999';
    ctx.stroke();

    // 차트 그리기
    ctx.beginPath();
    ctx.moveTo(5, 35 - (data[0] * 5)); // 첫 번째 점으로 이동

    data.forEach((value, index) => {
        ctx.lineTo(5 + index * 5, 35 - (value * 5)); // 각 점을 이어서 그리기
    });

    ctx.strokeStyle = '#999';
    ctx.stroke();
}mainChart_1();

function mainChart_2 (){
    const canvas = document.getElementById('lineChart2');
    const ctx = canvas.getContext('2d');

    // 차트 데이터 (0-5 범위)
    const data = [1, 2, 1.5, 2, 3, 3.5, 3];

    // 축 그리기
    ctx.beginPath();
    ctx.moveTo(5, 35); // Y축 시작점
    ctx.lineTo(5, 5); // Y축 끝점
    ctx.moveTo(5, 35); // X축 시작점
    ctx.lineTo(35, 35); // X축 끝점
    ctx.strokeStyle = '#999999';
    ctx.stroke();

    // 차트 그리기
    ctx.beginPath();
    ctx.moveTo(5, 35 - (data[0] * 5)); // 첫 번째 점으로 이동

    data.forEach((value, index) => {
        ctx.lineTo(5 + index * 5, 35 - (value * 5)); // 각 점을 이어서 그리기
    });

    ctx.strokeStyle = '#999';
    ctx.stroke();
}mainChart_2();

function mainChart_3 (){
    const canvas = document.getElementById('lineChart3');
    const ctx = canvas.getContext('2d');

    // 차트 데이터 (0-5 범위)
    const data = [1, 1, 1.5, 1.5, 2, 2, 3];

    // 축 그리기
    ctx.beginPath();
    ctx.moveTo(5, 35); // Y축 시작점
    ctx.lineTo(5, 5); // Y축 끝점
    ctx.moveTo(5, 35); // X축 시작점
    ctx.lineTo(35, 35); // X축 끝점
    ctx.strokeStyle = '#999999';
    ctx.stroke();

    // 차트 그리기
    ctx.beginPath();
    ctx.moveTo(5, 35 - (data[0] * 5)); // 첫 번째 점으로 이동

    data.forEach((value, index) => {
        ctx.lineTo(5 + index * 5, 35 - (value * 5)); // 각 점을 이어서 그리기
    });

    ctx.strokeStyle = '#999';
    ctx.stroke();
}mainChart_3();

function Line__chart01 (){
    // 차트를 그릴 컨텍스트 가져오기
    var ctx = document.getElementById('lineChart01').getContext('2d');

    // 차트 데이터
    var data = {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'], // x축 값
        datasets: [
            {
                label: 'Value 1',  // 첫 번째 데이터셋 이름
                data: [4, 1, 2, 2.5, 3, 3.5, 0, 1, 4, 6], // 첫 번째 값들
                borderColor: 'rgba(247, 174, 45, 1)', // 라인 색
                tension: 0.3,  // 라인 곡선 정도
                pointStyle:false,
                borderWidth:1
            },
            {
                label: 'Value 2',  // 두 번째 데이터셋 이름
                data: [3, 1, 3, 2, 1.5, 3, 3.5, 3, 1, 5], // 두 번째 값들
                borderColor: 'rgba(176, 183, 205, 1)', // 라인 색
                pointStyle:false,  
                tension: 0.3,
                borderWidth:1
            },
            {
                label: 'Value 3',  // 세 번째 데이터셋 이름
                data: [5, 3, 4, 1, 2, 1, 2, 0, 2, 3], // 세 번째 값들
                borderColor: 'rgba(111, 159, 215, 1)', // 라인 색
                pointStyle:false,
                tension: 0.3,
                borderWidth:1
            }
        ]
    };

    // 차트 옵션 설정
    var options = {
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
            position: 'right',
            display: false,
            }
        }
    };

    // 차트 생성
    var lineChart01 = new Chart(ctx, {
        type: 'line',  // 라인 차트
        data: data,  // 데이터
        options: options  // 옵션
    });
}
Line__chart01 ();


