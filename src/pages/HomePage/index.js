import styles from './HomePage.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ProductItem from '~/components/ProductItem';
import { getAllBrands, getAllProducts, getProductsByBrand, getProductsOderBy } from '~/services/userService';

const cx = classNames.bind(styles);

function HomgPage() {
    const params = useParams();
    const type = params.type;
    const navigate = useNavigate();
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

    const findBrand = () => {
        return brands.find((b) => b.brand_name === type);
    };

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
        } else if (!!findBrand() && type === findBrand().brand_name) {
            getPDbyBrand();
        } else {
            navigate('/');
        }
    }, [type, brands, navigate]);

    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
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
            <div className={cx('footer')}></div>
        </div>
    );
}

export default HomgPage;
