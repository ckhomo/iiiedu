use northwind;
-- A join B, B join A
-- 1
select o.orderid, e.firstname, c.companyname
from orders o
	join employees e on (e.employeeid = o.employeeid)
    join customers c on (c.customerid=o.customerid)
order by o.orderid;
-- 2
select o.orderid, e.firstname, c.companyname
from employees e
	join orders o on (e.employeeid = o.employeeid)
    join customers c on (c.customerid = o.customerid)
order by o.orderid;
-- 3
select o.orderid, e.firstname, c.companyname
from customers c
	join orders o on (c.customerid = o.customerid)
	join employees e on (e.employeeid = o.employeeid)
order by o.orderid;
-- 4
select o.orderid, e.firstname, c.companyname
from orders o, employees e, customers c
where (o.customerid = c.customerid) and (o.employeeid = e.employeeid)
order by o.orderid;
-- show customer company name, which total order>15, 1997+
select c.companyname, count(o.orderid) numoforder
from customers c
	join orders o on (c.customerid = o.customerid)
where o.orderdate >="1997-01-01"
group by c.companyname
having numoforder>=15
order by numoforder desc;
-- show customer company which pirce>10000
select c.companyname, o.orderid,
od.unitprice*od.quantity*(1-od.discount) pricesum
from `order details` od
	join orders o on (o.orderid = od.orderid)
    join customers c on (o.customerid = c.customerid)
where od.unitprice*od.quantity*(1-od.discount) > 10000
order by pricesum desc;
-- compare city/country of employees & customers
select city, country from customers;
select city, country from employees;
select employeeid, lastname, city, country
from employees
where row(city, country) in (select city, country from employees);

select * from `order details`;
select * from products;
-- get lowest prices for all products.
select productid, min(unitprice) from `order details`
where productid <100 group by productid
order by productid asc;
-- for check result above.
select productid, unitprice
from `order details`
where productid=56
order by unitprice asc;

select distinct od.productid, od.unitprice
from `order details` od
where od.unitprice =(
 select min(unitprice)
 from `order details` od2
 where od2.productid = od.productid
)
order by od.productid;
-- Sales ranking:
-- set sql_mode = 'ONLY_FULL_GROUP_BY' effects using().
-- 1
select e.employeeid, o.orderid,
sum(od.unitprice*od.quantity*(1-od.discount)) total
from orders o
	join `order details` od using(orderid)
	join employees e using(employeeid)
group by e.employeeid
order by total desc;
-- 2
select e.employeeid, e.lastname,
sum(od.unitprice*od.quantity*(1-od.discount)) total
from employees e
	join orders o on (e.employeeid = o.employeeid)
    join `order details` od on (o.orderid = od.orderid)
group by e.employeeid
order by total desc;
-- check result:
select sum(unitprice*quantity*(1-discount)) total
from `order details`
	where orderid in(
		select orderid from orders
        where employeeid = 7
	);
-- Global variables
set sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
set sql_mode='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
show variables like 'sql%';
show variables like '%safe%';
--
select p.productname, s.companyname
from products p
	-- join suppliers s on (p.supplierid = s.supplierid)
    join suppliers s using(supplierid) -- when two column have same name.
order by s.companyname;