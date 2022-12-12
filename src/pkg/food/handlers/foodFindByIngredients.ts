import { PrivateHandler } from "src/common/types/server";
import * as foodDal from "src/dal/food";

export const foodFindByIngredients: PrivateHandler = async (req, res) => {
  const ingredients = req.query.findByIngredients;
  const dishes = await foodDal.findByIngredients(ingredients);
  res.send({ dishes, total: dishes.length });
};
