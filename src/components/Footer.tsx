import { Box, Container, Typography } from "@mui/material";
import React, { FC } from "react";

interface Props {

}

const Footer: FC<Props> = ({ }) => {
  return (
    <Box component="footer" sx={{ paddingTop: 2, paddingBottom: 2, backgroundColor: "#999" }}>
      <Container>
        <Typography fontSize={20} color="#FFFFFF">Footer</Typography>
      </Container>
    </Box>
  )
};

export default Footer;