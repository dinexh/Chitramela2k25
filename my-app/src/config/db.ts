import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'chitramela',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test database connection immediately
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Database connection successful');
    
    // Test if we can query the users table
    const [rows] = await connection.query('SELECT COUNT(*) as count FROM users');
    console.log('✅ Users table accessible:', rows);
    
    connection.release();
  } catch (error: any) {
    console.error('❌ Database connection failed');
    console.error('Error code:', error.code);
    console.error('Error number:', error.errno);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    console.error('Connection details:', {
      host: 'localhost',
      user: process.env.DB_USER || 'root',
      database: process.env.DB_NAME || 'chitramela',
    });
  }
};

testConnection();

export { pool };