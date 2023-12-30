import React, { FC } from "react";
import Layout from "../components/Layout";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useCart } from "../hooks/useCart";

interface Props {

}

const PaymentPage: FC<Props> = ({ }) => {

  return (
    <Layout>
      <Typography fontSize={30} sx={{ marginBottom: 2 }}>Payment</Typography>
      <Stack spacing={1} sx={{ justifyContent: "center", alignItems: "center" }}>
        <Typography>Payment finished successfully</Typography>
        <Button href="/" LinkComponent="a" variant="contained">Home page</Button>
      </Stack>
    </Layout>
  )
};

export default PaymentPage;