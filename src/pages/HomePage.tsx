import React, { FC, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";

interface Props {

}

const HomePage: FC<Props> = ({ }) => {

  useEffect(() => {
    (async () => {
      const { data: res } = await axios.get("https://tiny-blue-vulture-shoe.cyclic.app/burgers");
      console.log(res);
    })();
  }, []);

  return (
    <Layout>
      home page
    </Layout>
  )
};

export default HomePage;