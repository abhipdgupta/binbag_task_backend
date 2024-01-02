const mongoose = require('mongoose')
const mongoUri = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri)
        console.log("Connected to mongodb");
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = { connectDB}
