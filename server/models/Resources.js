import mongoose from "mongoose";

const ResourceSchema = mongoose.Schema({
  city: {
    type: String,
    required: [true, "Please add a city"],
  },
  distributor: {
    type: String,
    required: [true, "Please add a distributor"],
  },
  restype: {
    type: String,
    required: [true, "Please add a restype"],
  },
  extrainfo: {
    type: String,
    required: [true, "Please add a extrainfo"],
  },
  helpline: {
    type: Number,
    required: [true, "Please add a helpline"],
  },
});

const Resource = mongoose.model("Resource", ResourceSchema);

export default Resource;
