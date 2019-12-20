import mongoose from 'mongoose';

const ToolSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Tool', ToolSchema);
