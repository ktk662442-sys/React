import React from 'react'

export default function TernaryOperator() {
    // text_1
    // const printFormattedNum = (num) => {
    //     const formattedNum = typeof num === 'number' ? num.toLocaleString() : '숫자를 입력하십시오'
    //     console.log(formattedNum);
    // }

    // printFormattedNum(1000000)
    // printFormattedNum('1000000')



    // text_2
    const checkSumOver100 = (num1, num2) => {
        return num1 + num2 > 100 ? '100초과' : '100이하'
    }
    console.log(checkSumOver100(50, 40)) // 100이하
    console.log(checkSumOver100(50, 70)) // 100초과
  return (
    <>
    
    </>
  )
}

/*
    TernaryOperator(삼항연산자)
    = 삼한 영산자는 너무 많이 이용하면 가독성이 낮아져 좋지 ㅇ낳지만 'if ~ else ~'를 작성하는 수고가 줄어들기 때문에 적절하게 사용하면 효과적
    = 'typeof'는 변수 등의 타입을 파정
    = 'toLocaleString()'은 숫자를 세 자리씩 콤마로 구분해서 변환
    = '판정 -> 변수' 설정을 할 때 삼항 연산자가 편리하다 
    = 리액트로 작성할 때 화면 요소 구분 표시에도 '삼항 연산자'를 이용
    ️ <문법>
        - 조건 ? 조건이 true일 때 처리 : 조건이 false일 때 처리
 */
