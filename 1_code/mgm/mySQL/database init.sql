CREATE DATABASE IF NOT EXISTS libraryMgm ;
CREATE TABLE IF NOT EXISTS libraryMgm.media(
    isbn BIGINT(14) NOT NULL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL,
    quantity INT(10) NOT NULL,
    medDesc VARCHAR(500),
    publishyr INT(4),
    genre VARCHAR(50),
    category VARCHAR(20)
    
);

CREATE TABLE IF NOT EXISTS libraryMgm.user_login(
    user_id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    user_password VARCHAR(50) NOT NULL,
    session_id VARCHAR(100) NOT NULL
);

INSERT INTO libraryMgm.user_login(user_id,username,user_password,session_id)
    VALUES
    (1, 'reidbowers','password',''),
    (2, 'schupp', 'grady', '');

INSERT INTO libraryMgm.media(isbn,title,author,quantity,medDesc,publishyr,genre,category)
    VALUES
    (89392781384231,'To Kill a Mockingbird','Harper Lee',2,'blah blah blah blah word count word count','1960','Fiction','Novel'),
    (75823930202321,'The Alchemist','Paul Coelho',1,'blah blah blah blah word count word count','1988','Fiction', 'Novel'),
    (38593010295245,'The Hunger Games','Suzanne Collins',6,'blah blah blah blah word count word count','2008','Fiction', 'Book'),
    (37849229136786,'The Da Vinci Code','Dan Brown',1,'blah blah blah blah word count word count','1996','Fiction', 'Book'),
    (37385930123829,'1984','George Orwell',2,'blah blah blah blah word count word count','1996','Fiction', 'Novel'),
    (27398501236930,'Freakonomics','Steven D. Levitt',0,'blah blah blah blah word count word count','2005','Nonfiction','Book'),
    (28305923442813,'Sapiens','Yuval Noah Harari',4,'blah blah blah blah word count word count','2011','Nonfiction', 'Book'),
    (58230922211238,'Fahrenheit 451','Ray Bradbury',1,'blah blah blah blah word count word count','1953','Fiction','Novel'),
    (90183745825923,'Lord of the Flies','William Golding',0,'blah blah blah blah word count word count','1954','Fiction', 'Novel');

