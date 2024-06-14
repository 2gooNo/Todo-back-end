import { TodoModel } from "@/graphql/models/todo-model";
import { CreateTodoInput } from "@/graphql/generated/client";

export const addTodo = async (
  _: any,
  { input }: { input: CreateTodoInput }
) => {
  const { title, status, team } = input;

  try {
    await TodoModel.create({
      title: title,
      status: status,
      team: team,
      createdOn: new Date(),
    });
    const allTodo = await TodoModel.find();

    return allTodo;
  } catch (err) {
    return err;
  }
};
