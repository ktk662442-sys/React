export default function TemplateString() {
    // 1. 기존 문자열 변수 결합 : '+'를 사용
    // const name = '홍길동' // 이름을 저장한 변수
    // const age = 25 // 나이를 저장한 변수

    // const message = '내 이름은' + name + '입니다 나이는 ' + age + '세 입니다'  

    
    // console.log(message);


    // 2. 템플리 문자열 이용 : ``(역음부호, 백튀, 백쿼트)이용
    // const name = '홍길동'
    // const age = 25 

    // const message = `내 이름은 ${name}입니다 나이는 ${age}세 입니다`;

    // console.log(message);


    // 3. 함수 호출과 계삭 실행
    function sayHello(){ // 변수값을 반환하는 함수
        return '안녕하세요!';
    }

    const month = 1; // 월을 나타낸 변수 선언

    const message = `여러분 ${sayHello()}! 오늘부터 ${month * 3}월 입니다`

    console.log(message);

  return (
    <>
        {/* 
            TemplateString(템플릿 문자열)
            = 탬플릿 문자열은 문자열 안에서 변수를 전개하기 위한 새로운 표기법
            = 예를 들어 기존에 작성법에서는 문자열과 변수를 결합할 때 '+'를 이용
            = 문자열을 결합할 때마다 '+'를 입력해야 하기 때문에 읽기 힘들고 작성하는 것도 번거러운 문제가 있다
            = 템플릿 문자열을 이용하는 경우에는 ``(역음부호, 백튀, 백쿼트)로 문자열을 감싼다
            = '${name}'으로 문자열 안에서 간단하게 변수를 전개할 수 있다
            = 문자열 안에서 자바스크립트의 값을 다룰 때는 '템플릿 문자열'을 이용하는 것이 좋다
        */}
    </>
  )
}
