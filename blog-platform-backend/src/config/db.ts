import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log('MongoDB connected...');
    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
