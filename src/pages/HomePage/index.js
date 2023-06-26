import styles from './HomePage.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import ProductItem from '~/components/ProductItem';
import { getAllProducts } from '~/services/userService';

const cx = classNames.bind(styles);

function HomgPage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProductList = async () => {
            await getAllProducts().then((res) => setProducts(res));
        };
        getProductList();
    }, []);
    return (
        <div className={cx('wrapper', 'grid wide')}>
            <div className={cx('product-list', 'row')}>
                {products.map((p) => {
                    return (
                        <div key={p.products_id} className="col l-3">
                            <ProductItem data={p} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HomgPage;
