import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Route } from "react-router-dom";
import { Fragment } from "react";

const HomeTemplate = (props) => {
  return (
    <Route
      exact={props.exact}
      path={props.path}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header />
            <props.component {...propsRoute} />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};
export default HomeTemplate;
