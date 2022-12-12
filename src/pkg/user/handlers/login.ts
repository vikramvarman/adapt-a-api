import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrivateHandler } from "src/common/types/server";
import * as userDal from "src/dal/user";

export const login: PrivateHandler = async (req, res) => {
  const { username, password } = req.body;

  const user = await userDal.getUserByUsername(username);

  if (!user) {
    return res.send("401");
  }
  const isAuthorized = await bcrypt.compare(password, user.password);
  if (!isAuthorized) {
    return res.send("401");
  }

  delete user.password;

  const accessToken = jwt.sign(user, process.env.JWT_SECRET);

  return res.json({
    accessToken: accessToken,
    id: user.id,
    username: user.username,
  });
};
