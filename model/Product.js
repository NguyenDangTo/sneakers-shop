import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
      maxLength: 150,
    },
    title: {
      type: String,
      required: true,
      maxLength: 60,
    },
    brand: {
      type: String,
      required: true,
      maxLength: 60,
    },
    sizes: {
      type: [
        {
          size: { type: Number, required: true },
          price: { type: Number, required: true },
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
