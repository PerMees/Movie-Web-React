import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetFilmByIdAction } from "../redux/actions/FilmAction";
import { DONE_LOADING, START_LOADING } from "../redux/types/LoadingType";

export default function BookingTicketPage(props) {
  const { filmChoice } = useSelector((state) => state.FilmReducer);

  // Loading trước khi vào trang
  const dispatch = useDispatch();
  useEffect(() => {
    (async function run() {
      const action = GetFilmByIdAction(props.match.params.id);
      await dispatch(action);
      setTimeout(() => {
        dispatch({ type: DONE_LOADING });
      }, 1000);
      dispatch({ type: START_LOADING });
    })();
  }, []);

  useEffect(() => {
    document.title = filmChoice.tenPhim;
  }, [filmChoice.tenPhim]);
  return <>BookingTicketPage</>;
}
