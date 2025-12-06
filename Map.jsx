import React from 'react'
    // for문 이용 
    // const nameArr = ['윤희', '예린', '주현'];
    // for(let index = 0; index < nameArr.length; index++){
    //     console.log(nameArr[index]);
    // }


    // Map이용
    const nameArr = ['윤희', '예린', '주현'];
    const nameArr1 = nameArr.map((name) => {
           return name;
        })
        console.log(nameArr1)

export default function Map() {
  return (
    <>
    
    </>
  )
}
/*
   Map
   <기존 for문>
   = 기존 배열에 루프를 돌려 처리한느 경우에는 'for문'을 이용
   = 배열의 요소 수만큼 루프 처리를 실행
   = 루프를 돌 때마다 1씩 증가시키고 배열 요소에 요소를 이용해 접근하여 순서대로 처리하는 구조
   = 구문도 복잡하고 코드양도 늘어날 수밖에 없다
       ex)
          const nameArr = ['윤희', '예린', '주현'];
          for(let index = 0; index < nameArr.length; index++){
             console.log(nameArr[index]);
          }  // '윤희', '예린', '주현'

   <Map 함수 이용>
   = Map 함수에서는 배열을 순서대로 처리한 결과를 배열로 받을 수 있다
    배열.map(함수 작성)
     ex_1)
        const nameArr = ['윤희', '예린', '주현'];
        const nameArr = nameArr.map(()=>{})
        - 위 예제는 화살표 함수의 껍데기를 먼저 입력한 상태
        - 함수는 '임의의 이름을 붙인 인수'를 받을 수 있으며 걱에 배열 안의 값이 들어간다
        - 반환하는 요소를 함수 안에서 return한다

    ex_2)
       const nameArr = ['윤희', '예린', '주현'];
       const nameArr1 = nameArr.map((임이의 인수명) => {
           return 힘이의 인수명;
        })
        console.log(nameArr1) // '윤희', '예린', '주현'

    = 'for문'에 비해 매우 간단하게 작성
    = 반환값으로 배열을 받지 않아도 된다면 예제처럼 새로운 배열을 정의하지 않고도 단순하게 루프 처리를 한다
*/
