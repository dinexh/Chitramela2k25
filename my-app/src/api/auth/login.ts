import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import jwt from 'jsonwebtoken';

const client = new MongoClient(process.env.MONGODB_URI);

async function connectDB() {
    await client.connect();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        await connectDB();
        const admin = await client.db('your_db_name').collection('admins').findOne({ username });

        if (admin && admin.password === password) {
            const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).json({ token });
        }

        return res.status(401).json({ message: 'Authentication failed' });
    }

    return res.status(405).json({ message: 'Method not allowed' });
} 