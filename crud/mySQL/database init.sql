CREATE DATABASE IF NOT EXISTS libraryMgm ;
CREATE TABLE IF NOT EXISTS libraryMgm.media(
    isbn BIGINT NOT NULL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL,
    quantity INT(10) NOT NULL,
    medDesc VARCHAR(500),
    publishyr INT(4),
    genre VARCHAR(50)
    
);

INSERT INTO libraryMgm.media(isbn,title,author,quantity,medDesc,publishyr,genre)
    VALUES
    (8939278138,'To Kill a Mockingbird','Harper Lee',2,'blah blah blah blah word count word count','1960','Fiction'),
    (7582393020,'The Alchemist','Paul Coelho',1,'blah blah blah blah word count word count','1988','Fiction'),
    (3859301029,'The Hunger Games','Suzanne Collins',6,'blah blah blah blah word count word count','2008','Fiction'),
    (3784922913,'The Da Vinci Code','Dan Brown',1,'blah blah blah blah word count word count','1996','Fiction'),
    (3738593012,'1984','George Orwell',2,'blah blah blah blah word count word count','1996','Fiction'),
    (2739850123,'Freakonomics','Steven D. Levitt',0,'blah blah blah blah word count word count','2005','Nonfiction'),
    (2830592344,'Sapiens','Yuval Noah Harari',4,'blah blah blah blah word count word count','2011','Nonfiction'),
    (5823092221,'Fahrenheit 451','Ray Bradbury',1,'blah blah blah blah word count word count','1953','Fiction'),
    (9018374582,'Lord of the Flies','William Golding',0,'blah blah blah blah word count word count','1954','Fiction');

