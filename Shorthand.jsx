import React from 'react'

export default function Shorthand() {
    // 속성명과 변수명이 같은 경우_1
    // const name = '호빵맨'
    // const age = 24

    // const user = {
    //     name : name,
    //     age : age,
    // }
    // console.log(user) // name : 호빵맨 age : 24

    // / 속성명과 변수명이 같은 경우_2
    const name = '호빵맨'
    const age = 24

    const user = {
        name,
        age,
    }
    console.log(user) // name : 호빵맨 age : 24

  return (
    <>
        
    </>
  )
}

/*
    객체 생략 표기법
    = 객체 기술 방법으로서 사용 빈도가 높은 '쇼트핸드(생략표현 : Shorthand)'가 있다
    = '객체의 속성명'과 '설정할 변수명'이 같으면 생략할 수 있다
    
    const name = '호빵맨'
    const age = 24

    const user = {
        name,
        age,
    }
    console.log(user) 
    = 객체 설정에서 ':(콜론)' 이후를 생략하고 하나로 모을 수 있다
    = '객체 분할 대입'에서 별명을 붙이는 방법의 반대 형태

    <ESLint>
    = 'var'를 이용한 변수 선언 체크
    = 이용하지 않는 변수 체크
    = 남아 있는 'console.log' 체크
    = 의미 없는 식 체크
    = 기타
*/