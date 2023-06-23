import { Link } from 'react-router-dom';
import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ProductItem({ data, className }) {
    return (
        <Link to={`/product/:id`} className={cx('wrapper', className)}>
            <img className={cx('img')} src={data.link_img} alt={data.p_name}></img>
            <h3 className={cx('product-name')}>{data.p_name}</h3>
            <div className={cx('price-group')}>
                <span className={cx('price')}>{data.price}</span>
                <span className={cx('vnd')}>₫</span>
            </div>
            <div className={cx('discount')}>Giảm {data.discount}%</div>
        </Link>
    );
}

export default ProductItem;
