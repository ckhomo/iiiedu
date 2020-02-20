create database coffeeDB;
show databases;
use coffeeDB;
show tables;
create table members (id int unsigned primary key auto_increment,account varchar(20),passwd varchar(256),birthday date);
-- Password: will be encrypted! Makes it longer when stored in database.
insert into members (account,passwd,birthday) values
('ckhomo', 's9001490203', '1995-08-24');
select * from members;

create table cart (id int unsigned primary key auto_increment, memberId int, orderId varchar(20));
desc cart;

-- enables rollback;commit;
set autocommit=0; -- 關閉自動寫入
set autocommit=1; -- 開啟自動寫入
rollback; commit;
