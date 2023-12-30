import { Dispatch, SetStateAction, createContext } from "react";
import { IDish } from "../types/IDish";
import { IDishWithQuantity } from "../types/IDishWithQuantity";

interface ICartContext {
  cartDishes: IDishWithQuantity[];
  setCartDishes: Dispatch<SetStateAction<IDishWithQuantity[]>>;
}

export const CartContext = createContext<ICartContext>({
  cartDishes: [],
  setCartDishes: () => {}
});