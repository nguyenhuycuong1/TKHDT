import styles from './HomePage.module.scss';
import classNames from 'classnames/bind';

import ProductItem from '~/components/ProductItem';

const cx = classNames.bind(styles);
const PRODUCT_ITEM = {
    p_name: 'Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt Nam ',
    price: '18.450.000',
    discount: 20,
    link_img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_m2.png',
};

function HomgPage() {
    return (
        <div className={cx('wrapper', 'grid wide')}>
            <div className={cx('product-list', 'row')}>
                <div className="col l-3">
                    <ProductItem data={PRODUCT_ITEM} />
                </div>
                <div className="col l-3">
                    <ProductItem data={PRODUCT_ITEM} />
                </div>
                <div className="col l-3">
                    <ProductItem data={PRODUCT_ITEM} />
                </div>
                <div className="col l-3">
                    <ProductItem data={PRODUCT_ITEM} />
                </div>
                <div className="col l-3">
                    <ProductItem data={PRODUCT_ITEM} />
                </div>
                <div className="col l-3">
                    <ProductItem data={PRODUCT_ITEM} />
                </div>
                <div className="col l-3">
                    <ProductItem data={PRODUCT_ITEM} />
                </div>
                <div className="col l-3">
                    <ProductItem data={PRODUCT_ITEM} />
                </div>
                <div className="col l-3">
                    <ProductItem data={PRODUCT_ITEM} />
                </div>
                <div className="col l-3">
                    <ProductItem data={PRODUCT_ITEM} />
                </div>
                <div className="col l-3">
                    <ProductItem data={PRODUCT_ITEM} />
                </div>
                <div className="col l-3">
                    <ProductItem data={PRODUCT_ITEM} />
                </div>
            </div>
        </div>
    );
}

export default HomgPage;
