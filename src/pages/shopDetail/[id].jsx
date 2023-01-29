import React from "react";
import { getProductsById } from "../../network/APIs";
import Layout from "../Layout";
import styled from "styled-components";
import Image from "next/image";

const ShopContainer = styled.div`
  margin-top: 20px;
  padding: 20px 35px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh;
  overflow-y: scroll;
`;
const ShopBreadCrumb = styled.div`
  padding: 16px 20px;
  background: #fff;
`;
const ShopDetail = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 20px;
`;
const ProductImage = styled.div`
  background-color: #fff;
`;
const ProductDetail = styled.div`
  background-color: #fff;
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #3d464d;
  }
  span {
    margin-bottom: 15px;
  }
  .price {
    font-size: 26px;
    font-weight: 700;
  }
  p {
    margin-top: 15px;
    color: #6c757d;
    font-size: 16px;
  }
`;

const shopDetail = ({ data }) => {
  console.log(data);

  return (
    <>
      <Layout />
      <ShopContainer>
        <ShopBreadCrumb>Home / Shop / Shop List</ShopBreadCrumb>
        <ShopDetail>
          <ProductImage>
            <Image
              src={data.thumbnail}
              alt="product-image"
              width={500}
              height={500}
            />
          </ProductImage>
          <ProductDetail>
            <h3>{data.title}</h3>
            <span className="review">{data.rating} (99 Reviews)</span>
            <span className="price">${data.price}</span>
            <p>{data.description}</p>
          </ProductDetail>
        </ShopDetail>
      </ShopContainer>
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
