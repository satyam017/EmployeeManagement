import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputFeild from "../InputContainer/InputField";
import SelectFeild from "../InputContainer/SelectField";
function SignUp() {
  const initialValues = {
    fullName: "",
    email: "",
    designation: "",
    password: "",
    confirmPassword: "",
  };
 
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Please Enter Your Name"),
    email: Yup.string()
      .email("Please Enter Your Valid Email Address")
      .required("Valid Email is Required"),
    designation: Yup.string().required("Please Select Your Designation"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password mismatch")
      .required("Enter Confirm Password"),
  });

  const onSubmit = (value) => {
    console.log("submit value", value);
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
              label="Full Name"
              type="type"
              name="fullName"
              placeholder="Enter Your Full Name"
            />
            <InputFeild
              label="Email Address"
              type="email"
              name="email"
              placeholder="mike@gmail.com"
              mainDiv="mt-8"
            />
            <SelectFeild
              label="Choose your designation"
              name="designation"
              option={[
                {
                  role: "Choose Your Designation",
                  value: "",
                },
                {
                  role: "HR",
                  value: "hr",
                },
                { role: "Developer", value: "developer" },
                { role: "Project Manager", value: "pm" },
                { role: " Graphic Designer", value: "graphicDesigner" },
                { role: "frontdesk" },
              ]}
            />
            {/* <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide text-left ..."></div>
              <Field
                as="select"
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 bg-white"
                placeholder="Enter Your Full Name"
                name="designation"
              >
                <option value="">Choose Your Designation</option>
                <option value="hr">HR</option>
                <option value="developer">Developer</option>
                <option value="pm"></option>
                <option value="graphicDesigner">Graphic Designer</option>
                <option value="frontdesk">Front Desk Executive</option>
              </Field>
              <FormError name={"designation"} />
            </div> */}
            <InputFeild
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              mainDiv="mt-8"
            />
            <InputFeild
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              mainDiv="mt-8"
            />

            <div className="mt-10">
              <button
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                    shadow-lg"
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

export default SignUp;
