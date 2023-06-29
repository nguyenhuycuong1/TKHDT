import { useState } from 'react';
import styles from './LayoutAdmin.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const OPTIONSBTN = ['User', 'Product', 'Order'];

function LayoutAdmin({ children }) {
    const navigate = useNavigate();
    const [, setOptions] = useState('');
    const handleSetOptions = (o) => {
        setOptions(o);
        navigate(`/admin/${o}`);
    };
    const handleLogo = () => {
        navigate('/admin');
    };
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('logo')} onClick={() => handleLogo()}>
                ADMIN
            </h1>
            <div className={cx('layout-wrapper')}>
                <div className={cx('controller-box')}>
                    {OPTIONSBTN.map((o, index) => {
                        return (
                            <button key={index} className={cx('controller-btn')} onClick={() => handleSetOptions(o)}>
                                {o}
                            </button>
                        );
                    })}
                </div>
                <div className={cx('screen')}>{children}</div>
            </div>
        </div>
    );
}

export default LayoutAdmin;
