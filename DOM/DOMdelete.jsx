import React from 'react'

export default function DOMdelete() {
    // h1 태그 삭제
    const h1El = document.getElementById('title');

    // body 태그 얻기
    const bodyEl = document.querySelector('body');

    // body 태그 아래부터 삭제
    bodyEl.removeChild(h1El);
  return (
    <div></div>
  )
}

/*
    DOM삭제
    = 삭제하는 경우에는 'removeChild()' 메서드를 사용
    = 'removeChild()'는 그 아래부터 지정된 엘리먼트를 삭제할 수 있는 것이 장점
    = 특정 요소가 아니라 자녀 요소를 모두 삭제할 때는 'textContent'에 'null'을 지정
    = HTML의 구조나 id,클래스명과 자바스크립트 코드가 밀접한 관련되어 있다
    
    Tip) 제이쿼리
    - 자바스크립트 라이브러리
    - 복잡한 자바스크립트 메서드를 더욱 간단하게 다룰 수 있게 해준다
*/
