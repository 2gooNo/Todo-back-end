import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  teamName: { type: String, unique: true },
});

export const TeamModel =
  mongoose.models.team || mongoose.model("team", teamSchema);
