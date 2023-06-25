import { useEffect, useState } from 'react';
import styles from './ProfilePage.module.scss';
import classNames from 'classnames/bind';

import { getUserbyUsername } from '~/services/userService';

const cx = classNames.bind(styles);

function ProfilePage({ username }) {
    const [user, setUser] = useState('user');
    useEffect(() => {
        const getUser = async () => {
            await getUserbyUsername(username.username)
                .then((res) => {
                    setUser(res.result);
                })
                .catch((err) => console.log(err));
        };
        getUser();
    }, [username]);
    const [gender, setGender] = useState('');
    useEffect(() => {
        if (user.sex === 'MALE') {
            setGender('Nam');
        } else if (user.sex === 'FEMALE') {
            setGender('Nữ');
        }
    }, [user.sex]);
    return (
        <div className={cx('wrapper', 'grid wide')}>
            <div className={cx('profile-box')}>
                <div className={cx('field-wrap')}>
                    <div className={cx('info-title')}>Tên đăng nhập: </div>
                    <span className={cx('info-value')}>{user.username}</span>
                </div>
                <div className={cx('field-wrap')}>
                    <div className={cx('info-title')}>Tên: </div>
                    <span className={cx('info-value')}>{user.name}</span>
                </div>
                <div className={cx('field-wrap')}>
                    <div className={cx('info-title')}>Email: </div>
                    <span className={cx('info-value')}>{user.email}</span>
                </div>
                <div className={cx('field-wrap')}>
                    <div className={cx('info-title')}>Số điện thoại: </div>
                    <span className={cx('info-value')}>{user.phone_number}</span>
                </div>
                <div className={cx('field-wrap')}>
                    <div className={cx('info-title')}>Giới tính: </div>
                    <span className={cx('info-value')}>{gender}</span>
                </div>
                <div className={cx('field-wrap')}>
                    <div className={cx('info-title')}>Ngày sinh: </div>
                    <span className={cx('info-value')}>{user.birth}</span>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
