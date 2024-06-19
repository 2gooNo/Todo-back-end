// models/todo-model.js
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: Boolean, default: false },
  team: { type: String, required: true },
  createdOn: Date,
});

export const TodoModel =
  mongoose.models.todo || mongoose.model("todo", todoSchema);
