use class;
-- select CNAME,
-- CASE
-- 	WHEN CSEX='F' THEN '小姐'
--     WHEN CSEX='M' THEN '先生'
-- END
-- 'NAMETAG' FROM STUDENTS;
-- select CONCAT(CNAME,' ',
-- CASE
-- 	WHEN CSEX='F' THEN '小姐'
--     WHEN CSEX='M' THEN '先生'
-- END
-- ,' 收')
-- 'RECEIVE' FROM STUDENTS;
-- SELECT CNAME, IF(CSEX='F','小姐','先生') FROM STUDENTS;
-- SELECT CONCAT(CNAME,' ',IF(CSEX='F','小姐','先生'))'FULL', CADDR  FROM STUDENTS;
-- SELECT FLOOR(RAND()*101);
-- SELECT * FROM BKSTU;
-- CREATE TABLE BKSTU SELECT * FROM STUDENTS;
-- ALTER TABLE BKSTU ADD SCORE INT;
-- DESC BKSTU;
-- SET SQL_SAFE_UPDATES=0;
-- UPDATE BKSTU SET SCORE = FLOOR(RAND()*101) WHERE CID<100;
-- SET SQL_SAFE_UPDATES=1;
-- SELECT * FROM BKSTU;
-- SELECT CNAME,SCORE,
-- CASE
-- 	WHEN SCORE>=90 THEN "A"
--     WHEN SCORE<90 && SCORE>=80 THEN "B"
--     WHEN SCORE<80 && SCORE>=70 THEN "C"
--     WHEN SCORE<70 && SCORE>=60 THEN "D"
--     WHEN SCORE<60 THEN "F"
-- END 'RESULT'
-- FROM BKSTU ORDER BY SCORE ASC;
-- SELECT CSEX, COUNT(*) FROM BKSTU GROUP BY CSEX;
-- SELECT COUNT(*) FROM BKSTU;
SELECT CSEX, COUNT(*) COUNT, SUM(SCORE) SUM, AVG(SCORE) AVG, MIN(SCORE) MIN, MAX(SCORE) MAX FROM BKSTU GROUP BY CSEX;
SELECT RESULT, COUNT(*) COUNT, SUM(SCORE) SUM, AVG(SCORE) AVG, MIN(SCORE) MIN, MAX(SCORE) MAX FROM BKSTU GROUP BY RESULT;
-- ALTER TABLE BKSTU DROP COLUMN RESULT;
-- ALTER TABLE BKSTU ADD RESULT VARCHAR(10);
-- SET SQL_SAFE_UPDATES=0;
-- UPDATE BKSTU SET RESULT =
-- CASE
-- 	WHEN SCORE>=90 THEN "A"
--     WHEN SCORE<90 && SCORE>=80 THEN "B"
--     WHEN SCORE<80 && SCORE>=70 THEN "C"
--     WHEN SCORE<70 && SCORE>=60 THEN "D"
--     WHEN SCORE<60 THEN "F"
-- END 
-- WHERE CID<100;
-- SET SQL_SAFE_UPDATES=1;
SELECT * FROM BKSTU;