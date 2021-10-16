import { OPEN_ADMIN_MODEL } from "../types/AdminType";
export const OpenAdminModelAction = () => {
  return (dispatch) => {
    dispatch({ type: OPEN_ADMIN_MODEL });
  };
};
