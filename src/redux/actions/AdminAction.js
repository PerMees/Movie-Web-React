import {
  ADD_FILM,
  CLOSE_ADMIN_MODEL,
  DELETE_FILM,
  OPEN_ADMIN_MODEL,
} from "../types/AdminType";
import { filmService } from "../services/FilmService";
import { message } from "antd";
export const OpenAdminModelAction = (componentType) => {
  return (dispatch) => {
    dispatch({ type: OPEN_ADMIN_MODEL, componentType });
  };
};
export const CloseAdminModelAction = () => {
  return (dispatch) => {
    dispatch({ type: CLOSE_ADMIN_MODEL });
  };
};
export const AddFilmAction = (formData, film) => {
  return (dispatch) => {
    let promise = filmService.AddFilm(formData);
    promise.then((result) => {
      message.success("Thêm phim thành công!");
      dispatch({ type: ADD_FILM, film });
      dispatch({ type: CLOSE_ADMIN_MODEL });
    });
    promise.catch((err) => {
      message.error("Thêm phim thất bại!");
      console.log(err.response.data);
    });
  };
};
export const DeleteFilmAction = (maPhim) => {
  return (dispatch) => {
    let promise = filmService.DeleteFilm(maPhim);
    promise.then((result) => {
      message.success("Xóa phim thành công!");
      dispatch({ type: DELETE_FILM, maPhim });
    });
    promise.catch((err) => {
      console.log(err);
    });
  };
};
