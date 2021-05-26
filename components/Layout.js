import Nav from './navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div className="content">
                {children}
            </div>
        </>
    );
}

export default Layout;