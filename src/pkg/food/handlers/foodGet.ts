import { PrivateHandler } from "src/common/types/server";
import * as foodDal from "src/dal/food";

export const foodGet: PrivateHandler = async (req, res) => {
  const id = req.params.id;
  const dish = await foodDal.getById(id);
  res.send({ dish });
};
