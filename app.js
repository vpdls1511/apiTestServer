/*

    ApiTestServer v1.0.1
    Create by nGyu
    https://github.com/vpdls1511

*/

// Basic Modules
const express = require('express');
const app = express();

// Modules
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session)

//serverSetting
const port = '3000';

// Require Files
const route = require('./apis/index');

//routing
const option = {
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'root',
    database : 'authtest'
}
const sessionOption = {
    secret : 'YOUR_SECRET_KEY',
    resave : false,
    saveUninitialized : false,
    store : new MySQLStore(option)
}

app.use(session(sessionOption))
app.use('/img',express.static('dummy/img'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/',  route);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
