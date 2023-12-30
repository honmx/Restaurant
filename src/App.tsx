import React, { FC, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./data/router";
import { IDishWithQuantity } from "./types/IDishWithQuantity";
import { CartContext } from "./contexts/CartContext";

interface Props {

}

const App: FC<Props> = ({ }) => {

  const [cartDishes, setCartDishes] = useState<IDishWithQuantity[]>(JSON.parse(localStorage.getItem("cartDishes") || "[]"));

  return (
    <CartContext.Provider value={{ cartDishes, setCartDishes }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  )
};

export default App;