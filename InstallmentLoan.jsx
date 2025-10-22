import React from 'react'

export default function InstallmentLoan() {
    // 1. 분할 대입을 이용하지 않고 문자열을 출력
    // const myProfile = {
    //     name : '홍길동',
    //     age : 24,
    // }

    // const message = `내 이름은 ${myProfile.name}입니다 나이는 ${myProfile.age}세 입니다`
    // console.log(message)


    // 2. 분할 대입 이용
    // const myProfile2 = {
    //     name : '홍길동',
    //     age : 25,
    // }

    // const {name,age} = myProfile2;
    // const message2 = `내 이름은 ${name}입니다 나이는 ${age}세 입니다`
     

    // 3. 배열에 분할 대입
    const myProfile3 = ['홍길동',26];

    const [name,age] = myProfile3;

    const message3 = `내 이름은 ${name}입니다 나이는 ${age}세 입니다`
    console.log(message3)

  return (
    <>
        {/* 
            InstallmentLoan(분합대입)
            = 분할 대입은 객체나 배열로부터 값을 추출하기 위한 방법

            <객체 분할 대입>
            = '{}'를 변수 선언부에 이용하면 객체 안에서 일치하는 속성을 추출
            = 존재하지 않는 속성명은 지정할 수 없다 이름이 일치한다면 일부만 추출하거나 순서가 달라고 상관없다

            <배열 분할 대입>
            = 배열에 분할 대입을 할 때는 변수 선언부에 '[]'를 사용하여 배열에 저장된 순서에 임의의 변수명을 설정해 추출
            = 객체와 달리 순서를 변경할 수 없으며 직접 임의로 설정한 변수명을 이용
        */}
    </>
  )
}
