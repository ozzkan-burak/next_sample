import React from "react";
import { getCustomers, getCustomerById } from "../network/APIs";
import Layout from "./Layout";

const Home = ({ data, data2 }) => {
  <Layout />
};

export async function getServerSideProps() {
  const data = await getCustomers();
  const data2 = await getCustomerById(1);
  return { props: { data, data2 } };
}
export default Home;
