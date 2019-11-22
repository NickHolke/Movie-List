const db = require('./database.js');

let model = {
    post: function(params, callback) {
        let queryStr = 'insert into movies (title, id, display, watched,\
             overview, vote_average, release_date, poster_path) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
        db.query(queryStr, params, (err, results) => {
            callback(err,results);
        })
    }
}

module.exports = model;