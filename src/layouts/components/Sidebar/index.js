import { AngleRightIcon, GuideIcon } from '~/components/Icons';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);
const CATEGORY = [
    'Giá: Cao - Thấp',
    'Giá: Thấp - Cao',
    'MacBook',
    'Asus',
    'MSI',
    'Lenovo',
    'HP',
    'Dell',
    'Acer',
    'Xiaomi',
    'LG',
    'Intel',
];

function Sidebar() {
    const [options, setOptions] = useState('');
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
                            onClick={() => setOptions(c)}
                        >
                            {options === c && (
                                <AngleRightIcon className={cx('active-icon')} width="1.6rem" height="1.6rem" />
                            )}
                            {c}
                        </li>
                    );
                })}
            </div>
        </div>
    );
}

export default Sidebar;
