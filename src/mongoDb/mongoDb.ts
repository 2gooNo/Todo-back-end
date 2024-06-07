import mongoose from "mongoose";

export default async function connectTodoDB() {
  await mongoose.connect(
    "mongodb+srv://new_user:test_password@tuguno.mzidixd.mongodb.net/todo?retryWrites=true&w=majority&appName=TuguNO"
  );
  console.log("To do database connected");
}
