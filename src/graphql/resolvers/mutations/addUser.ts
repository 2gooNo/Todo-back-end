import { UserModel } from "@/graphql/models/user_model";
import { CreateUserInput } from "@/generated/index";

export const addUser = async (
  _: any,
  { input }: { input: CreateUserInput }
) => {
  const { username, email, password } = input;

  try {
    const newUser = new UserModel({ username, email, password });
    await newUser.save();
    return newUser;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default addUser;
