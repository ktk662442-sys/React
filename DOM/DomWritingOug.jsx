import React from 'react'

export default function DomWritingOug() {
     const divEl = document.createElement('div');
        console.log(divEl); // <div></div>

     const nshidrw = document.createElement('nshidrw');
        console.log(nshidrw); // <nshidrw></nshidrw>

    
  return (
    <div>DomWritingOug</div>
  )
}

/*
    DOM 작성
    = 'createElement'는 인수에 HTML 태그명을 문자열로 지정 가능하며 해당 태그의 엘리먼트를 작성
    ex) div 태그의 엘리먼트 작성
        const divEl = document.createElement('div');
        console.log(divEl); // <div></div>

    = 존재하지 않는 태그를 지정한 경우에는 'HTMLunknownElement'라는 명칭의 엘리먼트 같은 것을 생성할 수 있지만 구체적인 이용 방법은 없다
        ex) 존재하지 않는 태그명을 지정
            const nshidrw = document.createElement('nshidrw');
            console.log(nshidrw); // <nshidrw></nshidrw>
    = 순수한 자바스크립트를 이용해 화면에 요소를 추가하는 경우에는 먼저 'createElement'로 DOM 요소를 작성
    = 'createElement' 메서드를 사용하여 DOM 요소를 생성한 후에는 'appendChild' 메서드를 사용하여 생성된 요소를 DOM 트리에 추가
        ex) 작성한 divEl 요소를 body 요소에 추가
            document.body.appendChild(divEl);
*/
