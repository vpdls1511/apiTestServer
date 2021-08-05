// Basic Modules
const express = require('express');
const app = express();

// Module
const bodyParser = require('body-parser');
const cors = require('cors');

//serverSetting
const port = '3000';

// Require Files
const route = require('./apis/index');

//routing
app.use('/img',express.static('dummy/img'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/',  route);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
