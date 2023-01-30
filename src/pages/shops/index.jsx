import React from "react";
import { getProducts } from "../../network/APIs";
import Layout from "../Layout";
import styled from "styled-components";
import Link from "next/link";
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

const ShopContent = styled.div`
  margin-top: 40px;
  display: flex;
`;

const ShopContentFilter = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 25%;
`;

const ShopContentFilters = styled.div`
  padding: 15px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ShopContentProducts = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 75%;
`;

const ShopContentProductsSorting = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 16px;
  span {
    padding: 8px;
    background-color: #fff;
    :not(:last-child) {
      margin-right: 10px;
    }
  }
`;
const ShopContentProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ShopContentProduct = styled.div`
  flex: 0 0 28%;
  width: 100%;
  background-color: #fff;
  margin-bottom: 20px;
  padding-bottom: 10px;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    img {
      margin-bottom: 15px;
    }
    span {
      padding: 5px 0;
    }
  }
`;

const shop = ({ data }) => {
  return (
    <>
      <Layout />
      <ShopContainer>
        <ShopBreadCrumb>Home / Shop / Shop List</ShopBreadCrumb>
        <ShopContent>
          <ShopContentFilter>
            <span>Filter By Price ---------</span>
            <ShopContentFilters>
              <Link href={`/shops/smartphones`}>Smartphones</Link>
              <span>Dummy Category</span>
              <span>Dummy Category</span>
              <span>Dummy Category</span>
              <span>Dummy Category</span>
            </ShopContentFilters>
          </ShopContentFilter>
          <ShopContentProducts>
            <ShopContentProductsSorting>
              <div>
                <span>İcon</span>
                <span>İcon</span>
              </div>
              <div>
                <span> Sorting </span>
                <span> Showing </span>
              </div>
            </ShopContentProductsSorting>
            <ShopContentProductsList>
              {data.products.map((item) => (
                <ShopContentProduct key={item.id}>
                  <Link href={`/shopDetail/${item.id}`}>
                    <Image src={item.thumbnail} width={250} height={200} />
                    <span>{item.title}</span>
                    <span>${item.price}</span>
                    <span>{item.rating}</span>
                  </Link>
                </ShopContentProduct>
              ))}
            </ShopContentProductsList>
          </ShopContentProducts>
        </ShopContent>
      </ShopContainer>
    </>
  );
};

export async function getServerSideProps() {
  const data = await getProducts();
  return { props: { data } };
}

export default shop;
