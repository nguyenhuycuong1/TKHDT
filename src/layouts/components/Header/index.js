import { CartIcon, GlassIcon, UserCircleIcon } from '~/components/Icons';
import { useContext, useState } from 'react';
import { AuthContext } from '~/contexts/AuthContext';
import { LogOut } from '~/contexts/AuthActions';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header({ childPage }) {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const { user, dispatch } = useContext(AuthContext);

    const handleToggle = () => {
        if (user) {
            setToggle(!toggle);
        } else {
            navigate('/login');
        }
    };

    const handleLogout = () => {
        setTimeout(() => {
            dispatch(LogOut());
            navigate('/');
            window.location.reload();
        }, 2000);
    };

    const handleProfile = () => {
        navigate(`/user/profile/${user.username}`);
        setToggle(false);
    };

    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className={cx('header')}>
                    <Link className={cx('logo')} to={'/'}>
                        <span>LAPTOP</span>
                    </Link>
                    {!childPage && (childPage !== 'cart' || childPage !== 'order') && (
                        <div className={cx('search-group')}>
                            <input className={cx('search-input')} placeholder="Tìm kiếm"></input>
                            <GlassIcon className={cx('search-icon')} width="2.4rem" height="2.4rem" />
                        </div>
                    )}

                    <div className={cx('user-service')}>
                        <Link to={'/cart'} className={cx('cart')}>
                            <CartIcon className={cx('cart-icon')} width="4rem" height="4rem" />
                            <span>Giỏ hàng</span>
                        </Link>
                        <button className={cx('user')} onClick={() => handleToggle()}>
                            <UserCircleIcon className={cx('user-icon')} width="2.8rem" height="2.8rem" />
                            {user ? <span>{user.username}</span> : <span>Đăng nhập</span>}
                        </button>
                        {user && toggle && (
                            <div className={cx('popper')}>
                                <div className={cx('wrap')} onClick={() => handleProfile()}>
                                    <span>Profile</span>
                                </div>
                                <div className={cx('wrap')} onClick={() => handleLogout()}>
                                    <span>Logout</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
