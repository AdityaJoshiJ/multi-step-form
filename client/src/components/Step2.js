import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function Step2() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("step2", JSON.stringify(values));
      navigate("/step3");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Step 2: Contact Information</h2>
      <div>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}
      </div>
      <button type="submit">Next</button>
    </form>
  );
}

export default Step2;
