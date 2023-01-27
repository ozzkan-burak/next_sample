import React from "react";
import { getProductsById } from "../../network/APIs";
import Layout from "../Layout";

const shopDetail = ({ data }) => {
  console.log(data);
  return (
    <>
      <Layout />
      <div>shopDetail</div>
    </>
  );
};

export async function getServerSideProps(context) {
  console.log(context);
  const { params } = context;
  const { id } = params;
  const data = await getProductsById(id);
  return { props: { data } };
}

export default shopDetail;
