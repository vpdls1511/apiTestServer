# API TEST SERVER

### 프론트 개발을 하면서 api 통신을 위한 예제가 필요할 때 사용하는 코드
### It is implemented to implement the api for front development.

---
localhost:3000 포트에서 작동을 합니다.

running on localhost:3000

---
### `` $ node app.js ``

---

/apis/user.js

|  method  | adress | request | response |
|   ---    |:---:| :---: | :---: |
|  `GET`   | /user/list     | `?limit={limitItems}` | userid : string <br/> email : string<br/> pass : string<br/> name : string<br/> ava : string<br/> age : number<br/> sex : string |
|  `POST`  | /user/login    | ``userid  password`` | true /<br/> false(Not match password , Not match userid) |
|  `POST`  | /user/regitser |  | |
