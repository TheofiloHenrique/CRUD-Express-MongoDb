import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  age: {
    type: Number,
   
  },
  address: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Contact", contactSchema);
