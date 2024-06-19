import { UserModel } from "@/graphql/models/user-model";
import { AddUserInput } from "@/generated";
import bcrypt from "bcrypt";

export const createUser = async (
  _: any,
  { input }: { input: AddUserInput }
) => {
  const { userName, password, email } = input;

  try {
    const hashedPassword = await bcrypt.hash(password || "", 10);
    await UserModel.create({
      userName: userName,
      password: hashedPassword,
      email: email,
      createdOn: new Date(),
    });
    const allUsers = await UserModel.find();

    return allUsers;
  } catch (err) {
    return err;
  }
};
