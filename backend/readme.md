https://sequelize.org/master/manual/getting-started.html

```
npm install --save pg pg-hstore

const sequelize = new Sequelize('postgres://postgres@localhost:5432/fellowMVC');
```
Commands to create new DB
```
psql

create database fellowMVC;

\c fellowmvc;
```
https://www.postgresqltutorial.com/psql-commands/
```
psql -d fellowmvc;

switch db
\c dbname;
```
