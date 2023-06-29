import styles from './ProductSearch.module.scss';
import classNames from 'classnames/bind';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductSearch({ data }) {
    const navigate = useNavigate();
    const [formatPrice, setFormatPrice] = useState('');
    useEffect(() => {
        setFormatPrice(Math.floor(data.price));
    }, [data.price]);
    return (
        <div
            className={cx('wrapper')}
            onClick={() => {
                navigate(`/product/${data.product_id}`);
            }}
        >
            <img className={cx('image')} src={data.image} alt={data.product_name}></img>
            <div className={cx('name')}>{data.product_name}</div>
            <div className={cx('price')}>{formatPrice.toLocaleString('vi-VN')}</div>
        </div>
    );
}

export default ProductSearch;
