import React from 'react'

export default function Spread() {
    // 1. 요소전개
    // const arr1 = [1,2,3,4,5,6];
    // const summaryFunc = (num1,num2,num3,num4,num5,num6) => console.log(num1 + num2 + num3 + num4 + num5 + num6) 

    // 일반적 배열값 
    // summaryFunc(arr1[0],arr1[1],arr1[2],arr1[3],arr1[4],arr1[5])

    // 스프레드 구문
    // summaryFunc(...arr1)


    // 2. 요소 모으기 
    // const arr2 = [1,2,3,4,5];

    // const [num1,num2,...arr3] = arr2;

    // console.log(num1); // 1
    // console.log(num2); // 2
    // console.log(arr3); // 3,4,5


    // 3. 요소 복사와 결합
    // const arr4 = [10,20];
    // const arr5= [30,40];

    // 스프레드 구문을 이용한 새로울 배열 생성
    // const arr6 = [...arr4];

    // console.log(arr4); // 10,20
    // console.log(arr6); // 10,20

    // 두 개의 배열 결합
    // const arr7 = [...arr4, ...arr5];
    // console.log(arr7) // 10,20,30,40

    // 여러 객체 결합
    // const obj4 = {val1 : 10, val2 : 20};
    // const obj5 = {val3 : 30, val4 : 40};

    // 스프레드 구문을 이용한 복사
    // const obj6 = {...obj4}
    // console.log(obj6); // {val1: 10, val2: 20}
    // 스프레드 구문을 이용한 결합
    // const obj7 = {...obj4, ...obj5}
    // console.log(obj7); // {val1: 10, val2: 20, val3: 30, val4: 40}


    // 4. 등호를 이용해서 복사하면 안되는 이유
        // const arr4 = [10,20];

        // =로 복사
        // const arr8 = arr4;

        // arr8의 처음 요소(0번째 자리)를 100으로 덮어 씀
        // arr8[0] = 100;

        // console.log(arr4); // [100,20]
        // console.log(arr8); // [100,20]

        // 스프레드를 이용한 복사
        const arr4 = [10,20];
        
        // 스프레드 구문을 이용해 복사
        const arr8 = [...arr4];

        // arr8의 처음 요소를 100으로 덮어 씀
        arr8[0] = 100;

        console.log(arr4); // [10, 20]
        console.log(arr8); //  [100, 20]

  return (
    <>

    </>
  )
}

/*
    Spread(스프레드 구문)
    = '스프레드 구문'은 '배열'이나 '객체'에 이용할 수 있는 표기법이며 이용 방법도 여러 가지가 있다

    1. 요소전개 
    = 스프레드 구문은 '...'과 같인 점 3개를 연결해서 사용
    = '배열'에 이용함으로써 내부 요소를 순차적으로 전개할 수 있다

    2. 요소 모으기
    = 스프레드 구문은 요소를 모으는 데도 활용할 수 있다

    3. 요소 복사와 결합
    = 자주 이용되는 배열이나 객체의 복사, 결합

    4. 등호를 이용해서 복사하면 안되는 이유
    = 배열이나 객체 등 '오브젝트 타입'이라 불리는 변수는 등호로 복사하면 '참조값 역시 상속되기 때문'에 예상치 못한 동작을 일으킬 수 있다
    = 복사 후 배열에 대한 조작이 복사 전 소스의 배열에도 영향을 주게 된다
    = '스프레드 구문'을 사용하면 '완전히 새로운 배열'을 만들기 때문에 원래 배열에 영향을 주지 않는다
    = 리액트가 '완전히 새로운 배열'이라고 잘 판단할 수 있도록 배열 등을 변경할 때도 '등호' 대신 '스프레드 구문'을 사용해서 복사(새로운 배열 생성)
    합니다("splice"등 다른 방법으로도 구현할 수 있다)      
*/
