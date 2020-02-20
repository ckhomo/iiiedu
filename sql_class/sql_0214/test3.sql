use class;
select * from students;
-- View:
drop view myview1, myview2;
create view myView1 as
select * from bk_stu where csex= 'F';
create view myView2 as
select * from bk_stu where csex= 'M';
show tables;
select * from myview1;
-- CREATE TABLE bkstu LIKE students;
-- INSERT bkstu SELECT * FROM students;
-- ALTER TABLE bkstu
-- RENAME TO bk_stu;
alter table bk_stu add primary key(cid);
alter table bk_stu add unique(cemail);
alter table bk_stu add index index1(csex);
desc bk_Stu;

-- Index:
create index index2 on bk_stu(cbirthday);
show indexes from bk_stu;
drop index index2 on bk_stu;

-- blob(data type): Binary Large OBject.

-- autocommit: 自動寫入功能(0為關閉)
-- set autocommit=0;
-- set autocommit=1;

-- rollback;
-- commit;

-- trigger: delimiter:
