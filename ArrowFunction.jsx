import React from 'react'

const ArrowFunction = () => {
  return(
    <>
        {/* 
            화살표 함수
            = 'ES6(ES2015)'에서 추가된 새로운 함수 표기법
            = 기존보다 간단하게 함수를 기술할 수 있다
            = 'function'을 이용하지 않고 함수를 사용

            <기존함수_1 : 함수형>
            function text(value){
                return value;
            }
                console.log(text('text'));
            
            <기존함수_2 : 선언적 함수>
            const text = function(value){
                return value;
            }
                console.log(text('text'));

            <화살표 함수_1 : 화살표 함수>
            const text = (value) => {
                return value;
            }
                console.log(text('text'));
            = '()'안에 인수를 입력하고 '화살표 함수'라는 이름의 유래 이기도 한 '=>'라는 기호로 함수를 작성
            = 이후 중괄호에서 처리를 입력하는 부분은 같다

            <화살표 함수 작성 시 주의점>
            1. 인수가 한 개인 경우에는 소괄호 생략이 가능하다
                ex)
                    const text = value => {
                        return value;    
                    }
                        console.log(text(text));
                    = 실제 프로젝트에서는 코드 형태 정리 도구인 'Prettier' 등을 이용해 한쪽으로 규칙을 통일하는 것이 일반적이지만 양쪽 모두 사용할 수 있다
                    Prettier : 코드의 가독성을 높이고 팀원 간에 일관된 스타일 유지할 수 있도록 들여쓰기, 공백, 줄 바꿈 등을 정해진 규칙에 자동으로 생성

                    - 인수가 2개 이상인 경우 -
                    <에러 발생>
                     const text = value1, value1 => {
                        return value1, value1;    
                    }
                        console.log(text(text));

                    <수정 : 인자,인수값(매개변수)에 '()'을 감싸준다>
                     const text = (value1, value1) => {
                        return value1, value1;    
                    }
                        console.log(text(text));

            2. 처리를 한 행으로 반환하는 경우 중괄호와 return을 생략할 수 있다
                ex)
                    const text = (num1,num2) => num1 + num2;
                    console.log(text(10,20));
                    = 이 방법은 규칙을 모르면 코드의 의미를 알 수 없다

                    <오류>
                    const text = (num1,num2) => {
                        num1 + num2;
                    }
                    console.log(text(10,20));
                    = 'return'이 없기 때문에 무엇을 반환해야 할 지 모르기 때문에

                    <수정>
                    const text = (num1,num2) => (
                        {
                            name : num1,
                            age : num2,
                        }    
                    );
                    console.log(text('홍길동','30'));
        */}
    </>
  )
}
export default ArrowFunction