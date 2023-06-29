import { Link } from 'react-router-dom';
import styles from './AddProduct.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { createNewProduct } from '~/services/userService';

const cx = classNames.bind(styles);

function AddProduct() {
    const [data, setData] = useState({
        product_id: '',
        product_name: '',
        description: '',
        price: null,
        image: '',
        // brand_id: '',
    });

    const handleOnChange = (e, id) => {
        data[id] = e.target.value;
        const copyData = { ...data };
        setData(copyData);
    };

    const handleOnSubmit = async () => {
        await createNewProduct(data)
            .then(() => alert('Đã thêm một sản phẩm'))
            .catch((err) => console.log(err));
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
            <div>Add new product</div>
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
                Add
            </button>
        </div>
    );
}

export default AddProduct;
