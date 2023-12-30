import React, { FC } from "react";
import { IDish } from "../types/IDish";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DoneIcon from "@mui/icons-material/Done";
import { IDishWithQuantity } from "../types/IDishWithQuantity";
import { useCart } from "../hooks/useCart";

interface Props {
  dish: IDish;
}

const DishCard: FC<Props> = ({ dish }) => {

  const { cartDishes, handleAddDishToCart } = useCart();

  return (
    <Paper elevation={10} sx={{ display: "inline-block", borderRadius: 3, overflow: "hidden" }}>
      <Box>
        <img src={dish.img} alt={dish.name} style={{ width: "100%", height: "100%", aspectRatio: 1, objectFit: "cover" }} />
      </Box>
      <Stack direction="row" spacing={2} sx={{ padding: 1, justifyContent: "space-between", alignItems: "center" }}>
        <Typography>{dish.name}</Typography>
        <IconButton onClick={() => handleAddDishToCart(dish)}>
          {
            cartDishes.find(cartDish => cartDish.id === dish.id)
              ? <DoneIcon />
              : <ShoppingCartIcon />
          }
        </IconButton>
      </Stack>
    </Paper>
  )
};

export default DishCard;