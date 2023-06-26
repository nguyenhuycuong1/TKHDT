import styles from './HomePage.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductItem from '~/components/ProductItem';
import { getAllBrands, getAllProducts, getProductsByBrand, getProductsOderBy } from '~/services/userService';

const cx = classNames.bind(styles);

function HomgPage() {
    const params = useParams();
    const type = params.type;
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        const getBrands = async () => {
            await getAllBrands()
                .then((res) => {
                    setBrands(res.data);
                })
                .catch((err) => console.log(err));
        };
        getBrands();
    }, []);

    useEffect(() => {
        const getProductList = async () => {
            await getAllProducts()
                .then((res) => {
                    setProducts(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        const getPDbyBrand = async () => {
            const brandId = await brands.find((b) => b.brand_name === type).brand_id;
            await getProductsByBrand(brandId)
                .then((res) => setProducts(res.data))
                .catch((err) => console.log(err));
        };
        const getPDOrderBy = async () => {
            await getProductsOderBy(type)
                .then((res) => setProducts(res.data))
                .catch((err) => console.log(err));
        };
        if (type === 'desc' || type === 'asc') {
            getPDOrderBy();
        } else if (!type) {
            getProductList();
        } else {
            getPDbyBrand();
        }
    }, [type, brands]);

    return (
        <div className={cx('wrapper', 'grid wide')}>
            <div className={cx('product-list', 'row')}>
                {products.map((p, index) => {
                    return (
                        <div key={index} className="col l-3">
                            <ProductItem data={p} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HomgPage;
