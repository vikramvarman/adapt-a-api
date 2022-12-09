import { PublicHandler } from "./../../../common/types/server";
import bcrypt from "bcrypt";
import * as userDal from "src/dal/user";

export const signUp: PublicHandler = async (req, res) => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).send("username required");
  }

  if (!password) {
    return res.status(400).send("password required");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await userDal.createUser(username, hashedPassword);

  delete user.password;
  return res.json({ record: user });
  res.send("ok");
};
