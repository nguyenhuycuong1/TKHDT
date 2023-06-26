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
    const products = await axios.get(API_URL + 'product');
    return products.data;
};

const getProductsById = async (id) => {
    const products = await axios.get(API_URL + `product/${id}`);
    return products;
};

export { createAnAccount, loginMethod, forgotPassword, getUserbyUsername, getAllProducts, getProductsById };
