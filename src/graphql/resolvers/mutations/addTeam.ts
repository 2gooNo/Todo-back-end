import { TeamModel } from "@/graphql/models/teams-model";
import { AddTeamInput } from "@/graphql/generated/client";
export const addTeam = async (
  _: any,
  { input }: { input: AddTeamInput },
  context: any
) => {
  const { teamName } = input;
  console.log("team", teamName);
  try {
    await TeamModel.create({
      teamName: teamName,
    });
    const allTeam = await TeamModel.find();

    return allTeam;
  } catch (err) {
    return err;
  }
};
