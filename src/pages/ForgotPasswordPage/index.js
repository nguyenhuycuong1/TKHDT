import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import styles from './ForgotPassword.module.scss';
import classNames from 'classnames/bind';
import { forgotPassword } from '~/services/userService';

const cx = classNames.bind(styles);
function ForgotPasswordPage() {
    const [data, setData] = useState({
        email: '',
        new_password: '',
    });
    const navigate = useNavigate();
    const validator = () => {
        const fields = ['email', 'new_password'];
        for (let i = 0; i < fields.length; i++) {
            if (!data[fields[i]]) {
                return false;
            }
        }
        return true;
    };

    const handleOnChangeInput = (e, id) => {
        data[id] = e.target.value;
        const copyData = { ...data };
        setData(copyData);
    };

    const handleSubmit = async () => {
        if (validator()) {
            await forgotPassword(data)
                .then((res) => {
                    alert(res.data.detail);
                })
                .catch((err) => console.log(err));
            navigate('/login');
        } else {
            alert('Something is wrong');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Link to={'/'} className={cx('logo')}>
                LAPTOP
            </Link>
            <div className={cx('login-box')}>
                <span className={cx('title')}>Forgot password</span>

                <div className={cx('form-login')}>
                    <input
                        type="email"
                        value={data['email']}
                        onChange={(e) => handleOnChangeInput(e, 'email')}
                        className={cx('form-input')}
                        placeholder="Email"
                    ></input>
                    <input
                        type="password"
                        value={data['new_password']}
                        onChange={(e) => handleOnChangeInput(e, 'new_password')}
                        className={cx('form-input')}
                        placeholder="New Password"
                    ></input>

                    <button className={cx('form-btn')} onClick={() => handleSubmit()}>
                        Update Password
                    </button>
                    <div className={cx('signIn')}>
                        Already have an account? <Link to={'/login'}>Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;
