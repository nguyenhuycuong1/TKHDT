import axios from 'axios';

const API_URL = 'http://localhost:8888/';

const createAnAccount = async (data) => {
    return await axios.post(API_URL + 'auth/register', data);
};

const loginMethod = async (data) => {
    return await axios.post(API_URL + 'auth/login', data);
};

const forgotPassword = async (data) => {
    return await axios.post(API_URL + 'auth/forgot-password', data);
};

const getUserbyUsername = async (username) => {
    const user = await axios.get(API_URL + `users/?username=${username}`);
    return user.data;
};

const getAllProducts = async () => {
    const products = await axios.get(API_URL + 'products');
    return products.data;
};

const getProductsById = async (id) => {
    const product = await axios.get(API_URL + `product/${id}`);
    return product;
};

const getAllBrands = async () => {
    const brands = await axios.get(API_URL + 'brands');
    return brands;
};

const getProductsOderBy = async (type) => {
    const products = await axios.get(API_URL + `products/orderby/${type}`);
    return products;
};

const getProductsByBrand = async (type) => {
    const products = await axios.get(API_URL + `products/${type}`);
    return products;
};

const addToCart = async (data) => {
    return await axios.post(API_URL + 'addtocart', data);
};

const getCartProduct = async () => {
    const res = axios.get(API_URL + 'carts');
    return res;
};

export {
    createAnAccount,
    loginMethod,
    forgotPassword,
    getUserbyUsername,
    getAllProducts,
    getProductsById,
    getAllBrands,
    getProductsOderBy,
    getProductsByBrand,
    addToCart,
    getCartProduct,
};
