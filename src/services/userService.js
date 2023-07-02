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
    const user = await axios.get(API_URL + `user?username=${username}`);
    return user.data;
};

const getUserById = async (user_id) => {
    const user = await axios.get(API_URL + `user/${user_id}`);
    return user.data;
};

const getAllUser = async () => {
    const users = await axios.get(API_URL + 'users');
    return users.data;
};

const deleteUser = async (id) => {
    return await axios.delete(API_URL + `${id}`);
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

const createNewProduct = async (data) => {
    return await axios.post(API_URL + 'product', data);
};

const deleteProduct = async (product_id) => {
    return await axios.delete(API_URL + `product/${product_id}`);
};

const addToCart = async (data) => {
    return await axios.post(API_URL + 'addtocart', data);
};

const getCartByUserId = async (userId) => {
    const cart = await axios.get(API_URL + `cart/${userId}`);
    return cart.data;
};

const getCartProduct = async () => {
    const res = axios.get(API_URL + 'carts');
    return res;
};

const getCartProductbyCartId = async (cart_id) => {
    const res = await axios.get(API_URL + `cartByCartId/${cart_id}`);
    return res.data;
};

const updateQuantityCartProduct = async (cart_id, product_id, quantity) => {
    try {
        return await axios.put(
            API_URL + `updatefromcart/${cart_id}/${product_id}`,
            {
                quantity: quantity,
            },
            {
                headers: { 'Content-Type': 'application/json' },
            },
        );
    } catch (error) {
        console.log(error);
    }
};

const deleteCartProduct = async (cart_id, product_id) => {
    try {
        return await axios.delete(API_URL + `deletefromcart/${cart_id}/${product_id}`);
    } catch (error) {
        console.log(error);
    }
};

const getListProductSearch = async (product_name) => {
    const listProduct = await axios.get(API_URL + `products/search/${product_name}`);
    return listProduct.data;
};

const createOrder = async (data) => {
    return await axios.post(API_URL + 'order', data);
};

const getOrderById = async (order_id) => {
    const order = await axios.get(API_URL + `order/${order_id}`);
    return order.data;
};

const deleteOrder = async (order_id) => {
    return await axios.delete(API_URL + `order/${order_id}`);
};

const postInvoice = async (data) => {
    return await axios.post(API_URL + 'invoice', data);
};

const getAllInvoice = async () => {
    const invoices = await axios.get(API_URL + 'invoices');
    return invoices.data;
};

const getInvoiceByUserId = async (user_id) => {
    const invoices = await axios.get(API_URL + `invoices/${user_id}`);
    return invoices.data;
};

const updateInvoiceAddress = async (invoice_id, data) => {
    return await axios.put(API_URL + `invoice/${invoice_id}/address`, {
        address: data,
    });
};

const deleteInvoice = async (order_id) => {
    return await axios.delete(API_URL + `invoice/${order_id}`);
};

export {
    createAnAccount,
    loginMethod,
    forgotPassword,
    getUserbyUsername,
    getUserById,
    deleteUser,
    getAllProducts,
    getProductsById,
    deleteProduct,
    getAllBrands,
    getProductsOderBy,
    getProductsByBrand,
    createNewProduct,
    addToCart,
    getCartProduct,
    getCartByUserId,
    updateQuantityCartProduct,
    getCartProductbyCartId,
    deleteCartProduct,
    getListProductSearch,
    getAllUser,
    createOrder,
    getOrderById,
    deleteOrder,
    postInvoice,
    getAllInvoice,
    getInvoiceByUserId,
    deleteInvoice,
    updateInvoiceAddress,
};
