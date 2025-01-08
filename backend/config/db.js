import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        const mongoUrl = process.env.MONGO_URL;
        if (!mongoUrl) {
            throw new Error('MONGO_URL is not defined');
        }
        await mongoose.connect(mongoUrl);
        console.log(`Connected to database at ${mongoose.connection.host}`);
    } catch (error) {
        console.log('DB Error:', error.message);
    }
};

// Use named export
export { connectDb };
