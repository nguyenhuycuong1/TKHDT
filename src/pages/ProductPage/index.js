import styles from './ProductPage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const PRODUCT_ITEM = {
    p_name: 'Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt Nam ',
    price: '18.450.000',
    discount: 20,
    link_img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_m2.png',
};
function ProductPage() {
    return (
        <div className={cx('wrapper', 'grid wide')}>
            <div className={cx('product-info-box')}>
                <div className="row">
                    <div className="col l-5">
                        <div>
                            <img className={cx('img')} src={PRODUCT_ITEM.link_img} alt={PRODUCT_ITEM.p_name} />
                        </div>
                    </div>
                    <div className={cx('pd-order-box', 'col l-7')}>
                        <div>
                            <h2 className={cx('pd-name')}>{PRODUCT_ITEM.p_name}</h2>
                        </div>
                        <div className={cx('pd-price')}>
                            <span>{PRODUCT_ITEM.price}</span>
                            <span className={cx('vnd')}>₫</span>
                        </div>
                        <button className={cx('order-btn')}>Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
            <div className={cx('footer')}></div>
        </div>
    );
}

export default ProductPage;
