import connectTodoDB from "@/mongoDb/mongoDb";
import { TeamModel } from "@/models/teams-model";
connectTodoDB();

export const GET = (req: Request, res: any) => {
  try {
    const allTeam = TeamModel.find();
    return Response.json({ allTeam: allTeam });
  } catch (err) {
    return Response.json({ message: err });
  }
};

export const POST = async (req: Request) => {
  const body = await req.json();
  console.log(body);

  try {
    await TeamModel.create({
      name: body.name,
    });
    const allTeam = await TeamModel.find();

    return Response.json({ allTeam: allTeam });
  } catch (err) {
    return Response.json({ message: err });
  }
};
export const DELETE = () => {};
