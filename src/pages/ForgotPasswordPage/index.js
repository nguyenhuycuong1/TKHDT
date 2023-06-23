import { Link } from 'react-router-dom';

import styles from './ForgotPassword.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function ForgotPasswordPage() {
    return (
        <div className={cx('wrapper')}>
            <Link to={'/'} className={cx('logo')}>
                LAPTOP
            </Link>
            <div className={cx('login-box')}>
                <span className={cx('title')}>Forgot password</span>

                <div className={cx('form-login')}>
                    <input type="email" className={cx('form-input')} placeholder="Email"></input>
                    <input type="password" className={cx('form-input')} placeholder="New Password"></input>

                    <button className={cx('form-btn')}>Update Password</button>
                    <div className={cx('signIn')}>
                        Already have an account? <Link to={'/login'}>Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;
