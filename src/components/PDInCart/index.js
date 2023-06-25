import { useEffect, useState } from 'react';
import styles from './PDInCart.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function PDInCart({ data, checked, change }) {
    const [amount, setAmount] = useState(1);
    useEffect(() => {
        const formatAmount = () => {
            if (amount < 1) {
                setAmount(1);
            }
        };
        formatAmount();
    }, [amount]);

    return (
        <div className={cx('wrapper', 'row')}>
            <div className="col l-6">
                <div className={cx('product-info')}>
                    <input
                        type="checkbox"
                        checked={checked}
                        className={cx('checkbox')}
                        onChange={(e) => change(e, data)}
                    ></input>
                    <Link to={`/product/${data.id}`} className={cx('link')}>
                        <div className={cx('linktopd')}>
                            <img className={cx('product-img')} src={data.link_img} alt={data.p_name} />
                            <span className={cx('product-name')}>{data.p_name}</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="col l-6">
                <div className="row">
                    <div className="col l-3">
                        <span className={cx('pd-price')}>{data.price.toLocaleString('vi-VN')}</span>
                    </div>
                    <div className="col l-3">
                        <div className={cx('amount-ctrl')}>
                            <button className={cx('amount-btn')} onClick={() => setAmount(amount - 1)}>
                                -
                            </button>
                            <span className={cx('amount')}>{amount}</span>
                            <button className={cx('amount-btn')} onClick={() => setAmount(amount + 1)}>
                                +
                            </button>
                        </div>
                    </div>
                    <div className="col l-3">
                        <span className={cx('pd-price')}>{data.price.toLocaleString('vi-VN')}</span>
                    </div>
                    <div className="col l-3">
                        <button className={cx('delete-pd-btn')}>Xóa</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PDInCart;
