import React from 'react'

export default function Default() {
    // 디폴트값 설정
    // const sayHello = (name = '게스트') => console.log(`${name}님 안녕하세요`)
    // sayHello('홍길동')
    // sayHello()

    // 분할 대입의 디폴트값을 설정
    const myPro = {
        age : 25,
    }
    const {name = '게스트'} = myPro;

    const mess = `${name}님 안녕하세요`
    console.log(mess)
  return (
    <>

    </>
  )
}

/*
    디폴트값(Default)
    = 디폴트값은 함수의 인수나 객체를 분할 대입할 경우 설정해 사용
    = 값이 존재하지 않을 때의 초기값을 설정할 수 있어 처리를 더욱 안전하게 할 수 있다

    1. 인수의 디폴트값
    = 디폴트값을 설정하여 인수가 전달되지 않을 때 사용할 값
    = 어디까지나 디폴트값이기 때문에 무언가 값이 전달되면 해당 값을 우선
    = 전달되지 않을 가능성이 있는 인수가 있을 때는 디폴트 값을 효과적으로 이용

    2. 객체 분할 대입의 디폴트값
    = 값을 설정하면 속성이 존재하지 않는 경우에 설정할 값을 지정할 수 있다
    = 객체도 물론 속성이 존재할 때는 해당 속성을 우선
*/
