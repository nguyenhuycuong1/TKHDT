import { useEffect, useState, useCallback } from 'react';
import styles from './PDInCart.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import {
    deleteCartProduct,
    getCartProductbypId,
    getProductsById,
    updateQuantityCartProduct,
} from '~/services/userService';

const cx = classNames.bind(styles);

function PDInCart({ data, checked, change, _click }) {
    const [product, setProduct] = useState({});
    const [amount, setAmount] = useState(data.quantity);
    const [formatPrice, setFormatPrice] = useState('');

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
        const formatAmount = () => {
            if (amount < 1) {
                setAmount(1);
            }
        };
        formatAmount();
    }, [amount]);
    const handleIncreaseAmount = async () => {
        // await setAmount(amount + 1);

        await updateQuantityCartProduct(
            { cart_id: data.cart_id, product_id: data.product_id },
            data.quantity + 1,
        ).catch((err) => console.log(err));
    };
    const handleReduceAmount = async () => {
        // await setAmount(amount - 1);
        await updateQuantityCartProduct(
            { cart_id: data.cart_id, product_id: data.product_id },
            data.quantity - 1,
        ).catch((err) => console.log(err));
        if (data.quantity < 1) {
            handleDeleteCartProduct();
        }
    };

    const handleDeleteCartProduct = async () => {
        await deleteCartProduct(data.cart_id, data.product_id).catch((err) => console.log(err));
    };

    return (
        <div className={cx('wrapper', 'row')}>
            <div className="col l-6">
                <div className={cx('product-info')}>
                    <input
                        type="checkbox"
                        checked={checked}
                        className={cx('checkbox')}
                        onChange={(e) => change(e, product, formatPrice * data.quantity)}
                    ></input>
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
                        <div className={cx('amount-ctrl')}>
                            <button
                                className={cx('amount-btn')}
                                onClick={() => {
                                    handleReduceAmount();
                                    _click();
                                }}
                            >
                                -
                            </button>
                            <span className={cx('amount')}>{data.quantity}</span>
                            <button
                                className={cx('amount-btn')}
                                onClick={() => {
                                    handleIncreaseAmount();
                                    _click();
                                }}
                                cl
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="col l-3">
                        <span className={cx('pd-price')}>{(formatPrice * data.quantity).toLocaleString('vi-VN')}</span>
                    </div>
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
                </div>
            </div>
        </div>
    );
}

export default PDInCart;
