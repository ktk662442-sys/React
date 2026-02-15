import React from 'react'

export default function AddDOM() {
    // 1. div태그에 p태그 추가
    // const divEl = document.createElement('div');
    // const pEl = document.createElement('p');
    // divEl.appendChild(pEl);
    // console.log(divEl); // <div><p></p></div>


    // 2. div태그에 p태그와 h2태그 추가
    // const divEl = document.createElement('div');
    // const pEl1 = document.createElement('p');
    // const h2El = document.createElement('h2');

    // divEl.appendChild(pEl1);
    // divEl.appendChild(h2El);
    // console.log(divEl); // <div><p></p><h2></h2></div>

  return (
    <div>AddDOM</div>
  )
}
/*
    DOM 추가
    = 획득 또는 작성한 엘리먼트에 대해  요소를 추가할 수 있다
    = 'appendChild'를 사용해 특정 엘리먼트 아래에 다른 엘리먼트를 추가할 수 있다
    = HTML을 계층 구조로 코딩하G는 것과 같다
    = 'appendChild'는 '하위 요소의 맨 끝에 요소를 추가'하기  때문에 자녀 요소가 여러 개일 경우 가장 마지막에 차례대로 추가
    = 뒤가 아닌 '앞에 추가하고 싶을때'는 'prepend' 메서드를 사용    

    appendChild() : 특정 엘리먼트의 자식 요소로 추가
    prepend()     : 특정 엘리먼트의 자식 요소의 맨 앞에 추가
*/
