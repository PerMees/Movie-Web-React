import { ACCESS_TOKEN, http, USER_ACCOUNT } from "../../util/setting";
import { history } from "../../App";

export const RegisterAction = (user) => {
  return (dispatch) => {
    let promise = http.post(`/api/QuanLyNguoiDung/DangKy`, user);
    promise.then((result) => {
      const { taiKhoan, hoTen } = result.data.content;
      console.log(result.data.content);
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
    let promise = http.post("/api/QuanLyNguoiDung/DangNhap", account);
    promise.then((result) => {
      const { taiKhoan, hoTen, accessToken } = result.data.content;
      localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken);
      localStorage.setItem(USER_ACCOUNT, JSON.stringify(result.data.content));
      alert("Đăng nhập thành công!");
      history.push("/");
    });
    promise.catch((err) => {
      alert("Đăng nhập thất bại, vui lòng kiểm tra tên đăng nhập và mật khẩu");
    });
  };
};
