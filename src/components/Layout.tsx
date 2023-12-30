import { Container } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Container>
      {children}      
    </Container>
  )
};

export default Layout;