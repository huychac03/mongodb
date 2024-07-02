// init-mongo-users.js
db = db.getSiblingDB('admin');

db.createUser({
  user: "admin",
  pwd: "password",
  roles: ["root"]
});

db.createUser({
  user: "develop",
  pwd: "develop_password",
  roles: [{ role: "readWriteAnyDatabase", db: "admin" }]
});