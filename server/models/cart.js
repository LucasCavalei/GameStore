import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

// export default mongoose.model("Cart", cartSchema);
const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
