import { PrivateHandler } from "src/common/types/server";
import * as foodDal from "src/dal/food";

export const foodFindByIngredients: PrivateHandler = async (req, res) => {
  const time = parseInt(req.params.time);
  const dishes = await foodDal.findByMaxTotalTime(time);
  res.send({ dishes, total: dishes.length });
};
