import { GET_CINEMAS, GET_SUB_CINEMAS } from "../types/CinemaType";
import { http } from "../../util/setting";

export const GetCinemaAction = () => {
  return (dispatch) => {
    let promise = http.get(`/api/QuanLyRap/LayThongTinHeThongRap`);

    promise.then((result) => {
      dispatch({ type: GET_CINEMAS, arrCinema: result.data.content });
    });
    promise.catch((err) => {
      console.log(err);
    });
  };
};

export const GetSubCinemaAction = (maRap = "BHDStar") => {
  return (dispatch) => {
    let promise = http.get(
      `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maRap}`
    );

    promise.then((result) => {
      dispatch({ type: GET_SUB_CINEMAS, arrSubCinema: result.data.content });
    });
    promise.catch((err) => {
      console.log(err);
    });
  };
};
