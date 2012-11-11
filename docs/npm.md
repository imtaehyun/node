# Node Package Manager #
npm(Node Package Manger)는 node로 프로그래밍하는데 있어서 유용한 module들을 설치하고 업데이트하는 등의 관리를 도와준다. 또한 현재 사용하고 있는 node의 버전에 맞게 dependency check도 함께 해주는 유용함도 갖추고 있다. npm은 따로 설치할 필요가 없다. node를 설치했다면 같이 설치되었을 것이다.

**npm website** : [http://npmjs.org/](http://npmjs.org/)

## 사용법 ##
### Module 설치법 ###
npm install <module name>

위 명령을 실행한 디렉토리의 하위에 `node_module`을 생성하고 그 하위에 각 모듈을 설치한다. 가령 underscore.js 모듈을 설치한다면 아래와 같다.

Ex. `npm install underscore`

### Module 설치법 (Globally) ###
npm install <module name> -g

`-g 옵션`으로 설치를 하면 각 node 프로그램에 각각 해당 module을 설치해줄 필요가 없다. 즉, 한번의 설치로 모든 node프로그램에 적용 가능하다.

Ex. `npm install underscore -g`

### Module Update 방법 ###
npm update <module name>

해당 모듈의 업데이트 사항이 있는 경우 모듈을 업데이트 시켜준다.

Ex. `npm update underscore`

## 여러가지 Node 모듈을 검색하는 방법 ##

1. [npm](http://npmjs.org/)사이트를 이용한다. (검색을 지원하고, 각 모듈의 설명, 버전, Dependency 등등이 자세히 설명되어 있다.)
2. [Google 검색](http://google.com)을 이용하여 `모듈이름 nodejs`와 같이 검색하면 찾아준다. 보통 Github Repository들이 검색되고 README.md파일에 설치방법, 사용방법 등이 잘 기록되어 있으니 참고하면 된다.