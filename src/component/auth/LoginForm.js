import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormError from "../ErrorFolder/FormError";
import InputFeild from "../InputContainer/InputField";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("in use effect.......................");
    let login = localStorage.getItem("login");

    if (login) {
      navigate("/dashboard");
    }
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please Enter Your Valid Email Address")
      .required("Valid Email is Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
  });

  const onSubmit = (value) => {
    localStorage.setItem("login", true);
    localStorage.setItem("userRole", "SUPERADMIN");
    localStorage.setItem("userDetail", JSON.stringify(value));
    let login = localStorage.getItem("login");

    if (login) {
      navigate("/dashboard");
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <InputFeild
              label=" Email Address"
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
            />
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
                <div>
                  <a
                    className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                cursor-pointer"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <Field
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password"
                placeholder="Enter your password"
                name="password"
              />
              <div className="error text-left text-red-500	">
                <FormError name={"password"} />
              </div>
            </div>
            <div className="mt-10">
              <button
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                        shadow-lg"
                type="submit"
                disabled={
                  !(formik.values.email && formik.values.password) ||
                  formik.errors.email ||
                  formik.errors.password
                }
              >
                Log In
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
