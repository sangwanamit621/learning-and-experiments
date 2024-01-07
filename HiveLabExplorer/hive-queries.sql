-- Connecting to the hive using beeline
-- beeline -u jdbc:hive2://localhost:10000/default -n UserName -p Password -d org.apache.hive.jdbc.HiveDriver --command 
beeline -u jdbc:hive2://localhost:10000/default -n sant621@cluster-a3-m -d org.apache.hive.jdbc.HiveDriver

-- Create a database
CREATE DATABASE test_db;

--List databases
SHOW DATABASES;

--Drop database
DROP DATABASE test_db;

--Use current database to create tables 
USE my_db;

--Create table in database
CREATE TABLE emp (id INT, name STRING, dob DATE, dept_id INT);

--Insert data into table
INSERT INTO emp VALUES(1,'AMIT','1998-10-12',1);

--Insert multiple values at once
INSERT INTO emp VALUES (2,'ANK','2000-07-03',2),(3,'RAM','1990-03-03',4);

--View Schema of table
DESCRIBE emp;

--View detailed description about the table
DESCRIBE FORMATTED emp;

--view records from table
SELECT * FROM emp;

--Property to view the column name in hive cli
set hive.cli.print.header=true;

--Creating a new table where we will load data from a local csv file
CREATE TABLE dept (id INT, name STRING) ROW FORMAT DELIMITED FIELDS TERMINATED BY ',';

--ROW FORMAT DELIMITED indicates that fields in each row are separated by a specified delimiter.
--FIELDS TERMINATED BY ',' specifies that the delimiter used to separate fields in each row is a comma ','.


--Loading data into the table from locally stored file. LOCAL refers that file is stored in local system of machine and file:// specifies URI of local system
LOAD DATA LOCAL INPATH 'file:///config/workspace' INTO TABLE dept;

--Loading data into the table from hdfs stored file
--Note: When we LOAD DATA from hdfs location of machine then data is moved from current location to hive dataware house location
LOAD DATA INPATH '/data/dept_head/' INTO TABLE dept_head;

--Overwritting records in table
INSERT OVERWRITE TABLE emp SELECT id,name,'2023-12-20' AS dob, dept_id from emp where id=1;

--Appending records in table
INSERT INTO TABLE emp SELECT id,name,'2023-12-20' AS dob, dept_id FROM emp1;

--Note: into refers append and overwrite refers cleaning old records and then insert new records

--Set formatting options in hive to view column names
SET hive.cli.print.header=true;
SET hive.resultset.use.unique.column.names=false; --to show only column name instead of tableName.ColumnName

--Creating external tables in hive
CREATE EXTERNAL TABLE office (id int, city string) ROW FORMAT DELIMITED FIELDS TERMINATED BY ',' LOCATION '/data/office/'

--Creating a table with collection data_type array
CREATE TABLE skill(id int,name string, skills array<string>) ROW FORMAT DELIMITED FIELDS TERMINATED BY ',' COLLECTION ITEMS TERMINATED BY '|';

--Accessing element of collection item 
select id,name,skills[0] as best_skill from skill;

--Some array related functions
SELECT id,name,skills, SIZE(skills) as totalSkills, SORT_ARRAY(skills) AS sortedSkills, ARRAY_CONTAINS(skills,'Hadoop') AS knowHadoop FROM skill;

--Creating a table with collection data_type map
CREATE TABLE map_dt (name string, details MAP<STRING,STRING>) ROW FORMAT DELIMITED FIELDS TERMINATED BY ',' COLLECTION ITEMS TERMINATED BY '|' MAP KEYS TERMINATED BY ':';

--Functions related to map
SELECT name, details, SIZE(details) AS totalSize, MAP_KEYS(details) AS keys, MAP_VALUES(details) AS values from map_dt;


--storing data in parquet format in hive if source file is in csv format
--Steps:
--1. First create a table with csv file format
--2. load data into the table
--3. create a table which will load data from table which stores data in csv format

create table csv_tb(id int, name string) row format delimited fields terminated by ',';
load data inpath 'file:///home/amit/data.csv' into table csv_tb;

--we can use same method to create backup of a table
create table parquet_tb stored as parquet as select * from csv_tb;

--storing data in ORC format
create table data_orc STORED AS ORC as select * from csv_tb;

--Note: Hive works in more efficient manner for ORC formatted data as compare to any other data format. Similary, spark works in most efficient manner with parquet format.


--After creating the table in parquet and ORC formats we can delete the orignial table
drop table csv_tb;

--Using custom library for serde operations
--download jar catalog for serde Library to avoid library related error
-- wget https://repo1.maven.org/maven2/org/apache/hive/hcatalog/hive-hcatalog-core/0.14.0/hive-hcatalog-core-0.14.0.jar

--then in hive run the command: 
--add jar JarFilePath;
-- add jar file:///config/workspace/hive-hcatalog-core-0.14.0.jar;

--create table with custom serde library properties 
create table spl(name string, address_role string) row format serde "org.apache.hadoop.hive.serde2.OpenCSVSerde" with serdeproperties("separatorChar"=",","quoteChar="\"","escapeChar"="\\") stored as textfile  tblproperties("skip.header.line.count"="1");

#setting hive property to see the column names
set hive.cli.print.header=true;

--fetching the records
select * from spl;

--using serde library to load json data
create table json(name string, skills array<string>,details map<string,string>) row format serde 'org.apache.hive.hcatalog.data.JsonSerDe' stored as textfile;

load data inpath 'file:///config/workspace/json_data.csv' into table json;

--fetching the records
select * from json;

-- creating table where header is part of the csv file
create table sales ( ORDERNUMBER int, QUANTITYORDERED int, PRICEEACH float, ORDERLINENUMBER int, SALES float, STATUS string, QTR_ID int, MONTH_ID int, YEAR_ID int, PRODUCTLINE string, MSRP int, PRODUCTCODE string, PHONE string, CITY string, STATE string, POSTALCODE string, COUNTRY string, TERRITORY string, CONTACTLASTNAME string, CONTACTFIRSTNAME string, DEALSIZE string ) row format delimited fields terminated by ',' tblproperties("skip.header.line.count"="1") ;

--loading data into table
load data local inpath '/home/sangwanamit621/sales_order_data.csv' into table sales;

--Important properties related to reducer 
--In order to change the average load for a reducer (in bytes):                                                                                 
  set hive.exec.reducers.bytes.per.reducer=<number>                                                                                           
--In order to limit the maximum number of reducers:                                                                                             
  set hive.exec.reducers.max=<number>                                                                                                         
--In order to set a constant number of reducers:                                                                                                
  set mapreduce.job.reduces=<number> 

--setting number of reducers manually
set mapreduce.job.reduces = 3

--aggregation, group by and order by operations
select YEAR_ID as year, sum(SALES) as totalSalesAmount from sales group by YEAR_ID order by YEAR_ID desc;

--order by vs sort by
--In order by, number of reducers will be always 1 where as in sort by number of reducers can have manually given value(in our case 3) or number of reducers created by hive 
--order by gives output which is sorted for complete table where as sort by gives output which is sorted per reducer. For example: order by will give output like 1,1,2,3,3,4,5,5,5,6,7,7 where as if there are 3 reducers and we assume each reducer handles 4 values in this group(1,2,3,6),(3,4,5,7),(1,5,5,7) then output will be 1,2,3,6,3,4,5,7,1,5,5,7 so these values are sorted on reducer level but these are not sorted on table level like we get in order by

--creating a new table from output of aggregation operation
create table city_wise_sales as select city, round(sum(sales),2) as total_sales_amount from sales group by city;

--using order by 
select * from city_wise_sales order by city;

--using sort by 
select * from city_wise_sales sort by city;

--setting property hive.mapred.mode =strict
set hive.mapred.mode=strict
--this proper restricts us to do full scan of table if table is too large
--queries on partitioned tables are not permitted unless they include a partition filter in the WHERE clause
--It restricts ORDER BY operation without a LIMIT clause ( since it uses a single reducer which can choke your processing if not handled properly.
--The other type of query prevented is a Cartesian product


--creating orc file from table
create table sales_orc stored as ORC as select * from sales;

--creating partition table (static or dynamic both are created in same manner)
--parition key cannot be part of schema of partitioned table but it will appear in partitioned table
create table sale_data(order_id int, sale_amount float, year int) stored as orc partitioned by (country string);

--inserting data in partition table in static partition manner
--in static partition manner, we specify each value of parition column to create different partition tables in similar fashion

-- Note: Static partition is done using hive.mapred.mode=strict only.
insert overwrite table sale_data partition(country='USA') select orderNumber,sales, year_id from sales where country='USA';
insert overwrite table sale_data partition(country='France') select orderNumber,sales, year_id from sales where country='France';

--Creating dynamic paritioned table
-- for dynamic partitioning we have to enable this setting else we hive will not allow the query in which where clause is not mentioned
set hive.exec.dynamic.partition.mode=nonstrict;

--creating dynamic partition table
create table sales_dynm_part(order_id int, sales float, year int) partitioned by(country string) stored as orc;

--inserting data into table
insert overwrite table sales_dynm_part partition(country) select ordernumber,sales,year_id,country from sales;

--Creating partition using 2 columns
create table sale_year_country (sales float, city string, product_line string, quantity int, unitprice float) partitioned by(year_id int, country string) stored as orc;

--Inserting data into table
insert overwrite table sale_year_country partition(year_id,country) select sales,city,productline,quantityordered,priceeach,year_id ,country from sales;
-- #Note: we have to maintain the order of columns in select query else query will fail.


--getting sum of sales per year for country uk
select year_id, sum(sales) as totalsalesamount from sale_year_country where country='UK' group by year_id;

select country, sum(sales) as totalsalesamount from sale_year_country where year_id=2003 group by country;

select city, sum(sales) as totalsalesamount from sale_year_country where country='France' group by city, year_id order by totalsalesamount desc;




--Using UDFs in hive
--Note: While using transform for udf, we can only pass columns inside the transform function. we cannot do :
-- select country,city,transform(sale,product_line) using 'python test.py' as udf_col from sale_year_country; 
--We will get error

--adding a python file as resource which will contain udf 
add file /home/amit/upper.py;

--using the udf file
select transform(city) using 'python upper.py' as cityUpper from sale_year_country limit 3;

--adding a python file as resource which will contain udf 
add file /home/amit/multicolumn_udf.py;

--Passing multiple columns as input in udf function
select transform(product_line,quantity,unitprice) using 'python multicolumn_udf.py' as (product_category string, sale_amount float) from sale_year_country limit 20;

--WE have to set the property to allow hive to enforce bucketing
set hive.enforce.bucketing = True;


--Creating bucketing tables
--Note: While creating bucket tables, number of buckets of related tables should be multiple of each other like in emp table if we are creating 6 buckets then dept table must have 2 or 3 or 6 buckets while creating the dept bucket table. this helps hive in optimising the joins
create table emp(id int,name string,salary int, dept_id int) row format delimited fields terminated by ',';
load data local inpath '/home/sangwanamit621/emp_bucket.csv' into table emp;

create table dept(id int,name string) row format delimited fields terminated by ',';
load data local inpath '/home/sangwanamit621/dept_bucket.csv' into table dept;

create table emp_bucket(id int,name string,salary int,dept_id int) clustered by(dept_id) sorted by(dept_id,id) into 2 buckets;
insert overwrite table emp_bucket select * from emp;

create table dept_bucket(id int,name string) clustered by(id) sorted by(id) into 2 buckets;
insert overwrite table dept_bucket select * from dept;


--joins in hive
--In hive, we can perform joins(left,right,inner,full outer) in 4 different ways based on the size of data and approach we have followed while creating the tables.

-- To perform Reduce side join, we have to set this property in hive:
set hive.auto.convert.join=False;

--To perform Map side join, we have to set this property:
set hive.auto.convert.join=True; (Default set property by hive)

-- To perform Bucket Map join, we have to set these properties:
set hive.auto.convert.join=True;
set hive.optimize.bucketmapjoin=true;

-- To perform Sorted Merge Bucket Map join, we have to set these properties:
set hive.auto.convert.join=true;
set hive.auto.convert.sortmerge.join=true;
set hive.enforce.sortmergebucketmapjoin=false;
set hive.optimize.bucketmapjoin=true;
set hive.optimize.bucketmapjoin.sortedmerge=true;

--inner join query
select emp.id,emp.name,dept.name from emp inner join dept on emp.dept_id=dept.id;





