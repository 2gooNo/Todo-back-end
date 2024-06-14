import { TodoModel } from "@/graphql/models/todo-model";

export const getAllTodo = async () => {
  try {
    const allTodo = await TodoModel.find();
    return allTodo;
  } catch (err) {
    return err;
  }
};
