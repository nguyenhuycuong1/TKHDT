import styles from './CartPage.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

import PDInCart from '~/components/PDInCart';
const cx = classNames.bind(styles);

const PRODUCT_ITEM = {
    p_name: 'Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt Nam ',
    price: '18.450.000',
    discount: 20,
    link_img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_m2.png',
};

const PRODUCT_LIST = [
    {
        id: 1,
        p_name: 'Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt Nam ',
        price: '18.450.000',
        discount: 20,
        link_img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_m2.png',
    },
    {
        id: 2,

        p_name: 'Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt Nam ',
        price: '18.450.000',
        discount: 20,
        link_img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_m2.png',
    },
    {
        id: 3,

        p_name: 'Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt Nam ',
        price: '18.450.000',
        discount: 20,
        link_img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_m2.png',
    },
    {
        id: 4,

        p_name: 'Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt Nam ',
        price: '18.450.000',
        discount: 20,
        link_img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_m2.png',
    },
    {
        id: 5,

        p_name: 'Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt Nam ',
        price: '18.450.000',
        discount: 20,
        link_img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_m2.png',
    },
];

function CartPage() {
    const [checked, setChecked] = useState([]);
    const handleCheckAllChange = (e) => {
        if (e.target.checked) {
            const allProducts = PRODUCT_LIST.map((p) => p.p_name);
            setChecked(allProducts);
        } else {
            setChecked([]);
        }
    };

    return (
        <div className={cx('wrapper', 'grid wide')}>
            <div className={cx('header', 'row')}>
                <div className="col l-6">
                    <input
                        type="checkbox"
                        id="selectAll"
                        checked={checked.length === PRODUCT_LIST.length}
                        onChange={handleCheckAllChange}
                        className={cx('checkbox')}
                    ></input>
                    <span>Sản Phẩm</span>
                </div>
                <div className="col l-6">
                    <div className="row">
                        <div className="col l-3">Đơn Giá</div>
                        <div className="col l-3">Số Lượng</div>
                        <div className="col l-3">Số Tiền</div>
                        <div className="col l-3">Thao Tác</div>
                    </div>
                </div>
            </div>
            <div className={cx('list-cart-product')}>
                {PRODUCT_LIST.map((p) => {
                    return <PDInCart key={p.id} data={p} checked={checked.includes(p.p_name)} />;
                })}
            </div>
            <div className={cx('footer')}>
                <div className={cx('')}>
                    <input type="checkbox" className={cx('checkbox')}></input>
                    <span>Chọn tất cả</span>
                </div>
                <div>
                    <div className={cx('total-price')}>
                        Tổng sản phẩm {`(0 Sản phẩm): 0`}
                        <span className={cx('vnd')}>₫</span>
                    </div>
                </div>
                <div>
                    <button className={cx('buy-btn')}>Mua Hàng</button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;