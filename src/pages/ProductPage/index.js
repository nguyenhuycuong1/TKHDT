import { useState, useEffect, useContext } from 'react';
import styles from './ProductPage.module.scss';
import classNames from 'classnames/bind';
import { addToCart, getCartByUserId, getProductsById, getUserbyUsername } from '~/services/userService';
import { useParams } from 'react-router-dom';
import { AuthContext } from '~/contexts/AuthContext';

const cx = classNames.bind(styles);

function ProductPage() {
    const { user } = useContext(AuthContext);

    const params = useParams();
    const [formatPrice, setFormatPrice] = useState('');
    const product_id = params.id;
    const [amount, setAmount] = useState(1);
    const [product, setProduct] = useState({});
    const [cart, setCart] = useState({});
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
    useEffect(() => {
        const getCart = async () => {
            console.log(user);
            await getUserbyUsername(user.username)
                .then(async (res) => {
                    console.log(res);
                    await getCartByUserId(res.result.id).then((res) => {
                        console.log(res);
                        setCart(res);
                    });
                })
                .catch((err) => console.log(err));
        };
        getCart();
    }, [user]);

    const handleAddToCard = async () => {
        console.log(cart);
        await addToCart({ cart_id: cart.cart_id, product_id: product_id, quantity: amount })
            .then((res) => {
                alert('Đã thêm vào giở hàng');
            })
            .catch((err) => console.log(err));
    };

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
                        <button className={cx('order-btn')} onClick={() => handleAddToCard()}>
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
            <div className={cx('footer')}></div>
        </div>
    );
}

export default ProductPage;
