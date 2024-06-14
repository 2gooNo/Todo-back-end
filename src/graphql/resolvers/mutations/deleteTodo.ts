import { TodoModel } from "@/graphql/models/todo-model";
import { TodoId } from "@/graphql/generated/client";

export const deleteTodo = async (_: any, { input }: { input: TodoId }) => {
  const id = input;

  try {
    await TodoModel.findByIdAndDelete(id);
    const allTodo = await TodoModel.find();

    return allTodo;
  } catch (err) {
    return err;
  }
};
