import { axiosInstance } from "./index";

const getCustomers = async () => {
  const response = await axiosInstance.get("products").then((res) => res.data);
  return response;
};

const getCustomerById = async (id) => {
  const response = await axiosInstance
    .get(`products/${id}`)
    .then((res) => res.data);
  return response;
};

const productSearch = async (query) => {
  const response = await axiosInstance
    .get(`products?q=${query}`)
    .then((res) => res.data);
  return response;
};

const getAllCategories = async () => {
  const response = await axiosInstance
    .get("products/categories")
    .then((res) => res.data);
  return response;
};

const getCategoryProducts = async (category) => {
  const response = await axiosInstance
    .get(`products/category/${category}`)
    .then((res) => res.data);
  return response;
};

export {
  getCustomers,
  getCustomerById,
  productSearch,
  getAllCategories,
  getCategoryProducts,
};
