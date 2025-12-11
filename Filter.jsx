import React from 'react'

export default function Filter() {
    // 1. Filter을 이용하여 홀수만 출력
    // const num = [1,2,3,4,5];

    // const nameNumAtt =  num.filter((num1) => {
    //     return num1 % 2 === 1;
    // })
    // console.log(nameNumAtt); // 1,3,5



    // 2. for문의 index를 이용해 요소를 순서대로 추출
    // const nameArr = ['홍길동','고길동','김길동'];

    // for(let index = 0; index < nameArr.length; index++){
    //     console.log(`${index + 1}번째는 ${nameArr[index]}입니다`)
    //     // index는 0부터 시작하기 때문에 +1을 사용
    // }
    


    // 3. map + if문을 이용한 예시
    const nameArr = ['홍길동','고길동','김길동'];

    const newNameArr = nameArr.map((name) => {
        if(name === '홍길동'){
            return name;
        }else{
            return `${name}님`
        }
    });
    console.log(newNameArr);
  return (
    <>
        
    </>
  )
}
/*
    Filter
    = 'Filter' 함수는 'map' 함수와 이용 방법이 거의 동일하지만 'return' 뒤에 조건식을 입력해서 일치하는 것만 반환
    = 'Filter' 함수는 조건에 일치하는 값만 배열로부터 추출
    = 프로그램을 작성하면서 배열 안에서 특정한 조건에 일치하는 것을 추출해서 처리하고 싶을 때는 'Filter'를 사용

    <index>
    = 루프를 사용해 배열을 처리할 때 몇 번째 요소인지 알아야 하는 경우
    = 'for문'은 애초에 'index'를 이용
*/