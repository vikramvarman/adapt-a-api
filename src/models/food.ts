export type Food = {
  id: string;
  name: string;
  ingredients: string[];
  is_vegetarian: boolean;
  prep_time: number;
  cook_time: number;
  flavor_profile?: Flavor;
  course: Course;
  region: Region;
};

type Flavor = "bitter" | "sour" | "spicy" | "sweet";
type Course = "dessert" | "main" | "snack" | "starter";
type Region = "n" | "e" | "w" | "s" | "ne" | "c";
