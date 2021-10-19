import { useFormik } from "formik";
import React from "react";

export default function AddFilmPage() {
    const formik = useFormik({
        initialValues:{
            maPhim:"",

        }
    })
  return (
    <div>
      <form action="">
      </form>
    </div>
  );
}
