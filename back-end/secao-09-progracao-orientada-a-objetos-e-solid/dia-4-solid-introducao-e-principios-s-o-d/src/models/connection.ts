import mysql from 'mysql2/promise';

export default mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password', // senha do seu banco de dados
  database: 'TypeScriptExpress',
  port: 3306,
});