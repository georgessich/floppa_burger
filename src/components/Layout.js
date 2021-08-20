import Header from './Header';
import HeaderMenu from './HeaderMenu';
import Footer from './Footer';
function Layout(props) {
    return (
        <div>
            <Header />
            <HeaderMenu />
            <main>{props.children}</main>
            <Footer />
        </div>
    )
}

export default Layout;