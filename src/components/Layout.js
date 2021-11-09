import Header from "./Header/Header";
import HeaderMenu from "./Header/HeaderMenu";
import Footer from "./Footer";
import classes from "./Layout.module.css";
function Layout(props) {
  return (
    <div>
      <Header />
      <main className={classes.layout}>
        <HeaderMenu />
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
