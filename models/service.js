import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },    
})

const Service = mongoose.model("service", serviceSchema);

export default Service;


