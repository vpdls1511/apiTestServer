# API TEST SERVER

### 프론트 개발을 하면서 api 통신을 위한 예제가 필요할 때 사용하는 코드
### It is implemented to implement the api for front development.
### Mysql 연결 작업중

---
localhost:3000 포트에서 작동을 합니다.

running on localhost:3000

---
### `` $ yarn `` or `` $ npm install ``
### `` $ node app.js ``

---

/apis/user.js

|  method  | adress | request | response |
|   :---:    |:---:| :---: | :---: |
|  `GET`   | /user/list     | `?limit={limitItems}` | userid : string <br/> email : string<br/> pass : string<br/> name : string<br/> ava : string<br/> age : number<br/> sex : string |
|  `POST`  | /user/login    | ``userid : string `` <br/> ``pass : string`` | state : boolean <br/> message : string |
|  `POST`  | /user/regitser | ``userid : string `` <br/> ``pass : string`` <br/> ``name : string`` <br/> ``ava : string`` <br/> ``age : number`` <br/> ``sex : string``   | state:boolean<br/>message:string |

/apis/desc.js

|  method  | adress | request | response |
|   :---:    |:---:| :---: | :---: |
|  `GET`   | /desc/list     | `?limit={limitItems}` | id : string <br/>img : string<br/>title : string<br/>timeStamp : number<br/>like : number<br/>desc : string<br/>comment : array<br/>comment.user : string <br/>comment.timeStamp : number <br/>comment.comment : string <br/>comment.like : number <br/> |

