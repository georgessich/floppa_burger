import Header from './Header';
import HeaderMenu from './HeaderMenu';

function Layout(props) {
    return (
        <div>
            <Header />
            <HeaderMenu />
            <main>{props.children}</main>
        </div>
    )
}

export default Layout;