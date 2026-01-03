import React from 'react'

export default function LogicalOperator() {
    // || text_1
    // const num = null;
    // const fee = num || '금액을 설정하지 않았습니다'

    // console.log(fee);//금액을 설정하지 않았습니다

    // || text_2
    // const num = 100;
    // const fee = num || '금액을 설정하지 않았습니다'

    // console.log(fee);//100


    // && text_1
    const num2 = 100;
    const fee2 = num2 && '무언가가 설정되었습니다'

    console.log(fee2); //무언가가 설정되었습니다
  return (
    <>
        
    </>
  )
}

/*
    논리 연산자(LogicalOperator)
    1. || (OR)
    = 왼쪽 피연산자가 true이면 true를 반환하고,
    = 왼쪽 피연산자가 false이면 오른쪽 피연산자를 반환한다.
    = null,undefinded, 0,NaN,' ' (빈문자열) => false로 간주

    2. && (AND)
    = 왼쪽 피연산자가 true이면 오른쪽 피연산자를 반환하고,
    = 왼쪽 피연산자가 false이면 false를 반환한다.
*/