import { IDish } from "../types/IDish";

export const getDishTypes = (dishes: IDish[]) => {
  return Array.from(new Set(dishes.map(dish => dish.type)));
}