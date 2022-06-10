import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  orderProducts: [{ id: String, name: String, price: Number }],
  somaCart: {
    type: Number,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

// export default mongoose.model("Order", orderSchema);
const Order = mongoose.model("Order", orderSchema);
export default Order;
