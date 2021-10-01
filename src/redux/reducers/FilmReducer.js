/* eslint-disable import/no-anonymous-default-export */
import {
  GET_FILMS,
  GET_BANNERS,
  GET_FILMS_OF_CINEMA,
  GET_FILM_BY_ID,
  TOGGLE_TRAILER,
  GET_SCHEDULE_OF_FILM,
} from "../types/FilmType";

const initialState = {
  arrBanner: [],
  arrFilm: [],
  arrFilmsOfCinema: [],
  filmChoice: {},
  viewTrailer: false,
  filmDetail: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS: {
      state.arrFilm = action.arrFilm;
      return { ...state };
    }
    case GET_BANNERS: {
      state.arrBanner = action.arrBanner;
      return { ...state };
    }
    case GET_FILMS_OF_CINEMA: {
      state.arrFilmsOfCinema = action.arrFilmsOfCinema;
      return { ...state };
    }
    case GET_FILM_BY_ID: {
      state.filmChoice = action.filmChoice;
      return { ...state };
    }
    case TOGGLE_TRAILER: {
      state.viewTrailer = action.bool;
      return { ...state };
    }
    case GET_SCHEDULE_OF_FILM: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
