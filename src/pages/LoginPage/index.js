import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './LoginPage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const arr = ['Login', 'Register'];
function LoginPage() {
    const [options, setOptions] = useState('Login');
    const [registerData, setRegisterData] = useState({
        name: '',
        birth: '',
        sex: '',
        user_name: '',
        phone_number: '',
        email: '',
        password: '',
    });

    const [loginData, setLoginData] = useState({
        user_name: '',
        password: '',
    });

    const handleOnChangeInput = (e, id) => {
        if (options === 'Login') {
            loginData[id] = e.target.value;
            const copyData = { ...loginData };
            setLoginData(copyData);
        } else {
            registerData[id] = e.target.value;
            const copyData = { ...registerData };
            setRegisterData(copyData);
        }
    };

    const validator = () => {
        let fields = [];
        if (options === 'Login') {
            fields = ['user_name', 'password'];
            for (let i = 0; i < fields.length; i++) {
                if (!loginData[fields[i]]) {
                    return false;
                }
            }
        } else {
            fields = ['name', 'birth', 'sex', 'user_name', 'phone_number', 'email', 'password'];
            for (let i = 0; i < fields.length; i++) {
                if (!registerData[fields[i]]) {
                    return false;
                }
            }
        }
        return true;
    };

    const handleRegister = () => {
        if (validator()) {
            console.log(registerData);
        } else {
            alert('Somthing is wrong');
        }
    };
    const handleLogin = () => {
        if (validator()) {
            console.log(loginData);
        } else {
            alert('Somthing is wrong');
        }
    };

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
                        <input
                            type="text"
                            value={loginData['user_name']}
                            className={cx('form-input')}
                            onChange={(e) => handleOnChangeInput(e, 'user_name')}
                            placeholder="Username"
                        ></input>
                        <input
                            type="password"
                            value={loginData['password']}
                            className={cx('form-input')}
                            onChange={(e) => handleOnChangeInput(e, 'password')}
                            placeholder="Password"
                        ></input>
                        <Link to={'/forgot-password'} className={cx('ftpw')}>
                            Forgot password?
                        </Link>
                        <button className={cx('form-btn')} onClick={() => handleLogin()}>
                            Login
                        </button>
                    </div>
                ) : (
                    <div className={cx('form-register')}>
                        <input
                            type="text"
                            value={registerData['name']}
                            className={cx('form-input')}
                            onChange={(e) => handleOnChangeInput(e, 'name')}
                            placeholder="Your Name"
                        ></input>
                        <input
                            type="text"
                            value={registerData['birth']}
                            className={cx('form-input')}
                            onChange={(e) => handleOnChangeInput(e, 'birth')}
                            placeholder="Birth of date"
                        ></input>
                        <select
                            className={cx('form-input')}
                            value={registerData['sex']}
                            onChange={(e) => handleOnChangeInput(e, 'sex')}
                            name="gender"
                        >
                            <option>-- Select your gender --</option>

                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <input
                            type="text"
                            value={registerData['user_name']}
                            className={cx('form-input')}
                            onChange={(e) => handleOnChangeInput(e, 'user_name')}
                            placeholder="Username"
                        ></input>
                        <input
                            type="text"
                            value={registerData['phone_number']}
                            className={cx('form-input')}
                            onChange={(e) => handleOnChangeInput(e, 'phone_number')}
                            placeholder="Phone Number"
                        ></input>
                        <input
                            type="email"
                            value={registerData['email']}
                            className={cx('form-input')}
                            onChange={(e) => handleOnChangeInput(e, 'email')}
                            placeholder="Email"
                        ></input>
                        <input
                            type="password"
                            value={registerData['password']}
                            className={cx('form-input')}
                            onChange={(e) => handleOnChangeInput(e, 'password')}
                            placeholder="Password"
                        ></input>
                        <button className={cx('form-btn')} onClick={() => handleRegister()}>
                            Register
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginPage;
