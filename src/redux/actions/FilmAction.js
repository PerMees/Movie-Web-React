import {
  GET_FILMS,
  GET_BANNERS,
  GET_FILM_BY_ID,
  TOGGLE_TRAILER,
  GET_FILMS_OF_CINEMA,
  GET_SCHEDULE_OF_FILM,
} from "../types/FilmType";
import { http, GROUP_ID } from "../../util/setting";

export const GetListFilmAction = () => {
  return (dispatch) => {
    let promise = http.get(
      `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`
    );
    promise.then((result) => {
      dispatch({ type: GET_FILMS, arrFilm: result.data.content });
    });
    promise.catch((err) => {
      console.log(err);
    });
  };
};

export const GetBannerAction = () => {
  return (dispatch) => {
    let promise = http.get(`/api/QuanLyPhim/LayDanhSachBanner`);
    promise
      .then((result) => {
        dispatch({ type: GET_BANNERS, arrBanner: result.data.content });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const GetFilmByIdAction = (id) => {
  return (dispatch) => {
    let promise = http.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
    promise.then((result) => {
      dispatch({ type: GET_FILM_BY_ID, filmChoice: result.data.content });
    });
    promise.catch((err) => {
      console.log(err);
    });
  };
};

export const GetFilmOfCinemaAction = (maRap = "BHDStar") => {
  return (dispatch) => {
    let promise = http.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maRap}&maNhom=${GROUP_ID}`
    );

    promise.then((result) => {
      dispatch({
        type: GET_FILMS_OF_CINEMA,
        arrFilmsOfCinema: result.data.content,
      });
    });
    promise.catch((err) => {
      console.log(err);
    });
  };
};

export const GetScheduleOfFilmAction = (maPhim) => {
  return (dispatch) => {
    let promise = http.get(
      `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    );

    promise.then((result) => {
      dispatch({
        type: GET_SCHEDULE_OF_FILM,
        filmDetail: result.data.content,
      });
    });
    promise.catch((err) => {
      console.log(err);
    });
  };
};

export const ToggleTrailerAction = (bool) => ({
  type: TOGGLE_TRAILER,
  bool,
});
