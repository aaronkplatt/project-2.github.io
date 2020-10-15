module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "snake_db",
    "host": "127.0.0.1",
    "port": process.env.DB_PORT || 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "taoxr1ddmewcsy7p",
    "password": "k5r3rq00awicwmkt",
    "database": "qh7ebbik152o26gf",
    "host": "nnmeqdrilkem9ked.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
    "port": 3306
  }
}
