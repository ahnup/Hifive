const clock = document.querySelector(".clock");
/*
html 문서안에서 class 이름이 clock인 코드를 가지고 와서
상수 clock으로 설정해줍니다.


이 부분 입니다.
*/
const dateTitle = clock.querySelector("#h2");
const clockTitle = clock.querySelector("#h1");

/*
그 후  
<div class="clock">
    <h1>00:00:00</h1>
</div>
안에 있는 h1 태그를 상수 clockTitle로 설정해줍니다.
*/

function Time(){
    const date = new Date();
    const year = date.getFullYear();//년도
    const month = date.getMonth() +1; //월
    const day = date.getDate();//날짜
    const hour = date.getHours(); // '시'를 저장
    const minute = date.getMinutes(); // '분'을 저장
    const second = date.getSeconds(); // '초'를 저장
    dateTitle.innerText = `${year +'년'}${month +'월'}${day +'일'}`;
    clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`;
}

function show(){
    Time();
    setInterval(Time,1000);
}
show();