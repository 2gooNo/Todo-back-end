import { UserModel } from "@/graphql/models/user_model";

export const getAllUser = async () => {
  try {
    const allUsers = await UserModel.find();
    return allUsers;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export default getAllUser;
