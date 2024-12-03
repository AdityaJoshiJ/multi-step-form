import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function Step1() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("step1", JSON.stringify(values));
      navigate("/step2");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Step 1: Personal Information</h2>
      <div>
        <label>Name:</label>
        <input
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        )}
      </div>
      <button type="submit">Next</button>
    </form>
  );
}

export default Step1;
