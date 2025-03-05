import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  todos: [
    {
      title: String,
      status: Boolean,
      _id: String,
    },
  ],
});

export const UserModel =
  mongoose.models.User || mongoose.model("User", userSchema);
