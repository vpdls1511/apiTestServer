// Basic Modules
const express = require('express');
const app = express();
const {names} = require("./lib/names");


//serverSetting
const port = '3000';

// Require Files
const route = require('./apis/index');

//routing
app.use('/',  route);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
