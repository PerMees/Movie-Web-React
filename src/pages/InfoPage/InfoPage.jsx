import React, {useEffect} from "react";
import {GetListUserAction, OpenAdminModelAction} from "../../redux/actions/UserAction";
import {useDispatch, useSelector} from "react-redux";

export default function InfoPage() {

    const dispatch = useDispatch()
    const {listUser} = useSelector(state => state.UserReducer)
    useEffect(() => {
        const action = GetListUserAction(JSON.parse(localStorage.getItem('userAccount'))?.taiKhoan);
        dispatch(action);
    }, []);
    let user = listUser[0]
    return (
        <div className='container mx-auto'>
            <div className="shadow-lg personal-info p-4 my-4 container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-3 mb-3 flex items-center justify-center">
                        <img src="https://picsum.photos/200" alt="Avatar" className="rounded-full w-20 block mx-auto"/>
                    </div>
                    <div className='col-span-12 md:col-span-8 '>
                        <h3 className='text-2xl font-bold'>Thông tin cá nhân</h3>
                        <div className="flex flex-col lg:flex-row">
                            <div className='md:mr-10'>
                                <div className='flex  text-lg mt-1'>
                                    <span className="font-bold indivne-block w-40">Họ tên: </span>
                                    <span>{user?.hoTen}</span>
                                </div>
                                <div className='flex text-lg mt-1'>
                                    <span className="font-bold indivne-block w-40">Email: </span>
                                    <span>{user?.email}</span>
                                </div>
                                <div className='flex text-lg mt-1'>
                                    <span className="font-bold indivne-block w-40">Số điện thoại: </span>
                                    <span>{user?.soDt}</span>
                                </div>
                            </div>
                            <div className="">
                                <div className='flex text-lg mt-1'>
                                    <span className="font-bold inline-block w-40">Tài khoản: </span>
                                    <span>{user?.taiKhoan}</span>
                                </div>
                                <div className='flex text-lg mt-1'>
                                    <span className="font-bold inline-block w-40">Mật khẩu: </span>
                                    <span>{user?.matKhau}</span>
                                </div>
                                <div className='flex text-lg mt-1'>
                                    <span className="font-bold inline-block w-40">Loại người dùng: </span>
                                    <span>{user?.maLoaiNguoiDung}</span>
                                </div>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <button className="bg-yellow-500 mt-2 hover:bg-yellow-600 text-white py-2 px-4 rounded "
                                    onClick={() => {
                                        const action = OpenAdminModelAction("EditUser", user);
                                        dispatch(action);
                                    }}>
                                Chỉnh sửa
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}