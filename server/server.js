const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const parser = require('body-parser');

//app.get('/', (req,res) => res.send('Hello world'));

app.use(parser.json());

// app.get('/', (req, res) => {
//     res.send("Hello World")
// })

// app.get('/api/movies', (req, res) => {
//     res.send('Space Jam, Frozen, Ice Age')
// })
//bodyParser.urlencoded()

app.use('/', express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => console.log(`listening on port ${port}`));