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
                <footer className={cx('footer')}>
                    <div className="grid wide">
                        <div className="row">
                            <div className={cx('footer-col', 'col l-3')}>
                                <span className={cx('footer-logo')}>LAPTOP</span>
                                <h4 className={cx('footer-address')}>
                                    Trường Đại học Thăng Long, Nghiêm Xuân Yêm, Đại Kim, Hoàng Mai, Hà Nội
                                </h4>
                                <h4 className={cx('footer-address')}>Nhóm 6</h4>
                            </div>
                            <div className={cx('footer-col', 'col l-3')}>
                                <span className={cx('footer-title')}>About Us</span>
                                <h4 className={cx('footer-about')}>Website selling laptops.</h4>
                                <h4>
                                    <button className={cx('footer-btn')}>More Info</button>
                                </h4>
                                <h4>
                                    <button className={cx('footer-btn')}>Contact Us</button>
                                </h4>
                            </div>
                            <div className={cx('footer-col', 'col l-3')}>
                                <span className={cx('footer-title')}>Help Us</span>
                                <div className={cx('col-child', 'row')}>
                                    <div className="col l-6">
                                        <ul style={{ padding: 0, listStyle: 'none' }}>
                                            <li>
                                                {' '}
                                                <a href="#" className={cx('help-item')}>
                                                    {' '}
                                                    Home
                                                </a>{' '}
                                            </li>
                                            <li>
                                                {' '}
                                                <a href="#" className={cx('help-item')}>
                                                    {' '}
                                                    About
                                                </a>{' '}
                                            </li>
                                            <li>
                                                {' '}
                                                <a href="#" className={cx('help-item')}>
                                                    {' '}
                                                    Service
                                                </a>{' '}
                                            </li>
                                            <li>
                                                {' '}
                                                <a href="#" className={cx('help-item')}>
                                                    {' '}
                                                    Team
                                                </a>{' '}
                                            </li>
                                            <li>
                                                {' '}
                                                <a href="#" className={cx('help-item')}>
                                                    {' '}
                                                    Help
                                                </a>{' '}
                                            </li>
                                            <li>
                                                {' '}
                                                <a href="#" className={cx('help-item')}>
                                                    {' '}
                                                    Contact
                                                </a>{' '}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col l-6">
                                        <ul style={{ padding: 0, listStyle: 'none' }}>
                                            <li>
                                                {' '}
                                                <a href="#" className={cx('help-item')}>
                                                    {' '}
                                                    Cab Faciliy
                                                </a>{' '}
                                            </li>
                                            <li>
                                                {' '}
                                                <a href="#" className={cx('help-item')}>
                                                    {' '}
                                                    Fax
                                                </a>{' '}
                                            </li>
                                            <li>
                                                {' '}
                                                <a href="#" className={cx('help-item')}>
                                                    {' '}
                                                    Terms
                                                </a>{' '}
                                            </li>
                                            <li>
                                                {' '}
                                                <a href="#" className={cx('help-item')}>
                                                    {' '}
                                                    Policy
                                                </a>{' '}
                                            </li>
                                            <li>
                                                {' '}
                                                <a href="#" className={cx('help-item')}>
                                                    {' '}
                                                    Refunds
                                                </a>{' '}
                                            </li>
                                            <li>
                                                {' '}
                                                <a href="#" className={cx('help-item')}>
                                                    {' '}
                                                    Paypal
                                                </a>{' '}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('footer-col', 'col l-3')}>
                                <span className={cx('footer-title')}>Newsletter</span>
                                <div className={cx('social-wrap')}>
                                    <div>
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                                            alt="facebook-icon"
                                            className={cx('social-img')}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://icon-library.com/images/instagram-small-icon/instagram-small-icon-12.jpg"
                                            alt="ig-icon"
                                            className={cx('social-img')}
                                        />
                                    </div>
                                </div>
                                <input className={cx('footer-input')} placeholder="search here..." />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default DefaultLayout;
