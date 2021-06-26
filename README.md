# 트렐로 클론코딩
> 환영합니다.  
**trello-clone-mvc**는 NodeJS를 기반으로 MVC 패턴을 적용하여 개발되었습니다.

<br>

### 📍 바로가기
**Service**
* 박우림의 [Trello](https://idu-market.shop:7777) 이용해보기

**Wiki**
* [요구사항분석](https://github.com/woorim960/trello-clone-mvc/wiki/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD%EB%B6%84%EC%84%9D)
* [DB 설계](https://github.com/woorim960/trello-clone-mvc/wiki/DB-%EC%84%A4%EA%B3%84)
* [API 설계](https://github.com/woorim960/trello-clone-mvc/wiki/API-%EB%AA%85%EC%84%B8)
* [커밋 전략](https://github.com/woorim960/trello-clone-mvc/wiki/%EC%BB%A4%EB%B0%8B-%EC%A0%84%EB%9E%B5)

**README**
* <a href="#-run">Run</a>
* <a href="#-tech-stack">Tech Stack</a>
* <a href="#-dependencies">Dependencies</a>
* <a href="#-developer">Developer</a>

<br>

### 🍀 Run
1. 환경변수 파일 생성
> 데이터베이스와 연결되어야지만 실행이 가능합니다.

* 명령어
```
# 작업 경로로 이동
$ cd /workdir

# 환경 변수 파일 생성
$ touch .env

# 환경 변수 내용 추가 -> 내용은 바로 하단에 있습니다.
$ vi .env
```

* ```.env```  파일 내용
   - [DB 설계 바로가기](https://github.com/woorim960/trello-clone-mvc/wiki/DB-%EC%84%A4%EA%B3%84)
```
# ? 내용에 사용하는 DB 정보를 적어주십시오.
PORT=7777

DB_HOST=?
DB_USER=?
DB_PSWORD=?
DB_DATABASE=?
```

2. 도커를 이용한 ```trello-node-mvc``` 이미지 실행
```
# /workdir은 본인의 작업 경로입니다.
$ docker run --env-file /workdir/.env -p 7777:7777 dnfla960/trello-node-mvc
```

3. 접속
```
http://localhost:7777
```


<br>

### 📚 Tech Stack
* **Back**
   - Node.js (v4.14.4)
   - Express (v4.17.1)
   - MySQL   (v8.0.20)

* **Front**
   - HTML5 ```EJS```
   - CSS3
   - Vanila JS ```ES6+```
   - DOM

<br>

### 🛠 Dependencies
1. dotenv: ^8.2.0
2. ejs: ^3.1.5
3. express: ^4.17.1,
4. mysql2: ^2.2.5

<br>

### 👨🏻‍💻 Developer
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/woorim960">
        <img src="https://avatars.githubusercontent.com/u/56839474?v=4" width="100px;" alt=""/> <br />
        <sub>
          <b>박우림</b>
        </sub>
      </a> <br />
      <a href="https://github.com/woorim960" title="Packaging/porting to new platform">
        웹 프로그래머
      </a>
    </td>
  </tr>
</table>

<br>
