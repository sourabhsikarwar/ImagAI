import mongoose from "mongoose"

const connectDB = async () => {
    mongoose.set('strictQuery', true)
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('MongoDB Connected!')
    } catch (err) {
        console.error(err);
    }
}

export default connectDB