var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('vedioapp.db');

db.serialize(function () {
  //db.run("Server File Executed");
  // CREATE TABLE
  console.log('Creating table...');

  // db.run(
  //   'create table tblcretenewgroups (group_Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,group_name VARCHAR,group_contacts)',
  // );

  // db.run(
  //   'create table tblcontactgroups (group_Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,contact_name VARCHAR contact_number INTEGER)',
  // );

  db.run("Insert into tblcontactgroups values(1,'Ali',2025550175)");

  // console.log("Table created successfully");
  // CREATE ATTENDANCE TABLE
  // console.log("Creating table...");

  //db.run('ALTER TABLE tblcontactgroups ADD COLUMN contact_number varchar');
  //db.run("drop table Students ");
  //db.run('update Students set img="avatar.jpg" where student_id=2 ');
  // db.run(
  //   "Insert into Students values(null,'0001','Ali',18,'Ikram','rwp','03121234567','3-12-2020','Avatar.jpg')"
  // );
  //   db.run(
  //     "Insert into Students values(null,'Zai',20,'Hussain','rwp','03121234567','3-12-2020')"
  //   );
  // DROPE TABLE QUERY
  // console.log("Deleting table...");
  // db.run("DROP TABLE Attendance");
  // console.log("Table deleted successfully");
});

db.close();
