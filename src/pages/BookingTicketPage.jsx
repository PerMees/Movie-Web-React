import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetFilmByIdAction } from "../redux/actions/FilmAction";

export default function BookingTicketPage(props) {
  const { filmChoice } = useSelector((state) => state.FilmReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    const action = GetFilmByIdAction(props.match.params.id);
    dispatch(action);
  }, []);

  useEffect(() => {
    document.title = filmChoice.tenPhim;
  }, [filmChoice.tenPhim]);
  return <>BookingTicketPage</>;
}
