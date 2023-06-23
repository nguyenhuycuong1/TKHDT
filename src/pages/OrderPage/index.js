import styles from './OrderPage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function OrderPage() {
    return <div className={cx('wrapper')}></div>;
}

export default OrderPage;
