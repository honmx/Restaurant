import React, { FC, useState } from "react";
import { IDishWithQuantity } from "../types/IDishWithQuantity";
import { Box, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from "../hooks/useCart";

interface Props {
  dish: IDishWithQuantity;
}

const CartDishCard: FC<Props> = ({ dish }) => {

  const { cartDishes, setCartDishes } = useCart();

  const handleIncreaseCountClick = () => {
    setCartDishes(cartDishes.map(cartDish => cartDish.id === dish.id ? { ...dish, quantity: dish.quantity + 1 } : cartDish));
  }

  const handleDecreaseCountClick = () => {
    setCartDishes(cartDishes.map(cartDish => cartDish.id === dish.id ? { ...dish, quantity: dish.quantity - 1 || 1 } : cartDish));
  }

  const handleDeleteDish = () => {
    setCartDishes(cartDishes.filter(cartDish => cartDish.id !== dish.id));
  }

  return (
    <Paper elevation={10} sx={{ display: "flex", borderRadius: 3, overflow: "hidden" }}>
      <Grid container>
        <Grid item xs={4}>
          <Stack direction="row" spacing={1}>
            <Box sx={{ height: "100%" }}>
              <img src={dish.img} alt={dish.name} width={150} height={150} style={{ display: "block", objectFit: "cover" }} />
            </Box>
            <Stack direction="row" spacing={2} sx={{ padding: 1, justifyContent: "space-between", alignItems: "center" }}>
              <Typography>{dish.name}</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography>{dish.country}</Typography>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <IconButton size="small" onClick={handleDecreaseCountClick}>
              <RemoveIcon />
            </IconButton>
            <Typography>{dish.quantity}</Typography>
            <IconButton size="small" onClick={handleIncreaseCountClick}>
              <AddIcon />
            </IconButton>
          </Stack>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
            <Typography>${(dish.price * dish.quantity).toFixed(2)}</Typography>
            <IconButton size="small" onClick={handleDeleteDish}>
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  )
};

export default CartDishCard;