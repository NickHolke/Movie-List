const express = require('express');
const app = express();
const port = 4000;
const path = require('path');

//app.get('/', (req,res) => res.send('Hello there'));

app.use('/', express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => console.log(`listening on port ${port}`));