import { useContext, useEffect, useState } from 'react';
import styles from './MyOrderPage.module.scss';
import classNames from 'classnames/bind';
import { deleteInvoice, deleteOrder, getInvoiceByUserId, updateInvoiceAddress } from '~/services/userService';
import { AuthContext } from '~/contexts/AuthContext';
import InvoiceItem from '~/components/InvoiceItem';

const cx = classNames.bind(styles);

function MyOrderPage() {
    const { user } = useContext(AuthContext);
    const [show, setShow] = useState('');
    const [invoices, setInvoices] = useState([]);
    const [addressValue, setAddressValue] = useState('');
    useEffect(() => {
        const getInvoices = async () => {
            await getInvoiceByUserId(user.id).then((res) => setInvoices(res));
        };
        getInvoices();
    }, [user]);

    function formatDateTime(dateTimeString) {
        const dateTime = new Date(dateTimeString);
        const hours = ('0' + dateTime.getHours()).slice(-2);
        const minutes = ('0' + dateTime.getMinutes()).slice(-2);
        const day = ('0' + dateTime.getDate()).slice(-2);
        const month = ('0' + (dateTime.getMonth() + 1)).slice(-2);
        const year = dateTime.getFullYear();

        return `${hours}h${minutes} ${day}/${month}/${year}`;
    }

    const handlePutBtn = async (order_id) => {
        setShow(order_id);
    };
    const handleChangeBtn = async (invoice_id) => {
        await updateInvoiceAddress(invoice_id, addressValue).then(() => window.location.reload());
    };
    const handleDeleteBtn = async (order_id) => {
        await deleteInvoice(order_id).then(
            async () => await deleteOrder(order_id).then(() => window.location.reload()),
        );
    };

    return (
        <div className={cx('wrapper', 'grid wide')}>
            <div className={cx('invoice-box', 'row')}>
                <div>Bạn có {invoices.length} đơn hàng</div>
                {invoices.map((i) => {
                    return (
                        <div className={cx('invoice')} key={i.invoice_id}>
                            <div>
                                Thời gian đặt hàng:{' '}
                                <span style={{ color: 'blue' }}>{formatDateTime(i.order_date)}</span>
                            </div>
                            <div>
                                Địa chỉ giao hàng:{' '}
                                {show === i.order_id ? (
                                    <>
                                        <input value={addressValue} onChange={(e) => setAddressValue(e.target.value)} />
                                        <button
                                            className={cx('change-btn')}
                                            onClick={() => handleChangeBtn(i.invoice_id)}
                                        >
                                            change
                                        </button>
                                    </>
                                ) : (
                                    <span style={{ color: 'red' }}>{i.address}</span>
                                )}
                            </div>

                            <div>
                                Phương thức thanh toán: <span style={{ color: 'red' }}>{i.payment_method}</span>
                            </div>
                            <InvoiceItem data={i.order_id} />
                            <div>
                                Tổng thanh toán:{' '}
                                <span style={{ fontSize: '1.8rem', color: 'red' }}>
                                    {i.total_amount.toLocaleString('vi-VN')}
                                </span>
                            </div>
                            <button className={cx('put-btn')} onClick={() => handlePutBtn(i.order_id)}>
                                Thay đổi địa chỉ giao hàng
                            </button>
                            <button className={cx('delete-btn')} onClick={() => handleDeleteBtn(i.order_id)}>
                                Hủy đơn hàng
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MyOrderPage;
