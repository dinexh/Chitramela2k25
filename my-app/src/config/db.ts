import { MongoClient } from 'mongodb';
import jwt from 'jsonwebtoken';

const client = new MongoClient(process.env.MONGODB_URI);

async function connectDB() {
    await client.connect();
    console.log("Connected to MongoDB");
}

async function authenticateAdmin(username: string, password: string) {
    const admin = await client.db('your_db_name').collection('admins').findOne({ username });
    if (admin && admin.password === password) {
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    }
    throw new Error('Authentication failed');
}

// ... existing code ...
