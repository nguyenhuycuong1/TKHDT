import styles from './AdminHomePage.module.scss';
import classNames from 'classnames/bind';

import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);
const USERMENAGEMENT = 'User';
const PRODUCTMENAGEMENT = 'Product';
const ORDERMENAGEMENT = 'Order';

function AdminHomePage() {
    const params = useParams();
    const option = params.option;
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
                        <tr>
                            <th className={cx('rowmodule')} scope="row">
                                1
                            </th>
                            <td>Nguyễn Huy Cường</td>
                            <td>cuong_ngh</td>
                            <td>0979287269</td>
                            <td>cuong@gmail.com</td>
                            <td>
                                <button className={cx('delete-btn')}>Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
            {option === PRODUCTMENAGEMENT && (
                <div className={cx('products-wrapper')}>
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
                            <tr>
                                <td>
                                    <image
                                        className={cx('product-img', 'img-thumbnail')}
                                        src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/r/pro-m2.jpg"
                                        alt="a234fs345"
                                    />
                                </td>
                                <td>
                                    <span>a234fs345</span>
                                </td>
                                <td>
                                    <span>MacBook Pro IPS Panel Retina Display 2560x1600 Intel Core i5 2.3GHz 8GB</span>
                                </td>
                                <td>
                                    <span>
                                        Ultrabook 13.3 IPS Panel Retina Display 2560x1600 128GB SSD Intel Iris Plus
                                        Graphics 640 macOS 1.37kg
                                    </span>
                                </td>
                                <td>
                                    <span>34458166.49</span>
                                </td>
                                <td>
                                    <span>Apple</span>
                                </td>
                                <td>
                                    <button className={cx('update-btn')}>Sửa</button>

                                    <button className={cx('delete-btn')}>Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default AdminHomePage;
