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
    "username": "b7ea6b021ac4ea",
    "password": "c77b1e50",
    "database": "heroku_7b0de79374037da",
    "host": "us-cdbr-east-02.cleardb.com",
    "port": 3306,
    "dialect": "mysql"
  }
}