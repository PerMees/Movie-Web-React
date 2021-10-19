import { ACCESS_TOKEN, USER_ACCOUNT } from "../../util/setting";
import { history } from "../../App";
import { userService } from "../services/UserServices";

export const RegisterAction = (user) => {
  return (dispatch) => {
    let promise = userService.Register(user);
    promise.then((result) => {
      alert("Đăng ký thành công!");
      history.push("/login");
    });
    promise.catch((err) => {
      alert("Tài khoản, email hoặc họ tên đã tồn tại, vui lòng đăng ký lại!");
    });
  };
};

export const LoginAction = (account) => {
  return (dispatch) => {
    let promise = userService.Login(account);
    promise.then((result) => {
      console.log(result.data.content);
      localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken);
      localStorage.setItem(USER_ACCOUNT, JSON.stringify(result.data.content));
      alert("Đăng nhập thành công!");
      console.log(result.data.content.maLoaiNguoiDung);
      if (result.data.content.maLoaiNguoiDung === "KhachHang")
        history.push("/");
      return history.push("/admin");
    });
    promise.catch((err) => {
      alert("Đăng nhập thất bại, vui lòng kiểm tra tên đăng nhập và mật khẩu");
    });
  };
};
