import styles from './CartPage.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import PDInCart from '~/components/PDInCart';
import { AuthContext } from '~/contexts/AuthContext';
import { PriceContext } from '~/contexts/PriceContext';
import { createOrder, getCartByUserId, getCartProductbyCartId } from '~/services/userService';
const cx = classNames.bind(styles);

function CartPage() {
    const { totalPrice, setTotalPrice } = useContext(PriceContext);
    const { user } = useContext(AuthContext);
    const [cartproduct, setCartproduct] = useState([]);
    const [checked, setChecked] = useState([]);
    const [productCheck, setProductCheck] = useState([]);
    const [_price, setPrice] = useState([]);
    const [formatPrice, setFormatPrice] = useState('');

    const [u, updateState] = useState();
    const navigate = useNavigate();
    const handleForceupdateMethod = useCallback(() => updateState({}), []);
    useEffect(() => {
        const getCDitem = async () => {
            await getCartByUserId(user.id)
                .then(async (res) => {
                    await getCartProductbyCartId(res.cart_id).then((res) => {
                        setCartproduct(res);
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getCDitem();
    }, [u, user.id]);

    const handleCheckAllChange = (e) => {
        if (e.target.checked) {
            const allProductsID = cartproduct.map((p) => {
                return p.product_id;
            });

            setChecked(allProductsID);
        } else {
            setChecked([]);
        }
    };

    const handleProductChange = (e, p, price) => {
        if (e.target.checked) {
            setChecked([...checked, p.product_id]);
            setPrice([..._price, price]);
        } else {
            setChecked(checked.filter((item) => item !== p.product_id));
            const cpQuantity = cartproduct.find((cp) => cp.product_id === p.product_id).quantity;
            setPrice(_price.filter((item) => item !== Math.floor(p.price) * cpQuantity));
        }
    };

    useEffect(() => {
        const totalPrice = _price.reduce((prev, next) => {
            return prev + next;
        }, 0);
        setTotalPrice(totalPrice);
    }, [_price, checked, setTotalPrice]);

    const handleClickBuyBtn = async () => {
        if (checked.length === 0) {
            alert('chua co san pham');
        } else {
            await createOrder(productCheck)
                .then((res) => {
                    navigate(`/order/${res.data[0].order_id}`);
                })
                .catch((err) => console.log(err));
        }
    };

    useEffect(() => {
        console.log(productCheck);
    }, [productCheck]);
    useEffect(() => {
        const getTotal = () => {
            if (checked) {
                return checked.map((id) => {
                    return cartproduct.find((p) => {
                        if (p.product_id === id) {
                            return p.quantity;
                        }
                        return 0;
                    });
                });
            }
        };
        setProductCheck(getTotal());
    }, [checked, cartproduct, u]);

    const handleQuantity = () => {
        if (productCheck) {
            return productCheck.reduce((prev, next) => {
                return prev + next.quantity;
            }, 0);
        } else {
            return 0;
        }
    };
    useEffect(() => {
        setFormatPrice(Math.floor(totalPrice));
    }, [totalPrice]);

    return (
        <div className={cx('wrapper', 'grid wide')}>
            <div className={cx('header', 'row')}>
                <div className="col l-6">
                    <input
                        type="checkbox"
                        id="selectAll"
                        checked={checked.length === cartproduct.length}
                        onChange={handleCheckAllChange}
                        className={cx('checkbox')}
                    ></input>
                    <span>Sản Phẩm</span>
                </div>
                <div className="col l-6">
                    <div className="row">
                        <div className="col l-3">Đơn Giá</div>
                        <div className="col l-3">Số Lượng</div>
                        <div className="col l-3">Số Tiền</div>
                        <div className="col l-3">Thao Tác</div>
                    </div>
                </div>
            </div>
            <div className={cx('list-cart-product')}>
                {cartproduct.map((cp) => {
                    return (
                        <PDInCart
                            key={cp.product_id}
                            data={cp}
                            checked={checked.includes(cp.product_id)}
                            change={handleProductChange}
                            _click={handleForceupdateMethod}
                        />
                    );
                })}
            </div>
            <div className={cx('footer')}>
                <div className={cx('')}>
                    <input
                        type="checkbox"
                        id="selectAll"
                        checked={checked.length === cartproduct.length}
                        onChange={handleCheckAllChange}
                        className={cx('checkbox')}
                    ></input>
                    <span>Chọn tất cả</span>
                </div>
                <div>
                    <div className={cx('total-price')}>
                        Tổng sản phẩm {`( ${handleQuantity()} sản phẩm ): ${formatPrice.toLocaleString('vi-VN')}`}
                        <span className={cx('vnd')}>₫</span>
                    </div>
                </div>
                <div>
                    <button className={cx('buy-btn')} onClick={() => handleClickBuyBtn()}>
                        Mua Hàng
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
