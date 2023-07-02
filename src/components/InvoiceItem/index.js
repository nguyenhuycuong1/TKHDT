import styles from './InvoiceItem.module.scss';
import classNames from 'classnames/bind';

import PDInCart from '../PDInCart';
import { useEffect, useState } from 'react';
import { getOrderById } from '~/services/userService';

const cx = classNames.bind(styles);

function InvoiceItem({ data }) {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        const getOrder = async () => {
            await getOrderById(data).then((res) => setOrder(res));
        };
        getOrder();
    }, [data]);
    return (
        <div className={cx('wrapper')}>
            {order.map((o, index) => (
                <PDInCart key={index} data={o} inOrderPage={true} />
            ))}
        </div>
    );
}

export default InvoiceItem;
