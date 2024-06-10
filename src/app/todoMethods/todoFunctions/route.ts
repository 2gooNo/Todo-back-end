import connectTodoDB from "@/mongoDb/mongoDb";
import { TodoModel } from "@/models/todo-model";

export const GET = async (req: Request) => {
  connectTodoDB();
  try {
    const allTodo = await TodoModel.find();
    return Response.json({ allTodo: allTodo });
  } catch (err) {
    return Response.json({ message: err });
  }
};

export const POST = async (req: Request) => {
  connectTodoDB();
  const body = await req.json();
  console.log(body);

  try {
    await TodoModel.create({
      title: body.title,
      status: body.status,
      team: body.team,
      createdOn: new Date(),
    });
    const allTodo = await TodoModel.find();

    return Response.json({ allTodo: allTodo });
  } catch (err) {
    return Response.json({ message: err });
  }
};
export const DELETE = async (req: Request) => {
  connectTodoDB();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log(id);

  try {
    await TodoModel.findByIdAndDelete(id);
    const allTodo = await TodoModel.find();

    return Response.json({ allTodo: allTodo });
  } catch (err) {
    return Response.json({ message: err });
  }
};
