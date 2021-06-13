// @copyright this form is created by Pushpendra singh

import React from "react";
import { Formik, FormikConsumer, useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("This field is required !"),
  email: Yup.string()
    .email("Invalid Email format")
    .required("This is a required field"),
  channel: Yup.string().required("This is required field"),
  confirm_email: Yup.string().oneOf([Yup.ref('email'), null], 'Must match to email')
});

function Youtubeform(props) {
  // Formik.touched is used for visited field

  const formik = useFormik({
    //initialValuse will be same as name att of input tag.
    initialValues: {
      name: "",
      email: "",
      confirm_email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log("Hii Pushpendra Singh", values);
    },
    // validate: (values) => {
    //   let errors = {};
    //   if (!values.name) {
    //     errors.name = "Required!";
    //   }

    //   if (!values.email) {
    //     errors.email = "Required!";
    //   }

    //   if (!values.channel) {
    //     errors.channel = "Required!";
    //   }
    //   return errors;
    // },
    validationSchema,
  });

  // console.log("Hyy this is a form error", formik.errors);
  // for checking visited field
  console.log("Hyy Pushpendra singh all viited field", formik.touched);
  // so we will only show error when field is visited

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : (
            ""
          )}
        </div>

        <div className="form-control">
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : (
            ""
          )}
        </div>

        <div className="form-control">
          <label htmlFor="confirm_email">Confirm E-Mail</label>
          <input
            type="email"
            id="confirm_email"
            name="confirm_email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.confirm_email}
          />
          {formik.touched.confirm_email && formik.errors.confirm_email ? (
            <div className="error">{formik.errors.confirm_email}</div>
          ) : (
            ""
          )}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : (
            ""
          )}
        </div>

        <button>Submit</button>
      </form>
      this is psuh
    </div>
  );
}

export default Youtubeform;
