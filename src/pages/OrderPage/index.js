import PDInCart from '~/components/PDInCart';
import styles from './OrderPage.module.scss';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '~/contexts/AuthContext';
import { getUserbyUsername, getOrderById, postInvoice } from '~/services/userService';
import { PriceContext } from '~/contexts/PriceContext';

const cx = classNames.bind(styles);

function OrderPage() {
    const navigate = useNavigate();
    const { totalPrice } = useContext(PriceContext);
    const params = useParams();
    const orderID = params.order_id;
    const { user } = useContext(AuthContext);
    const [_user, setUser] = useState({});
    const [order, setOder] = useState([]);
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState('');
    const [payment, setPayment] = useState('');
    const [data, setData] = useState({
        order_id: orderID,
        order_status: status,
        payment_method: payment,
        address: address,
        total_amount: totalPrice,
    });

    const [formatPrice, setFormatPrice] = useState('');

    useEffect(() => {
        const getUser = async () => {
            await getUserbyUsername(user.username).then((res) => setUser(res.result));
        };
        getUser();
    }, [user]);

    useEffect(() => {
        const getOrder = async () => {
            await getOrderById(orderID).then((res) => setOder(res));
        };
        getOrder();
    }, [orderID]);

    useEffect(() => {
        setFormatPrice(Math.floor(totalPrice));
    }, [totalPrice]);

    useEffect(() => {
        setData({
            order_id: orderID,
            order_status: status,
            payment_method: payment,
            address: address,
            total_amount: totalPrice,
        });
    }, [orderID, status, payment, address, totalPrice]);

    const handleSubmit = async () => {
        console.log(data);
        await postInvoice(data)
            .then(() => {
                alert('Đặt hàng thành công');
                navigate('/');
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className={cx('wrapper', 'grid wide')}>
            <h2 className={cx('header-title')}>Thanh Toán</h2>
            <div className={cx('info-box')}>
                <div className={cx('box-title')}>Người nhận</div>
                <div className={cx('reveiver-info')}>
                    <span className={cx('receiver-name')}>{_user.name}</span>{' '}
                    <span className={cx('receiver-title')}>{_user.phone_number}</span>
                </div>
            </div>
            <div className={cx('info-box', 'full')}>
                <div className={cx('head', 'row')}>
                    <div className="col l-6">
                        <span className={cx('box-title')}>Sản phẩm</span>
                    </div>
                    <div className="col l-6">
                        <div className="row">
                            <div className="col l-3">
                                <span className={cx('text')}>Đơn giá</span>
                            </div>
                            <div className="col l-3">
                                <span className={cx('text')}>Số lượng</span>
                            </div>
                            <div className={cx('total-title', 'col l-6')}>
                                <span className={cx('text')}>Thành tiền</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('pds-box')}>
                    {order.map((o) => (
                        <PDInCart data={o} inOrderPage={true} />
                    ))}
                </div>
                <div className={cx('order-detail')}>
                    <div className={cx('detail-box')}>
                        <span className={cx('detail-title')}>Địa chỉ giao hàng:</span>
                        <input
                            className={cx('detail-input')}
                            placeholder="Type here..."
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className={cx('detail-box')}>
                        <span className={cx('detail-title')}>Phương thức thanh toán:</span>
                        <form className={cx('payment-method-form')} onChange={(e) => setPayment(e.target.value)}>
                            <div className={cx('input-radio')}>
                                <input type="radio" id="cash" name="payment-method" value={'tiền mặt'} />
                                <label for="cash">Tiền mặt</label>
                            </div>
                            <div className={cx('input-radio')}>
                                <input type="radio" id="transfer" name="payment-method" value={'chuyển khoản'} />
                                <label for="transfer">Chuyển khoản</label>
                            </div>
                        </form>
                    </div>
                    <div className={cx('detail-box')}>
                        <span className={cx('detail-title')}>Ghi chú: </span>
                        <input
                            className={cx('detail-input')}
                            placeholder="Type here..."
                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </div>
                </div>
                <div className={cx('ordbtn-box')}>
                    <div className={cx('total-price')}>
                        <span>
                            Tổng thanh toán: <span>{formatPrice.toLocaleString('vi-VN')}</span>
                        </span>
                        <span className={cx('vnd')}>₫</span>
                    </div>
                    <button className={cx('order-btn')} onClick={() => handleSubmit()}>
                        Đặt hàng
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrderPage;
