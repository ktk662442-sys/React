import React from 'react'

const LetConst = () => {
    // 1. var단점
    // var vall = 'var 변수';
    // console.log(vall);
    
    // 'var'덮어쓰기 
    // vall = 'var 덮어쓰기'
    // console.log(vall)

    // // 'var' 재선언
    // var vall = 'var 변수 재선언'
    // console.log(vall);

    // 2. let변수 선언
    // let vall = 'let 변수선언'
    // console.log(vall);

    // let 덮어쓰기
    // vall = 'let 덮어쓰기'
    // console.log(vall);

    // let 재선언
    // let vall = 'let 덮어쓰기'
    // console.log(vall); // 에러

    // 3. const변수 선언
    // const vall = 'const 변수';
    // console.log(vall);

    // const 덮어쓰기
    // vall = 'const 덮어쓰기'
    // console.log(vall); // 오류

    
    // const 재선언
    // const vall = 'const 재선언'
    // console.log(vall); // 오류


    // 4. 객체속성 변경 및 추가
    // 배열정의
    // const obj = {
    //     name : '누시',
    //     age : 24,
    // }
    // console.log(obj); // name: '누시', age: 24}

    // 속성값 변경
    // obj.name = 'Nushida';
    // console.log(obj); // {name: 'Nushida', age: 24}

    // // 속성 추가
    // obj.address = 'Tokyo';
    // console.log(obj); // name: 'Nushida', age: 24, address: 'Tokyo'

    // 5. 배열값 변경
    const arr = ['dog','cat'];
    // console.log(arr); // 'dog', 'cat'

    // 첫 번째 값 변경
    // arr[0] = 'bird'
    // console.log(arr); // 'bird', 'cat'

    // 값 추가
    arr.push('monkey');
    console.log(arr); // 'dog', 'cat', 'monkey'
    <>
        {/* 
            <var를 이용한 변수 선언의 문제점>
            1. 변수를 덮어 쓸 수 있다
            = 한 번 정의한 변수에 다른 값을 대입할 수 있다
            = 작성하다 보면 덮어 쓰고 싶지 않을 때도 많기 때문에 무조건 덮어 쓰는 것이 좋지는 않다

            2. 다시 선언(재선언)할 수 있다
            = 완전히 같은 변수명을 여러 위치에서 변수로 정의할 수 있다
            = 프로그램 실행 순서에 따라 어느 변수가 사용되는지 해석하기 어려움으로 재선언은 기본적으로 안하는 편이 좋다

            <let을 이용한 변수 선언>
            = 'let'으로는 재선언을 할 수 없다
            = 'let'은 변수를 덮어 쓸 수는 있다

            <const를 이용한 변수 선언>
            = 'const'는 재선언, 덮어 쓰기가 모두 불가능한 가장 엄격한 변수 선언 방법
            = 'constant = 상수'라는 의미에서 이런 이름이 되었다
            = 변수 종류에 따라 'const'로 정의해도 변수값을 변경할 수 있는 경우가 있으므로 주의

            <cosnt로 정의한 변수를 변경할 수 있는 예>
            = 문자열이나 수치 등 '프리미티브 타입'이라 불리는 종류의 데이터는 'const'를 이용해 정의한 경우 덮어 쓸 수 없다
            = 하지만 객체나 배열 등 '오브젝트 타입'이라 불리는 데이터들은 'const'로 정의해도 도중에 값을 변경할 수 있다
            = 'cosnt'로 정의해도 객체 내용은 자유롭게 변경할 수 있다

                [프리미티브 타입]
                - 논리값(Boolean) : true/false
                - 숫자(Number) : 1, 2.5
                - 큰 수치 : 90301239129830321 
                - 문자열(String) : "Korean", '대한민국'
                - undefined : 미정의
                - null : 값 없음
                - Symbol : 유일하며 바꿀 수 없는 값

                [오브젝트 타입]
                - 객체
                - 배열
                - 함수
                - 등 '프리미티브 타입' 이외의 것

            <리액트 개발에서 이용하는 변수 선언>
            = 리액트 개발에서는 이 중 'const'를 가장 많이 이용
            = 객체나 배열은 'const'로 선언해도 속성을 변경할 수 있다
            = 리액트 개발에서 동적으로 바뀌는 값은 'State'라는 다른 개념으로 값을 관리
            = 대부분은 'const'를 이용하고 'State'로 관리하지 않으면서 처리 도중 값을 덮어 써야 하는 변수만 'let'으로 선언`
        */}

        
    </>
}

export default LetConst