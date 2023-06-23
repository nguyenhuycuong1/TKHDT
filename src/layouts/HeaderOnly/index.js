import Header from '../components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="bgcolor">{children}</div>
        </div>
    );
}

export default HeaderOnly;
