CREATE DATABASE IF NOT EXISTS libraryMgm ;
CREATE TABLE IF NOT EXISTS libraryMgm.media(
    isbn BIGINT(14) NOT NULL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL,
    quantity INT(10) NOT NULL,
    medDesc VARCHAR(500),
    publishyr INT(4),
    genre VARCHAR(50)
    
);

INSERT INTO libraryMgm.media(isbn,title,author,quantity,medDesc,publishyr,genre)
    VALUES
    (89392781384231,'To Kill a Mockingbird','Harper Lee',2,'blah blah blah blah word count word count','1960','Fiction'),
    (75823930202321,'The Alchemist','Paul Coelho',1,'blah blah blah blah word count word count','1988','Fiction'),
    (38593010295245,'The Hunger Games','Suzanne Collins',6,'blah blah blah blah word count word count','2008','Fiction'),
    (37849229136786,'The Da Vinci Code','Dan Brown',1,'blah blah blah blah word count word count','1996','Fiction'),
    (37385930123829,'1984','George Orwell',2,'blah blah blah blah word count word count','1996','Fiction'),
    (27398501236930,'Freakonomics','Steven D. Levitt',0,'blah blah blah blah word count word count','2005','Nonfiction'),
    (28305923442813,'Sapiens','Yuval Noah Harari',4,'blah blah blah blah word count word count','2011','Nonfiction'),
    (58230922211238,'Fahrenheit 451','Ray Bradbury',1,'blah blah blah blah word count word count','1953','Fiction'),
    (90183745825923,'Lord of the Flies','William Golding',0,'blah blah blah blah word count word count','1954','Fiction');

