import { UserModel } from "@/graphql/models/user-model";

export const getAllUser = async () => {
  try {
    const allUser = await UserModel.find();
    return allUser;
  } catch (err) {
    return err;
  }
};
