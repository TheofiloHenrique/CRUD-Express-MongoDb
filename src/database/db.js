import mongoose from "mongoose";

async function dbConection() {
  await mongoose.connect(process.env.MONGO_URL);
}

export default dbConection;
