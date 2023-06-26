import { useState, useEffect } from 'react';
import styles from './ProductPage.module.scss';
import classNames from 'classnames/bind';
import { getProductsById } from '~/services/userService';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductPage() {
    const params = useParams();
    const [formatPrice, setFormatPrice] = useState('');
    const product_id = params.id;
    const [amount, setAmount] = useState(1);
    const [product, setProduct] = useState({});
    useEffect(() => {
        const getProductItem = async () => {
            await getProductsById(product_id).then((res) => setProduct(res.data));
        };
        getProductItem();
    }, [product_id]);
    useEffect(() => {
        setFormatPrice(Math.floor(product.price));
    }, [product.price]);
    useEffect(() => {
        const formatAmount = () => {
            if (amount < 1) {
                setAmount(1);
            }
        };
        formatAmount();
    }, [amount]);
    return (
        <div className={cx('wrapper', 'grid wide')}>
            <div className={cx('product-info-box')}>
                <div className="row">
                    <div className="col l-5">
                        <div>
                            <img className={cx('img')} src={product.image} alt={product.product_name} />
                        </div>
                    </div>
                    <div className={cx('pd-order-box', 'col l-7')}>
                        <div className={cx('pd-tile')}>
                            <h2 className={cx('pd-name')}>{product.product_name}</h2>
                        </div>
                        <div className={cx('pd-description')}>{product.description}</div>
                        <div className={cx('pd-price')}>
                            <span>{formatPrice.toLocaleString('vi-VN')}</span>
                            <span className={cx('vnd')}>₫</span>
                        </div>
                        <div className={cx('amount-ctrl')}>
                            <div className={cx('amount-title')}>Số lượng: </div>
                            <button className={cx('amount-btn')} onClick={() => setAmount(amount - 1)}>
                                -
                            </button>
                            <span className={cx('amount')}>{amount}</span>
                            <button className={cx('amount-btn')} onClick={() => setAmount(amount + 1)}>
                                +
                            </button>
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
