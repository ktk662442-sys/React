import React from 'react'

export const Dom = () => {
  return (
    <>
        {/* 
            <DOM, 가상DOM>
            = Dom : html을 해석해서 트리 구조로 나타낸 것이며 'Document object Model'의 약어 
            = 가상 Dom : 자바스크립트 객체로 만들어진 가상의 Dom / 변경된 부분만을 실제 Dom에 반영 / 렌더링 성능 최적화 / UI 업데이트 최적화

          <패키지 관리자> 
          = 의존 관계를 의식하지 않아도 자동으로 해결해준다
          = 팀 안에서 패키지를 공유하고 버전을 통일하기가 쉽다
          = 전 세계에 공개된 패키지를 하나의 명령어로 이용활 수 있다
          = 어디에서 로딩한 것인지 알기 쉽다

          npm/yarn 기본 개념 
          NPM(패키지 저장소) => package.json(설계 문서 역할 : Node.js,JavaScript 설명서) -> package-lock.jsone / yarn.lock(자동 생성됨,의존관계, 버전해결)
          -> node_modules(각 모듈의 실체 js 파일 등 크기가 매우 큼 깃허브에 업로드하지 않음)

          NPM : 전 세계 사람이 패키지 공개 장소로 사용(일반적으로 대문자는 저장소 소문자는 패키지 관리로서의 npm을 나타내는 경우가 많다)
          YARN 
          = 명령어를 실행하면 로컬 파일인 package.jsone이 변경되고 패키지 정보가 추가 
          = npm으로 설치했을 때는 package-jsone 파일이 yaen으로 설치했을때 yarn.lock파일 생성
          = 'node_modules' 폴더는 용량이 매우 크기 때문에'깃허브'같은 소스 관리 도구에 업로드하거나 복사 및 붙여 넣기로 이동하는 등의 작업은 하지 
          않는 것이 좋다
        */}
    </>
  )
}
