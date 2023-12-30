import { useEffect, useState } from "react";
import { IDish } from "../types/IDish";

export const useFilteredDishes = (dishes: IDish[], type: string) => {
  const [filteredDishes, setFilteredDishes] = useState<IDish[]>(dishes);

  useEffect(() => {
    setFilteredDishes(dishes.filter(dish => type === "All" || dish.type === type));
  }, [dishes, type]);

  return filteredDishes;
}