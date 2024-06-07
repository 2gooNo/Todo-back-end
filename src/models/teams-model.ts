import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: { type: String, unique: true },
});

export const TeamModel =
  mongoose.models.team || mongoose.model("team", teamSchema);
