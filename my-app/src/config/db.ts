import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'your_password',
  database: process.env.DB_NAME || 'chitramela',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test the connection
pool.getConnection()
    .then(async connection => {
        console.log('Database connected successfully');
        // Test a simple query
        try {
            const [result] = await connection.query('SELECT 1');
            console.log('Query test successful');
        } catch (err) {
            console.error('Query test failed:', err);
        }
        connection.release();
    })
    .catch(err => {
        console.error('Database connection error:', err);
        console.error('Connection config:', {
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            database: process.env.DB_NAME || 'chitramela',
        });
    });

export { pool };