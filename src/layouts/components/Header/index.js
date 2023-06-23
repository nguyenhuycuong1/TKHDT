import { CartIcon, GlassIcon, UserCircleIcon } from '~/components/Icons';
import { useContext } from 'react';
import { AuthContext } from '~/contexts/AuthContext';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    const { user } = useContext(AuthContext);
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className={cx('header')}>
                    <Link className={cx('logo')} to={'/'}>
                        <span>LAPTOP</span>
                    </Link>
                    <div className={cx('search-group')}>
                        <input className={cx('search-input')} placeholder="Tìm kiếm"></input>
                        <GlassIcon className={cx('search-icon')} width="2.4rem" height="2.4rem" />
                    </div>
                    <div className={cx('user-service')}>
                        <Link to={'/cart'} className={cx('cart')}>
                            <CartIcon className={cx('cart-icon')} width="4rem" height="4rem" />
                            <span>Giỏ hàng</span>
                        </Link>
                        <Link to={user ? '' : '/login'} className={cx('user')}>
                            <UserCircleIcon className={cx('user-icon')} width="2.8rem" height="2.8rem" />
                            {user ? <span>UserName</span> : <span>Đăng nhập</span>}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
