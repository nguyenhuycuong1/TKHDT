import styles from './AdminHomePage.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { getAllProducts, getAllUser } from '~/services/userService';

const cx = classNames.bind(styles);
const USERMENAGEMENT = 'User';
const PRODUCTMENAGEMENT = 'Product';
const ORDERMENAGEMENT = 'Order';

function AdminHomePage() {
    const [user, setUser] = useState([]);
    const [products, setProducts] = useState([]);

    const params = useParams();
    const option = params.option;
    const navigate = useNavigate();

    useEffect(() => {
        if (option === USERMENAGEMENT) {
            const getListUser = async () => {
                await getAllUser().then((res) => {
                    const listUser = res.result.filter((u) => u.username !== 'ADMIN001');
                    setUser(listUser);
                });
            };
            getListUser();
        } else if (option === PRODUCTMENAGEMENT) {
            const getListProduct = async () => {
                await getAllProducts().then((res) => setProducts(res));
            };
            getListProduct();
        } else {
            return;
        }
    }, [option]);
    const handleAddProduct = () => {
        navigate('/admin/Product/add');
    };
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
                                        <button className={cx('delete-btn')}>Xóa</button>
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
                                            <button className={cx('update-btn')}>Sửa</button>

                                            <button className={cx('delete-btn')}>Xóa</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default AdminHomePage;
