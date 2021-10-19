import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CloseAdminModelAction } from "../../redux/actions/AdminAction";
import AddFilmPage from "../../pages/ManageFilmPage/AddFilmPage";
export default function AdminModal() {
  const { openModal, componentType } = useSelector(
    (state) => state.AdminReducer
  );
  const dispatch = useDispatch();
  let component, title;
  if (componentType === "AddFilm") {
    component = <AddFilmPage />;
    title = "Thêm Phim";
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
