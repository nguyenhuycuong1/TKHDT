import PDInCart from '~/components/PDInCart';
import styles from './OrderPage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const user = {
    name: 'Nguyễn Huy Cường',
    phone_number: '0979287269',
};

const product = {
    id: 1,
    p_name: 'Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt Nam ',
    price: 18450000,
    discount: 20,
    link_img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_m2.png',
    amount: 1,
};

function OrderPage() {
    return (
        <div className={cx('wrapper', 'grid wide')}>
            <h2 className={cx('header-title')}>Thanh Toán</h2>
            <div className={cx('info-box')}>
                <div className={cx('box-title')}>Người nhận</div>
                <div className={cx('reveiver-info')}>
                    <span className={cx('receiver-name')}>{user.name}</span>{' '}
                    <span className={cx('receiver-title')}>{user.phone_number}</span>
                </div>
            </div>
            <div className={cx('info-box', 'full')}>
                <div className="row">
                    <div className="col l-6">
                        <span className={cx('box-title')}>Sản phẩm</span>
                    </div>
                    <div className="col l-6">
                        <div className="row">
                            <div className="col l-3">
                                <span className={cx('text')}>Đơn giá</span>
                            </div>
                            <div className="col l-3">
                                <span className={cx('text')}>Số lượng</span>
                            </div>
                            <div className={cx('total-title', 'col l-6')}>
                                <span className={cx('text')}>Thành tiền</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('pds-box')}>
                    <PDInCart data={product} />
                </div>
                <div className={cx('ordbtn-box')}>
                    <div>
                        <span>
                            Thành tiền: <span>213.145</span>
                        </span>
                    </div>
                    <button className={cx('order-btn')}>Đặt hàng</button>
                </div>
            </div>
        </div>
    );
}

export default OrderPage;
