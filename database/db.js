import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Error in connecting DV", error));
};


export default connectDB;