import { UserModel } from "@/graphql/models/user_model";
import { UserInput } from "@/generated/index";

export const getUser = async (_: any, { input }: { input: UserInput }) => {
  const { email, password } = input;

  try {
    const user = await UserModel.findOne({ email, password });
    if (!user) {
      throw new Error("Invalid email or password");
    }
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getUser;
