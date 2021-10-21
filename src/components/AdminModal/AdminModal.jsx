import React from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CloseAdminModelAction } from "../../redux/actions/FilmAction";
import AddFilmPage from "../../pages/ManageFilmPage/AddFilmPage";
import EditFilmPage from "../../pages/ManageFilmPage/EditFilmPage";
export default function AdminModal() {
  const { openModal, componentType } = useSelector(
    (state) => state.FilmReducer
  );
  const dispatch = useDispatch();
  let component, title;
  if (componentType === "AddFilm") {
    component = <AddFilmPage />;
    title = "Thêm Phim";
  } else if (componentType === "EditFilm") {
    component = <EditFilmPage />;
    title = "Chỉnh sửa phim";
  }
  return (
    <>
      <Modal
        title={title}
        centered
        visible={openModal}
        onOk={() => dispatch(CloseAdminModelAction())}
        onCancel={() => dispatch(CloseAdminModelAction())}
        width={1000}
        footer={null}
      >
        {component}
      </Modal>
    </>
  );
}
