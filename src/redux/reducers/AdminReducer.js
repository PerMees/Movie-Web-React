import { CLOSE_ADMIN_MODEL, OPEN_ADMIN_MODEL } from "../types/AdminType";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  openModal: false,
  componentType: "AddFilm",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_ADMIN_MODEL: {
      return {
        ...state,
        openModal: true,
        componentType: action.componentType,
      };
    }
    case CLOSE_ADMIN_MODEL: {
      return { ...state, openModal: false };
    }
    default:
      return { ...state };
  }
};
