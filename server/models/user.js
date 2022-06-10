import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// export default mongoose.model("User", usuarioSchema); // essa linha precisou ficar abaixo do bcrypt para funcionar
const User = mongoose.model("User", usuarioSchema);

export default User;
