import React, { FC, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useGetDishes } from "../hooks/useGetDishes";
import DishCard from "../components/DishCard";
import { Box, CircularProgress, Grid, ListItemButton, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { getDishTypes } from "../helpers/getDishTypes";
import { capitalize } from "../helpers/capitalize";
import { useFilteredDishes } from "../hooks/useFilteredDishes";
import { CartContext } from "../contexts/CartContext";
import { IDish } from "../types/IDish";
import { useCart } from "../hooks/useCart";
import { IDishWithQuantity } from "../types/IDishWithQuantity";

interface Props {

}

const HomePage: FC<Props> = ({ }) => {

  const { dishes, isLoading } = useGetDishes();

  
  const { handleAddDishToCart } = useCart();

  const [selectedFitler, setSelectedFilter] = useState<string>("All");

  const filteredDishes = useFilteredDishes(dishes, selectedFitler);

  const handleFilterChange = (e: SelectChangeEvent<string>) => {
    setSelectedFilter(e.target.value);
  }

  if (isLoading) return <CircularProgress sx={{ position: "absolute", top: "50%", left: "50%", translate: "-50% -50%" }} />

  return (
    
      <Layout>
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
          <Typography fontSize={30}>Dishes</Typography>
          <Select value={selectedFitler} onChange={handleFilterChange} sx={{ width: "150px" }}>
            {
              ["All", ...getDishTypes(dishes)].map(dishType => (
                <MenuItem key={dishType} value={dishType}>{capitalize(dishType.split("-").join(" "))}</MenuItem>
              ))
            }
          </Select>
        </Stack>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1 }}>
          {
            filteredDishes.map(dish => (
              <DishCard key={dish.id} dish={dish} />
            ))
          }
        </Box>
      </Layout>
  )
};

export default HomePage;