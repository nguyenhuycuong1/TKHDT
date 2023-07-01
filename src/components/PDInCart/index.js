import { useEffect, useState } from 'react';
import styles from './PDInCart.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { deleteCartProduct, getProductsById, updateQuantityCartProduct } from '~/services/userService';
import { useDebound } from '../hooks';

const cx = classNames.bind(styles);

function PDInCart({ data, checked, change, _click, inOrderPage }) {
    const [product, setProduct] = useState({});
    const [formatPrice, setFormatPrice] = useState('');
    const [amount, setAmount] = useState(data.quantity);
    const debounded = useDebound(amount, 500);

    useEffect(() => {
        const getPoduct = async () => {
            await getProductsById(data.product_id)
                .then((res) => {
                    setProduct(res.data);
                })
                .catch((err) => console.log(err));
        };
        getPoduct();
    }, [data.product_id]);
    useEffect(() => {
        setFormatPrice(Math.floor(product.price));
    }, [product.price]);

    useEffect(() => {
        if (amount < 1) {
            handleDeleteCartProduct();
        }
    }, [amount]);

    const handleDeleteCartProduct = async () => {
        await deleteCartProduct(data.cart_id, data.product_id).catch((err) => console.log(err));
        window.location.reload();
    };

    const handleReduceAmount = async () => {
        setAmount(amount - 1);
        if (debounded > 1) {
            await updateQuantityCartProduct(data.cart_id, data.product_id, debounded - 1);
        }
        _click();
    };

    const handleIncreaseAmount = async () => {
        setAmount(amount + 1);
        await updateQuantityCartProduct(data.cart_id, data.product_id, debounded + 1);
        _click();
    };
    return (
        <div className={cx('wrapper', 'row')}>
            <div className="col l-6">
                <div className={cx('product-info')}>
                    {inOrderPage ? (
                        ''
                    ) : (
                        <input
                            type="checkbox"
                            checked={checked}
                            className={cx('checkbox')}
                            onChange={(e) => change(e, product, formatPrice * data.quantity)}
                        ></input>
                    )}
                    <Link to={`/product/${product.product_id}`} className={cx('link')}>
                        <div className={cx('linktopd')}>
                            <img className={cx('product-img')} src={product.image} alt={product.product_name} />
                            <span className={cx('product-name')}>{product.product_name}</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="col l-6">
                <div className="row">
                    <div className="col l-3">
                        <span className={cx('pd-price')}>{formatPrice.toLocaleString('vi-VN')}</span>
                    </div>
                    <div className="col l-3">
                        {inOrderPage ? (
                            <span>{data.quantity}</span>
                        ) : (
                            <div className={cx('amount-ctrl')}>
                                <button
                                    className={cx('amount-btn')}
                                    onClick={() => {
                                        handleReduceAmount();
                                    }}
                                >
                                    -
                                </button>
                                <span className={cx('amount')}>{amount}</span>
                                <button
                                    className={cx('amount-btn')}
                                    onClick={() => {
                                        handleIncreaseAmount();
                                    }}
                                    cl
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                    {inOrderPage ? (
                        <div className={cx('total-title', 'col l-6')}>
                            <span className={cx('pd-price')}>{(formatPrice * amount).toLocaleString('vi-VN')}</span>
                        </div>
                    ) : (
                        <div className="col l-3">
                            <span className={cx('pd-price')}>{(formatPrice * amount).toLocaleString('vi-VN')}</span>
                        </div>
                    )}
                    {inOrderPage ? (
                        ''
                    ) : (
                        <div className="col l-3">
                            <button
                                className={cx('delete-pd-btn')}
                                onClick={() => {
                                    handleDeleteCartProduct();
                                    _click();
                                }}
                            >
                                Xóa
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PDInCart;
