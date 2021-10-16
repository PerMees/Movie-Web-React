import { GET_CINEMAS, GET_SUB_CINEMAS } from "../types/CinemaType";
import {
  GetCinemaService,
  GetSubCinemaService,
} from "../services/CinemaService";

export const GetCinemaAction = () => {
  return (dispatch) => {
    let promise = GetCinemaService();
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
    let promise = GetSubCinemaService(maRap);
    promise.then((result) => {
      dispatch({ type: GET_SUB_CINEMAS, arrSubCinema: result.data.content });
    });
    promise.catch((err) => {
      console.log(err);
    });
  };
};
