import { useContext, useEffect, useState } from "react";
import { IDish } from "../types/IDish";
import { CartContext } from "../contexts/CartContext";

export const useCart = () => {
  const { cartDishes, setCartDishes } = useContext(CartContext);

  useEffect(() => {
    localStorage.setItem("cartDishes", JSON.stringify(cartDishes));
  }, [cartDishes]);

  const handleAddDishToCart = (dish: IDish) => {
    if (cartDishes.find(cartDish => cartDish.id === dish.id)) return;

    setCartDishes([...cartDishes, { ...dish, quantity: 1 }]);
  }

  return { cartDishes, setCartDishes, handleAddDishToCart };
}