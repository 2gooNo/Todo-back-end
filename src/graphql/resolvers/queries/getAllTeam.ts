import { TeamModel } from "@/graphql/models/teams-model";

export const getAllTeam = async () => {
  try {
    const allTeam = await TeamModel.find();
    return allTeam;
  } catch (err) {
    return err;
  }
};
