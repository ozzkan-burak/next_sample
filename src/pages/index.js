import React from "react";
import { getProducts } from "../network/APIs";
import Layout from "./Layout";

const Home = ({ data }) => {
  return (
    <Layout />
  )
};

export async function getServerSideProps() {
  const data = await getProducts();
  return { props: { data } };
}
export default Home;
