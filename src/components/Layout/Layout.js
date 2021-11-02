import MainHeader from "./MainHeader";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <MainHeader />
      <div className={classes["children-wrapper"]}>{children}</div>
    </div>
  );
};

export default Layout;
