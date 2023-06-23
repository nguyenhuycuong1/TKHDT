import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={'bgcolor'}>
                <div className={cx('container', 'grid wide')}>
                    <div className="row">
                        <div className="col l-2">
                            <Sidebar />
                        </div>
                        <div className="col l-10">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
