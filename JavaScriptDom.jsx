import React from 'react'

export default function JavaScriptDom() {
  return (
    <div>JavaScriptDom</div>
  )
}

/*
    자바스크립트를 이요한 DOM 엑세스
    = 순수한 자바스크립트(바닐라 JS)나 제이쿼리를 이용해 화면 요소를 바꿀 때는 DOM을 순차적으로 조작해야 했다

    <자바스크립트를 이용한 DOM 얻기>
    1. id지정해 요소 얻기
    = document.getElementsById('id명')
    = document는 DOM 트리의 엔트리포인트(엔트리포인트 : 진입점, 시작점)
    = getElementsById는 id를 지정한 DOM을 얻는 방법
    = querySelector() 안에 여러 셀렉터를 지정한 뒤 처리하는 방법도 있다

    2. 클래스명으로 요소 얻기
    = getElementsByClassName('클래스명') : 클래명을 가진 요소를 모두 얻음
    = 여러 엘리먼트를 얻을 수 있는 버전의 'qerySelector'인 'qerySelectorAll()'도 있다

    3. qerySelectorAll을 이용한 엘리먼트 얻기
    = 'qerySelectorAll'을 사용하면 일치하는 엘리먼트를 모두 얻기 때문에 getElementByClassName과 마찬가지로 여러 엘리먼트를 얻을 수 있다
    = 'getElementsByClassName'을 이용할 때는 'HTMLCollection'이 반환되지만 'qerySelectorAll'을 이용할 때는 'NodeList'가 반환된다
        HTMLCollection : DOM 엘리먼트의 컬렉션
        NodeList : 노드의 컬렉션

*/