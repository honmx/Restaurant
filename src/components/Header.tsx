import React, { FC } from "react";
import { AppBar, Badge, Box, Container, IconButton, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

interface Props {

}

const Header: FC<Props> = ({ }) => {

  const { cartDishes } = useCart();

  return (
    <AppBar>
      <Container>
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", paddingTop: 1, paddingBottom: 1, }}>
          <Link to="/" style={{ color: "#FFFFFF", textDecoration: "none" }}>
            <Typography fontSize={30} textTransform="uppercase">Restaurant</Typography>
          </Link>
          <Link to="/cart">
            <IconButton>
              <Badge badgeContent={cartDishes.reduce((acc, cur) => acc += cur.quantity, 0) || ""} color={cartDishes.length > 0 ? "secondary" : "default"}>
                <ShoppingCartIcon sx={{ color: "#FFFFFF" }} />
              </Badge>
            </IconButton>
          </Link>
        </Stack>
      </Container>
    </AppBar>
  )
};

export default Header;