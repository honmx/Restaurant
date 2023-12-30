import { useEffect, useState } from "react"
import { IDish } from "../types/IDish"
import catalogService from "../services/catalogService";

export const useGetDishes = () => {
  const [dishes, setDishes] = useState<IDish[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const dishes = await catalogService.getDishes();
        setDishes(dishes);
      } catch (error) {
        setError("An error occured");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { dishes, isLoading, error };
}