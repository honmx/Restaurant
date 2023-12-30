import { Container } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props extends PropsWithChildren {
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", overflow: "hidden", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: "1 1 0", marginTop: "80px", marginBottom: "40px" }}>
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  )
};

export default Layout;