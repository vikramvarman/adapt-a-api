import { PrivateHandler } from "src/common/types/server";
import * as foodDal from "src/dal/food";

export const foodGetAll: PrivateHandler = async (req, res) => {
  const dishes = await foodDal.getAll();
  res.send({ dishes, total: dishes.length });
};
