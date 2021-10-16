import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Route } from "react-router-dom";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { DONE_LOADING, START_LOADING } from "../redux/types/LoadingType";
import { useEffect } from "react";

const HomeTemplate = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Movie";
    setTimeout(() => {
      dispatch({ type: DONE_LOADING });
    }, 1000);
    dispatch({ type: START_LOADING });
  }, []);
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
