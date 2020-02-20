USE NORTHWIND;
-- SELECT * FROM EMPLOYEES;
-- SELECT CITY, COUNT(*) COUNT FROM EMPLOYEES GROUP BY CITY HAVING COUNT(*)>=2;
-- SELECT CITY, COUNT(*) COUNT FROM EMPLOYEES WHERE TITLE='Sales Representative'
-- GROUP BY CITY HAVING COUNT(*)>=2;
-- SELECT CITY FROM EMPLOYEES group by CITY;
-- SELECT distinct CITY FROM EMPLOYEES;

-- SELECT * from `ORDER DETAILS`;
-- desc `ORDER DETAILS`;
-- SELECT ProductID, sum(Quantity) SUM from `ORDER DETAILS` group by ProductID having sum(Quantity)<200;
-- SELECT ProductID, sum(Quantity) SUM from `ORDER DETAILS` group by ProductID;
-- SELECT ProductID, SUM(QUANTITY*UNITPRICE)/SUM(QUANTITY) AVG from `ORDER DETAILS`
-- group by ProductID having AVG<70 order by AVG desc;
-- SELECT * FROM ORDERS;
-- SELECT CUSTOMERID, COUNT(*) NUMOFORDER FROM ORDERS
-- GROUP BY CUSTOMERID;
-- SELECT * FROM ORDERS WHERE CUSTOMERID='ALFKI';-- 驗算

-- select lastname, birthdate, hiredate, year(hiredate)-year(birthdate) AGE from employees;
-- select datediff('2000-03-01','2000-02-01');
-- select companyname from customers
-- where customerid in(
-- 	select customerid
--     from orders
--     where orderdate between '1997-01-01' and '1997-12-31'
--     group by customerid
--     )
-- order by companyname;
