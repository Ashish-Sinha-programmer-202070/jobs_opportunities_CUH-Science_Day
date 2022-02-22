const { Pool } = require("pg");

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "intership",
  password: "Ash@backend",
  port: 5432,
};

const pool = new Pool(credentials);

module.exports = {
    query: (text,params)=>{return pool.query(text,params)}
}