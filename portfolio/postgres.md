**Meta Description:** PostgreSQL is an open-source Object-Relational Database Management System (ORDBMS) capable of enterprise-level data control with SQL support.

# What is PostgreSQL?

PostgreSQL, pronounced “Postgres Q L” (or just Postgres, for short), is an open-source Object-Relational Database Management System (ORDBMS). Postgres is primarily based on the relational database model. However, it supports object-oriented model features. It is often referred to as an RDBMS for this reason.

* What is a relational database?
    * Relational databases store data in tables. Where each table is a named collection of rows and the specific data types are named columns. 
* How does Postgres incorporate object-oriented database model features? 
    * Postgres supports classes, inheritance, structured data types, functions, triggers, rules, and transaction integrity — all of which are object-oriented concepts that Postgres can implement. These features provide additional flexibility and power to the DBMS.  

## What is PostgreSQL used for?

Databases contain a collection of data to which users or applications can connect. All DBMSs are tools used to interface with data, providing storage, retrieval, and querying functionalities. Postgres is one of these tools. It is used to make databases, called clusters, with tables, schemas, objects, and triggers. 

PostgreSQL has enterprise-level capabilities, with Apple, Netflix, and Instagram counted amongst its users. It is popular for data management and warehousing because of its scalability, security, and overall performance. 

>“PostgreSQL is highly extensible. For example, you can define your own data types, build out custom functions, even write code from different programming languages without recompiling your database.” - [Postgresql](https://www.postgresql.org/about/)

Given that Postgres is open-source, it is never a final product. PostgreSQL’s Global Development Group supports major releases for up to five years from release, so updated versions host the newest data storage and management methods — evident in their [feature matrix](https://www.postgresql.org/about/featurematrix/). 

## Main features of PostgreSQL

As new versions of Postgres are released, more features are at the disposal of data scientists. As you can see in the feature matrix, the list is exhaustive, but a few are essential to PostgreSQL — listed below. 

### SQL 

Postgres mostly conforms to Standard Query Language (SQL) syntax, although it differs in some areas to preserve critical features. [SQL](https://www.codecademy.com/resources/blog/what-is-sql/) is simply a programming language used to manage relational databases. This is where the difference between SQL and PostgreSQL becomes clear: Postgres is an application that manages databases by implementing SQL commands. Previous versions of Postgres used the PostQUEL language. 

```SQL
//creating a new table 
CREATE TABLE participant (
	first_name varchar(80), 
	last_name varchar(80),
);
```

The above example shows how to create a table with SQL in Postgres. Here, the name of the table is `participant`. The column names are `first_name` and `last_name`, while `varchar(80)` specifies the column type. So, in this example, both column types allow for a string of 80 characters.

```SQL
//populating a table 
INSERT INTO participant VALUE (‘Bob’, ‘Ross’);
```

This second example is of populating the `participant` table with rows via the `INSERT INTO` statement. The row entry `VALUE` for `first_name` is “Bob,” and for `last_name` is “Ross.” 

```SQL
//querying a table 
SELECT first_name, last_name FROM participant;

//returned data
first_name | last_name 
-----------+-----------
Bob        | Ross
```

Querying allows programmers to retrieve data from a table. `SELECT`, in the above example, tells Postgres what columns to query, and `FROM` what table. The second half of the example shows the returned data that Postgres outputs for `participant`, in which there is only one row of data: (Mr.) Bob Ross.

### Architecture

PostgreSQL works on a distributed application framework called the client/server model. A single session of PostgreSQL cooperatively works with the client program(s) and the server program. The client and server processes communicate over a TCP/IP network connection. 
* The server performs actions on behalf of the client. Also, database files are manageable. 
* The client application (frontend) takes on many forms, such as a database maintenance tool or text-oriented tool for working with databases. 

### Transaction support
Databases commonly store transactions, so they need to be clean operations that don’t affect other stored values. With this in mind, PostgreSQL provides full support of ACID properties. ACID stands for atomicity, consistency, isolation, and durability. 

These properties help maintain valid and reliable data in the case of errors or mishaps like power outages. This feature is especially critical for databases that work with currencies, such as logging transactions between bank accounts. 

>“The essential point of a transaction is that it bundles multiple steps into a single, all-or-nothing operation. The intermediate states between the steps are not visible to other concurrent transactions, and if some failure occurs that prevents the transaction from completing, then none of the steps affect the database at all.” - [Postgres transactions](https://www.postgresql.org/docs/8.3/tutorial-transactions.html)

## Stability and security

Other core features of Postgres are its stability and security systems to protect from data corruption. As for stability, the DBMS provides support for hot standby servers, which makes point-in-time recovery and replication easy.

Postgres’s interface allows for database access control and user management, such that only assigned members can work with specific data ⁠— including row-level and column-level security measures. 

Furthermore, PostgreSQL supports secure SSL connections that create encrypted links between the client and server applications. The DBMS also provides authentication methods for passwords, client certificates, and external services. 

## Continue learning 
Learn how to [install and use PostgreSQL](https://www.codecademy.com/articles/installing-and-using-postgresql-locally) with our extensive range of courses. PostgreSQL works on macOS, Windows, and Linux. For more comprehensive coverage of the ORDBMS, we have [beginner-friendly courses](https://www.codecademy.com/learn/paths/design-databases-with-postgresql), which you can try for free. After installing, one example of a free project you can take on is [making a database of movies](https://www.codecademy.com/paths/design-databases-with-postgresql/tracks/what-is-a-database/modules/using-postgresql-on-your-own-computer/informationals/off-platform-project-making-a-database-of-movies) with our off-platform path project. 

When a programmer selects a DBMS to use, they must first consider all available types based on capabilities. Other types of DBMS include distributed, hierarchical, and network. Relational DBMSs, however, are a popular option for programmers because they have a friendly user interface, and SQL is easy to learn for beginners. PostgreSQL offers the perks of a relational DBMS and additionally has object-oriented features thrown in. You can browse our [complete catalog](https://www.codecademy.com/catalog) to find comprehensive courses that will help you manage datasets. 
