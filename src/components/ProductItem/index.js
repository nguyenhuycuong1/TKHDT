import { Link } from 'react-router-dom';
import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function ProductItem({ data, className }) {
    const [formatPrice, setFormatPrice] = useState('');
    useEffect(() => {
        setFormatPrice(Math.floor(data.price));
    }, [data.price]);
    return (
        <Link to={`/product/${data.product_id}`} className={cx('wrapper', className)}>
            <img className={cx('img')} src={data.image} alt={data.product_name}></img>
            <h3 className={cx('product-name')}>{data.product_name}</h3>
            <div className={cx('price-group')}>
                <span className={cx('price')}>{formatPrice.toLocaleString('vi-VN')}</span>
                <span className={cx('vnd')}>₫</span>
            </div>
        </Link>
    );
}

export default ProductItem;
