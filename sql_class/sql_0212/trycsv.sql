-- create database maskdata;
-- show databases;
-- use class;
-- select * from bk_stu;
-- select * from bk_stu where cid%2=0;
-- select * from bk_stu where caddr like '%三民%' or caddr like '%中央%';
use class;
-- drop table MASK;
-- create TABLE MASK (
--     -- cid INT NOT NULL AUTO_INCREMENT,
--     cdigit VARCHAR(255) NOT NULL,
--     ctitle VARCHAR(255) NOT NULL,
--     cadrs VARCHAR(255) NOT NULL,
--     cphone VARCHAR(255) NOT NULL,
--     remAdult INT NOT NULL,
--     remChild INT NOT NULL,
--     ctime VARCHAR(255) NOT NULL,
--     PRIMARY KEY (CDIGIT)
-- );
LOAD DATA INFILE 'C:/classdata/sql_class/sql_0212/maskdata.csv' 
INTO TABLE MASK
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
-- SHOW GLOBAL VARIABLES LIKE '%secure%';
-- I set the read-only golbal variable secure_file_priv=''(empty). Which allow files to import/export.
select * from mask;
-- select @@basedir;