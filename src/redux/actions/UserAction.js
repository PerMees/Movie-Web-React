import {ACCESS_TOKEN, USER_ACCOUNT} from "../../util/setting";
import {history} from "../../App";
import {userService} from "../../services/UserServices";
import {message} from "antd";
import {DELETE_USER, GET_LIST_USER} from "../types/UserType";

export const RegisterAction = (user) => {
    return (dispatch) => {
        let promise = userService.Register(user);
        promise.then((result) => {
            message.success("Đăng ký thành công!");
            history.push("/login");
        });
        promise.catch((err) => {
            message.error("Tài khoản, email hoặc họ tên đã tồn tại, vui lòng đăng ký lại!");
        });
    };
};

export const LoginAction = (account) => {
    return (dispatch) => {
        let promise = userService.Login(account);
        promise.then((result) => {
            localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken);
            localStorage.setItem(USER_ACCOUNT, JSON.stringify(result.data.content));
            message.success("Đăng nhập thành công!");
            setTimeout(() => {
                if (result.data.content.maLoaiNguoiDung === "KhachHang")
                    history.push("/");
                return history.push("/admin");
            }, 500);
        });
        promise.catch((err) => {
            message.error("Đăng nhập thất bại, vui lòng kiểm tra tên đăng nhập và mật khẩu");
        });
    };
};

export const GetListUserAction = (valueSearch) => {
    return (dispatch) => {
        let promise = userService.GetListUser(valueSearch);
        promise.then((res) => {
            dispatch({type: GET_LIST_USER, listUser: res.data.content})
        })
        promise.catch((err) => console.log(err.response?.data))
    }
}

export const DeleteUserAction = (taiKhoan) => {
    return (dispatch) => {
        let promise = userService.DeleteUser(taiKhoan);
        promise.then((res) => {
            dispatch({type: DELETE_USER, taiKhoan})
            message.success('Xóa người dùng thành công!');
        })
        promise.catch((err) => {
            console.log(err.response?.data)
            message.error('Xóa người dùng thất bại!');
        })
    }
}