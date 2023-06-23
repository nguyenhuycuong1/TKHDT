import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './LoginPage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const arr = ['Login', 'Register'];
function LoginPage() {
    const [options, setOptions] = useState('Login');
    return (
        <div className={cx('wrapper')}>
            <Link to={'/'} className={cx('logo')}>
                LAPTOP
            </Link>
            <div className={cx('login-box')}>
                <span className={cx('title')}>{options}</span>
                <div className={cx('show')}>
                    {arr.map((a, index) => {
                        return (
                            <div
                                className={cx('options', options === a ? 'active' : '')}
                                key={index}
                                onClick={() => {
                                    setOptions(a);
                                }}
                            >
                                {a}
                            </div>
                        );
                    })}
                </div>
                {options === 'Login' ? (
                    <div className={cx('form-login')}>
                        <input type="text" className={cx('form-input')} placeholder="Username"></input>
                        <input type="password" className={cx('form-input')} placeholder="Password"></input>
                        <Link to={'/forgot-password'} className={cx('ftpw')}>
                            Forgot password?
                        </Link>
                        <button className={cx('form-btn')}>Login</button>
                    </div>
                ) : (
                    <div className={cx('form-login')}>
                        <input type="text" className={cx('form-input')} placeholder="Your Name"></input>
                        <input type="text" className={cx('form-input')} placeholder="Birth of date"></input>
                        <select className={cx('form-input')} name="gender">
                            <option>-- Select your gender --</option>

                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <input type="text" className={cx('form-input')} placeholder="Username"></input>
                        <input type="text" className={cx('form-input')} placeholder="Phone Number"></input>
                        <input type="email" className={cx('form-input')} placeholder="Email"></input>
                        <input type="password" className={cx('form-input')} placeholder="Password"></input>
                        <button className={cx('form-btn')}>Register</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginPage;
