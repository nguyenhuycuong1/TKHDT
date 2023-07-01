import styles from './UpdateProduct.module.scss';
import classNames from 'classnames/bind';

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductsById } from '~/services/userService';

const cx = classNames.bind(styles);

function UpdateProduct() {
    const params = useParams();
    const product_id = params.product_id;
    const [oldData, setOldData] = useState({});

    const [data, setData] = useState({
        product_id: '',
        product_name: '',
        description: '',
        price: '',
        image: '',
        // brand_id: '',
    });

    useEffect(() => {
        const getproduct = async () => {
            await getProductsById(product_id).then((res) => setOldData(res.data));
        };
        getproduct();
    }, [product_id]);

    const handleOnChange = (e, id) => {
        data[id] = e.target.value;
        const copyData = { ...data };
        setData(copyData);
    };

    useEffect(() => {
        setData({
            product_id: oldData.product_id,
            product_name: oldData.product_name,
            description: oldData.description,
            price: oldData.price,
            image: oldData.image,
            // brand_id: '',
        });
    }, [oldData]);

    const handleOnSubmit = async () => {
        setData({
            product_id: '',
            product_name: '',
            description: '',
            price: '',
            image: '',
            // brand_id: '',
        });
    };

    return (
        <div className={cx('wrapper')}>
            <Link to={'/admin'} className={cx('logo')}>
                ADMIN
            </Link>
            <div>Update product</div>
            <div className={cx('form')}>
                <div className={cx('form-lable-wrap')}>
                    <label className={cx('form-lable')}>Product name</label>
                    <div>
                        <label className={cx('form-lable')}>:</label>
                        <input
                            className={cx('from-input')}
                            placeholder="type here..."
                            value={data['product_name']}
                            onChange={(e) => handleOnChange(e, 'product_name')}
                        />
                    </div>
                </div>
                <div className={cx('form-lable-wrap')}>
                    <label className={cx('form-lable')}>Product ID</label>
                    <div>
                        <label className={cx('form-lable')}>:</label>
                        <input
                            className={cx('from-input')}
                            placeholder="type here..."
                            value={data['product_id']}
                            onChange={(e) => handleOnChange(e, 'product_id')}
                        />
                    </div>
                </div>
                <div className={cx('form-lable-wrap')}>
                    <label className={cx('form-lable')}>Description</label>
                    <div>
                        <label className={cx('form-lable')}>:</label>
                        <input
                            className={cx('from-input')}
                            placeholder="type here..."
                            value={data['description']}
                            onChange={(e) => handleOnChange(e, 'description')}
                        />
                    </div>
                </div>
                <div className={cx('form-lable-wrap')}>
                    <label className={cx('form-lable')}>Link Image</label>
                    <div>
                        <label className={cx('form-lable')}>:</label>
                        <input
                            className={cx('from-input')}
                            placeholder="type here..."
                            value={data['image']}
                            onChange={(e) => handleOnChange(e, 'image')}
                        />
                    </div>
                </div>
                <div className={cx('form-lable-wrap')}>
                    <label className={cx('form-lable')}>Price</label>
                    <div>
                        <label className={cx('form-lable')}>:</label>
                        <input
                            className={cx('from-input')}
                            placeholder="type here..."
                            value={data['price']}
                            onChange={(e) => handleOnChange(e, 'price')}
                        />
                    </div>
                </div>
                {/* <div className={cx('form-lable-wrap')}>
                    <label className={cx('form-lable')}>Brand ID</label>
                    <div>
                        <label className={cx('form-lable')}>:</label>
                        <input
                            className={cx('from-input')}
                            placeholder="type here..."
                            value={data['brand_id']}
                            onChange={(e) => handleOnChange(e, 'brand_id')}
                        />
                    </div>
                </div> */}
            </div>
            <button className={cx('submit')} onClick={() => handleOnSubmit()}>
                Update
            </button>
        </div>
    );
}

export default UpdateProduct;
