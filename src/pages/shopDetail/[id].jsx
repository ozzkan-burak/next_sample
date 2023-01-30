import React, { useState } from "react";
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
const ProductDescription = styled.div`
  margin-top: 40px;
  background-color: #fff;
  padding: 30px;
`;

const ProductDescriptionTitle = styled.div`
  display: flex;
  border-bottom: 1px solid #dee2e6;
  width: 100%;
  margin-bottom: 26px;
  cursor: pointer;
  span {
    padding: 10px 15px;
    &.active {
      border: 1px solid #dee2e6;
      border-bottom: none;
      background-color: #f5f5f5;
    }
  }
`;

const ProductDescriptionContent = styled.div`
  h4 {
    margin-bottom: 16px;
    color: #3d464d;
    font-size: 28px;
  }
  p {
    margin-bottom: 16px;
    color: #6c757d;
    text-align: left;
    font-size: 20px;
  }
`;

const shopDetail = ({ data }) => {
  const descriptionOptions = [
    {
      title: "Description",
    },
    {
      title: "Information",
    },
    {
      title: "Product Reviews",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleActiveTab = (index) => {
    setActiveTab(index);
  };

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
        <ProductDescription>
          <ProductDescriptionTitle>
            {descriptionOptions.map((item, index) => (
              <span
                className={activeTab == index && "active"}
                onClick={() => handleActiveTab(index)}
              >
                {item.title}
              </span>
            ))}
          </ProductDescriptionTitle>
          <ProductDescriptionContent>
            {activeTab === 0 && (
              <>
                <h4>Product Description</h4>
                <p>
                  Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                  sea. Consetetur vero aliquyam invidunt duo dolores et duo sit.
                  Vero diam ea vero et dolore rebum, dolor rebum eirmod
                  consetetur invidunt sed sed et, lorem duo et eos elitr,
                  sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed
                  tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing,
                  eos dolores sit no ut diam consetetur duo justo est, sit
                  sanctus diam tempor aliquyam eirmod nonumy rebum dolor
                  accusam, ipsum kasd eos consetetur at sit rebum, diam kasd
                  invidunt tempor lorem, ipsum lorem elitr sanctus eirmod
                  takimata dolor ea invidunt.
                </p>
                <p>
                  Dolore magna est eirmod sanctus dolor, amet diam et eirmod et
                  ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem
                  tempor. Gubergren amet amet labore sadipscing clita clita diam
                  clita. Sea amet et sed ipsum lorem elitr et, amet et labore
                  voluptua sit rebum. Ea erat sed et diam takimata sed justo.
                  Magna takimata justo et amet magna et.
                </p>
              </>
            )}

            {activeTab === 1 && (
              <>
                <h4>Additional Information</h4>
                <p>
                  Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                  sea. Consetetur vero aliquyam invidunt duo dolores et duo sit.
                  Vero diam ea vero et dolore rebum, dolor rebum eirmod
                  consetetur invidunt sed sed et, lorem duo et eos elitr,
                  sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed
                  tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing,
                  eos dolores sit no ut diam consetetur duo justo est, sit
                  sanctus diam tempor aliquyam eirmod nonumy rebum dolor
                  accusam, ipsum kasd eos consetetur at sit rebum, diam kasd
                  invidunt tempor lorem, ipsum lorem elitr sanctus eirmod
                  takimata dolor ea invidunt.
                </p>
              </>
            )}
          </ProductDescriptionContent>
        </ProductDescription>
      </ShopContainer>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const data = await getProductsById(id);
  return { props: { data } };
}

export default shopDetail;
