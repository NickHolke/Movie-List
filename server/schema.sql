CREATE DATABASE movielist;

USE movielist;

CREATE TABLE movies (
    title VARCHAR (40),
    id INT PRIMARY KEY,
    display BOOLEAN,
    watched BOOLEAN,
    overview VARCHAR (2000),
    vote_average INT,
    release_date VARCHAR(40),
    poster_path VARCHAR(100)
);
