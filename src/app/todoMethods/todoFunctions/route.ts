import connectTodoDB from "@/mongoDb/mongoDb";
import { TodoModel } from "@/models/todo-model";
connectTodoDB();

export const GET = (req: Request) => {
  try {
    const allTodo = TodoModel.find();
    return Response.json({ allTodo: allTodo });
  } catch (err) {
    return Response.json({ message: err });
  }
};

export const POST = async (req: Request) => {
  const body = await req.json();
  console.log(body);

  try {
    await TodoModel.create({
      title: body.title,
      status: body.status,
      team: body.team,
    });
    const allTodo = await TodoModel.find();

    return Response.json({ allTodo: allTodo });
  } catch (err) {
    return Response.json({ message: err });
  }
};
export const DELETE = () => {};
