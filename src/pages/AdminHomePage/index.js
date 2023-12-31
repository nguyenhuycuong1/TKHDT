import styles from './AdminHomePage.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import InfoUser from '~/components/InfoUser';
import InvoiceItem from '~/components/InvoiceItem';
import { deleteProduct, deleteUser, getAllInvoice, getAllProducts, getAllUser } from '~/services/userService';

const cx = classNames.bind(styles);
const USERMENAGEMENT = 'User';
const PRODUCTMENAGEMENT = 'Product';
const ORDERMENAGEMENT = 'Order';

function AdminHomePage() {
    const [user, setUser] = useState([]);
    const [products, setProducts] = useState([]);
    const [invoices, setInvoices] = useState([]);

    const params = useParams();
    const option = params.option;
    const navigate = useNavigate();

    useEffect(() => {
        if (option === USERMENAGEMENT) {
            const getListUser = async () => {
                await getAllUser().then((res) => {
                    const listUser = res.result.filter((u) => u.username !== 'ADMIN01');
                    setUser(listUser);
                });
            };
            getListUser();
        } else if (option === PRODUCTMENAGEMENT) {
            const getListProduct = async () => {
                await getAllProducts().then((res) => setProducts(res));
            };
            getListProduct();
        } else if (option === ORDERMENAGEMENT) {
            const getInvoice = async () => {
                await getAllInvoice().then((res) => setInvoices(res));
            };
            getInvoice();
        } else {
            return;
        }
    }, [option]);

    useEffect(() => {
        console.log(invoices);
    }, [invoices]);

    const handleAddProduct = () => {
        navigate('/admin/Product/add');
    };
    const handleUpdateProduct = (product_id) => {
        navigate(`/admin/Product/update/${product_id}`);
    };
    const handleDeleteUser = async (id) => {
        await deleteUser(id).then(() => window.location.reload());
    };
    const handleDeleteProduct = async (product_id) => {
        await deleteProduct(product_id).then(() => window.location.reload());
    };
    function formatDateTime(dateTimeString) {
        const dateTime = new Date(dateTimeString);
        const hours = ('0' + dateTime.getHours()).slice(-2);
        const minutes = ('0' + dateTime.getMinutes()).slice(-2);
        const day = ('0' + dateTime.getDate()).slice(-2);
        const month = ('0' + (dateTime.getMonth() + 1)).slice(-2);
        const year = dateTime.getFullYear();

        return `${hours}h${minutes} ${day}/${month}/${year}`;
    }
    return (
        <div className={cx('wrapper')}>
            {option === USERMENAGEMENT && (
                <table className={cx('tablemodule', 'table')}>
                    <thead class="thead-dark">
                        <tr>
                            <th className={cx('field')} scope="col">
                                STT
                            </th>
                            <th className={cx('field')} scope="col">
                                Tên
                            </th>
                            <th className={cx('field')} scope="col">
                                Tên đăng nhập
                            </th>
                            <th className={cx('field')} scope="col">
                                Số điện thoại
                            </th>
                            <th className={cx('field')} scope="col">
                                Email
                            </th>
                            <th className={cx('field')} scope="col">
                                Thao tác
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((u, index) => {
                            return (
                                <tr key={u.id}>
                                    <th className={cx('rowmodule')} scope="row">
                                        {index + 1}
                                    </th>
                                    <td>{u.name}</td>
                                    <td>{u.username}</td>
                                    <td>{u.phone_number}</td>
                                    <td>{u.email}</td>
                                    <td>
                                        <button className={cx('delete-btn')} onClick={() => handleDeleteUser(u.id)}>
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
            {option === PRODUCTMENAGEMENT && (
                <div className={cx('products-wrapper')}>
                    <div className={cx('add-product')} onClick={() => handleAddProduct()}>
                        Thêm sản phẩm
                    </div>
                    <table className={cx('tablemodule', 'table')}>
                        <thead class="thead-dark">
                            <tr>
                                <th className={cx('field')} scope="col">
                                    Hình ảnh
                                </th>
                                <th className={cx('field')} scope="col">
                                    Mã sản phẩm
                                </th>
                                <th className={cx('field')} scope="col">
                                    Tên sản phẩm
                                </th>
                                <th className={cx('field')} scope="col">
                                    Mô tả
                                </th>
                                <th className={cx('field')} scope="col">
                                    Giá
                                </th>
                                <th className={cx('field')} scope="col">
                                    Hãng
                                </th>
                                <th className={cx('field')} scope="col">
                                    Thao tác
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p) => {
                                return (
                                    <tr key={p.product_id}>
                                        <td
                                            className={cx('product-img')}
                                            style={{
                                                background: `url(${p.image}) no-repeat`,
                                            }}
                                        ></td>
                                        <td>
                                            <span>{p.product_id}</span>
                                        </td>
                                        <td>
                                            <span>{p.product_name}</span>
                                        </td>
                                        <td>
                                            <span>{p.description}</span>
                                        </td>
                                        <td>
                                            <span>{p.price}</span>
                                        </td>
                                        <td>
                                            <span>{p.brand_id}</span>
                                        </td>
                                        <td>
                                            <button
                                                className={cx('update-btn')}
                                                onClick={() => handleUpdateProduct(p.product_id)}
                                            >
                                                Sửa
                                            </button>

                                            <button
                                                className={cx('delete-btn')}
                                                onClick={() => handleDeleteProduct(p.product_id)}
                                            >
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
            {option === ORDERMENAGEMENT &&
                invoices.map((i) => {
                    return (
                        <div className={cx('invoice')} key={i.invoice_id}>
                            <InfoUser userId={i.user_id} />
                            <div>Mã đơn hàng: {i.order_id}</div>
                            <div>Mã hóa đơn: {i.invoice_id}</div>
                            <div>
                                Thời gian đặt hàng:{' '}
                                <span style={{ color: 'blue' }}>{formatDateTime(i.order_date)}</span>
                            </div>
                            <div>
                                Địa chỉ giao hàng: <span style={{ color: 'red' }}>{i.address}</span>
                            </div>

                            {i.order_status && (
                                <div>
                                    Ghi chú: <i style={{ color: 'green' }}>{i.order_status}</i>
                                </div>
                            )}

                            <div>
                                Phương thức thanh toán: <span style={{ color: 'red' }}>{i.payment_method}</span>
                            </div>
                            <InvoiceItem data={i.order_id} />
                            <div>
                                Tổng thanh toán:{' '}
                                <span style={{ fontSize: '1.8rem', color: 'red' }}>
                                    {i.total_amount.toLocaleString('vi-VN')}
                                </span>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default AdminHomePage;
