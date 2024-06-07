import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  status: Boolean,
  team: String,
});

export const TodoModel =
  mongoose.models.todo || mongoose.model("todo", todoSchema);
