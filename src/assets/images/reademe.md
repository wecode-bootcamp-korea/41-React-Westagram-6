CSS 에서 사용될 이미지를 관리하는 폴더
images 와의 차이점 :
자바스크립트 컴포넌트 내에서는 public 폴더에 접근할 수 있지만
css 에서는 public 폴더에 접근할 수 없음
src/assets/images 에는 CSS background-img 와 같이 CSS 에 사용될 이미지를 담는다 !

src - components
여러 페이지에서 함께 사용될 컴포넌트를 관리
메인을 제외한 다른 로그인 카트 이런 여러 페이지에서 같이 사용될 컴포넌트를 위치

src- pages
하나의 페이지들을 구성하는 컴포넌트들을 위치시키는 곳
Pages - Main (Nain.js, Main.scss)
여러 페이지에서 공통적으로 사용되는 컴포넌트는 아니지만,
메인 페이지 안에 여러 번 사용되는 컴포넌트가 있다면 components 폴더를 하나 더 만들어주면 됨 = 메인에서만 쓰이는 컴포넌트가 위치!

src- styles
공통적으로 사용될 스타일을 모아두는 곳
파일
reset.scss | 브라우저의 디폴트 스타일링을 리셋하기 위한 파일 -> 인터넷 검색해보세요.
common.sccc | 여러 페이지, 모든 페이지에 공통적으로 적용해야 할 스타일 적용 ex) box-sizing : border-box;
variables.scss | 다른 SCSS 파일에서 활용할 변수 관리 !
위에 두 가지는 SPA 특성상 index.js 에 한 번만 import 해줘도 모든 페이지(컴포넌트)에 적용됨

[Src] - Router.js
Router 컴포넌트를 만들고 이를 export 할 것
