# 🔄 Woohui

<div align=center>🚪 Intro</div>
프로젝트를 진행하기 전에 재밌게 개발을 할 수 있는 것을 고민하다가 크롬을 쓰면서 불편감을 느꼈던 부분을 해소해보려고 진행한 프로젝트.
사실, 기존에 크롬 검색창에서 내가 미리 사이트를 등록해놓으면 그 사이트 검색이 자동으로 이루어 지긴 했지만 그 기능을 확장 프로그램으로 담아보려고 한다.
<br>

***

### ⚙️ 간략한 동작 원리
> manifest 파일에 권한과 간단한 메타 데이터부터 어떤 권한을 필요로 하는지, 또 포함하고 있는 파일들을 명시한다.

> popup.js 파일은 popup.html이 처음 아이콘이 클릭될 때 모든 동적인 작업을 포함한다. manifest 파일에 html만 명시를 해주고, js 파일은 html 파일에서 이용.

### ⁉️ Problem
1. 처음에 이벤트 핸들러를 사용할줄 몰라서 버튼이 클릭될 때 새로운 탭에서 페이지가 열리게 하는 것을 좀 오래 고민함. => getByElementId를 사용하여 이벤트 리스너로 클릭 시 함수가 동작하게 한다.

### 참고 사이트
- [Event Listener](https://stackoverflow.com/questions/36324333/refused-to-execute-inline-event-handler-because-it-violates-csp-sandbox)
- [Chrome new Tav](https://coderedirect.com/questions/208582/programmatically-open-a-chrome-plugins-options-html-page)