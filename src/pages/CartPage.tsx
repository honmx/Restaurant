import React, { FC, useEffect } from "react";
import Layout from "../components/Layout";
import { useGetDishes } from "../hooks/useGetDishes";
import DishCard from "../components/DishCard";
import { useCart } from "../hooks/useCart";
import CartDishCard from "../components/CartDishCard";
import { Box, Button, Stack, Typography } from "@mui/material";

interface Props {

}

const CartPage: FC<Props> = ({ }) => {

  const { cartDishes, setCartDishes } = useCart();

  const handleBuyClick = () => {
    setCartDishes([]);
  }

  return (
    <Layout>
      <Typography fontSize={30} sx={{ marginBottom: 2 }}>Cart</Typography>
      {
        cartDishes.length > 0 && <>
          <Stack spacing={1} sx={{ marginBottom: 2 }}>
            {
              cartDishes.map(dish => <CartDishCard key={dish.id} dish={dish} />)
            }
          </Stack>
          <Stack spacing={1} sx={{ alignItems: "flex-end" }}>
            <Typography fontSize={24}>Total price: ${cartDishes.reduce((acc, cur) => acc += Number((cur.price * cur.quantity).toFixed(2)), 0)}</Typography>
            <Button href="/payment" LinkComponent="a" variant="contained" onClick={handleBuyClick}>Buy</Button>
          </Stack>
        </>
      }
      {
        !cartDishes.length &&
        <Typography>The cart is empty</Typography>
      }
    </Layout>
  )
};

export default CartPage;