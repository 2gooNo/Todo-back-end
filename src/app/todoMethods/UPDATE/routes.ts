import connectTodoDB from "@/mongoDb/mongoDb";
import { TodoModel } from "@/models/todo-model";

export default async function POST(req: Request) {
  connectTodoDB();
  const body = await req.json();
  try {
    await TodoModel.findByIdAndUpdate(body.id, {
      status: true,
    });
    const allTodo = TodoModel.find();
    return Response.json({ allTodo: allTodo });
  } catch (err) {
    return Response.json({ message: err });
  }
}
