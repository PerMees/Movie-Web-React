import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import Carousel from "../components/Carousel/Carousel";
import ListFilm from "../components/ListFilm/ListFilm";
import Schedule from "../components/Schedule/Schedule";
import { DONE_LOADING, START_LOADING } from "../redux/types/LoadingType";

export default function HomePage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Movie";
    setTimeout(() => {
      dispatch({ type: DONE_LOADING });
    }, 1000);
    dispatch({ type: START_LOADING });
  }, []);
  return (
    <Fragment>
      <Carousel />
      <ListFilm />
      <Schedule />
    </Fragment>
  );
}
