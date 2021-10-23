import {ADD_USER, DELETE_USER, EDIT_USER, GET_LIST_USER} from "../types/UserType";
import {OPEN_ADMIN_MODEL} from "../types/AdminType";

const initialState = {
    listUser: [],
    userChoice: {},
}
export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_ADMIN_MODEL: {
            state.userChoice = action.user;
            return {...state}
        }
        case GET_LIST_USER : {
            state.listUser = action.listUser;
            return {...state}
        }
        case ADD_USER: {
            state.listUser.push(action.user);
            return {...state}
        }
        case EDIT_USER: {
            const listUserUpdate = [...state.listUser].filter(user => user.taiKhoan !== action.user.taiKhoan);
            listUserUpdate.push(action.user);
            state.listUser = listUserUpdate;
            return {...state}
        }
        case DELETE_USER: {
            const listUserUpdate = [...state.listUser].filter(user => user.taiKhoan !== action.taiKhoan)
            state.listUser = listUserUpdate
            return {...state}
        }
        default:
            return {...state}
    }
}