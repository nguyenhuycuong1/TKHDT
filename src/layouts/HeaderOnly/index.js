import Header from '../components/Header';

function HeaderOnly({ children, childPage }) {
    return (
        <div>
            <Header childPage={childPage} />
            <div className="bgcolor">{children}</div>
        </div>
    );
}

export default HeaderOnly;
