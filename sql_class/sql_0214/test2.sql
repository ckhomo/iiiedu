-- use class;
-- show tables;
-- select * from mask;
create database mytest1;
use mytest1;

drop tables tb1,tb2;
create table tb1(id int, f1 varchar(10));
create table tb2(id int, f1 varchar(10), tb1id int);
desc tb1;
select * from tb1;
desc tb2;
select * from tb2;
insert into tb1 values (1,'A'),(2,'B'),(3,'C');
insert into tb2 values (11,'AAAA',1),(22,'BBB',2),(33,'CCC',3);
-- Fusion!
select tb1.id id1, tb1.f1, tb2.id id2, tb2.f1, tb2.tb1id
from tb1, tb2
where tb1.id = tb2.tb1id;

-- copy table from another database.
-- CREATE TABLE my_mask LIKE class.mask;
-- INSERT my_mask SELECT * FROM class.mask;

insert into tb1 values (4,'D');
insert into tb2 values (44,'DDD',7),(55,'EEE',5);

SET SQL_SAFE_UPDATES=0;
DELETE FROM tb2 WHERE id>44;
SET SQL_SAFE_UPDATES=1;

select tb1.id id1, tb1.f1, tb2.id id2, tb2.f1, tb2.tb1id
from tb1 join tb2 on (tb1.id=tb2.tb1id);

select tb1.id id1, tb1.f1, tb2.id id2, tb2.f1, tb2.tb1id
from tb1 left join tb2 on (tb1.id=tb2.tb1id);

select tb1.id id1, tb1.f1, tb2.id id2, tb2.f1, tb2.tb1id
from tb1 right join tb2 on (tb1.id=tb2.tb1id);