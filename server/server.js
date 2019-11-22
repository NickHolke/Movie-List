const express = require('express');
const router = require('./router.js');
const app = express();
const port = 4000;
const path = require('path');
const parser = require('body-parser');
const db = require('./database.js')

app.use(parser.json());

app.use('/', router)

app.use(express.static('public'));

//app.use('/', express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => console.log(`listening on port ${port}`));

// app.post('/post', controller.post  (req, res) => {
//     let values = [];
//     let data = req.body;

//     for (let key in data) {
//         if (key !== 'info') {
//             values.push(data[key]);
//         }
//     }

//     values = values.concat(data.info);
//     console.log(values)
    
//     res.send('Hello');
// })