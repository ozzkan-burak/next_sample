import React from "react";
import { getCustomers, getCustomerById } from "../network/APIs";

const Home = ({ data, data2 }) => {
  console.log(data2);
  return <div>Home</div>;
};

export async function getServerSideProps() {
  const data = await getCustomers();
  const data2 = await getCustomerById(1);
  return { props: { data, data2 } };
}
export default Home;
