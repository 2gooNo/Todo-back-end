import { TodoModel } from "@/graphql/models/todo-model";
import { DeleteTodoInput } from "@/generated";

export const deleteTodo = async (
  _: any,
  { input }: { input: DeleteTodoInput }
) => {
  const { id } = input;

  try {
    await TodoModel.findByIdAndDelete(id);
    const allTodo = await TodoModel.find();

    return allTodo;
  } catch (err) {
    console.log(err);
    return err;
  }
};
