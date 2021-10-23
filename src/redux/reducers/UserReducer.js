import {DELETE_USER, GET_LIST_USER} from "../types/UserType";

const initialState = {
    listUser: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_USER : {
            state.listUser = action.listUser;
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