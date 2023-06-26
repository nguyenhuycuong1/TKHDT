import { AngleRightIcon, GuideIcon } from '~/components/Icons';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllBrands } from '~/services/userService';

const cx = classNames.bind(styles);

const CATEGORY = ['Giá: Cao - Thấp', 'Giá: Thấp - Cao'];

function Sidebar() {
    const navigate = useNavigate();
    const [options, setOptions] = useState('');
    const [brand, setBrand] = useState([]);
    useEffect(() => {
        const getListBrand = async () => {
            await getAllBrands()
                .then((res) => {
                    setBrand(res.data);
                })
                .catch((err) => console.log(err));
        };
        getListBrand();
    }, []);
    const handleClickCategory = (c) => {
        setOptions(c);
        if (c === 'Giá: Cao - Thấp') {
            navigate('/desc');
        } else if (c === 'Giá: Thấp - Cao') {
            navigate('/asc');
        } else {
            navigate(`/${c}`);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <GuideIcon className={cx('guideIcon')} />
                <span className={cx('title')}>Danh mục</span>
            </div>
            <div className={cx('container')}>
                {CATEGORY.map((c, index) => {
                    return (
                        <li
                            key={index}
                            className={cx('options', options === c ? 'active' : '')}
                            onClick={() => handleClickCategory(c)}
                        >
                            {options === c && (
                                <AngleRightIcon className={cx('active-icon')} width="1.6rem" height="1.6rem" />
                            )}
                            {c}
                        </li>
                    );
                })}
                {brand.map((b) => {
                    return (
                        <li
                            key={b.brand_id}
                            className={cx('options', options === b.brand_name ? 'active' : '')}
                            onClick={() => handleClickCategory(b.brand_name)}
                        >
                            {options === b.brand_name && (
                                <AngleRightIcon className={cx('active-icon')} width="1.6rem" height="1.6rem" />
                            )}
                            {b.brand_name}
                        </li>
                    );
                })}
            </div>
        </div>
    );
}

export default Sidebar;
