import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  teamName: String,
});

export const TeamModel =
  mongoose.models.team || mongoose.model("team", teamSchema);
