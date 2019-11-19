const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const parser = require('body-parser');

//app.get('/', (req,res) => res.send('Hello there'));

app.use(parser.json());
//bodyParser.urlencoded()

app.use('/', express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => console.log(`listening on port ${port}`));