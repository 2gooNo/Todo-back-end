import { TodoModel } from "@/graphql/models/todo-model";
import { MarkAsDoneInput } from "@/generated";

export const markAsDone = async (
  _: any,
  { input }: { input: MarkAsDoneInput }
) => {
  const { todoId } = input;

  try {
    await TodoModel.findByIdAndUpdate(todoId, {
      status: true,
    });
    const allTodo = await TodoModel.find();

    return allTodo;
  } catch (err) {
    console.log(err);
    return err;
  }
};
