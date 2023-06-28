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
    console.log(option);
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
            {option === PRODUCTMENAGEMENT && <div className={cx('products-wrapper')}></div>}
        </div>
    );
}

export default AdminHomePage;
