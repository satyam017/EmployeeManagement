import React from "react";
import { Form, Formik } from "formik";
import { useSelector, useDispatch } from 'react-redux'
import UserInputForm from "../UserForm/UserInputForm";
import * as Yup from "yup";
import UserSelectForm from "../UserForm/UserSelectForm";
import { addUser } from "../../rtkSlice/UserListSlice";

function AddUserModal() {
    const dispatch = useDispatch()
  const intailValue = {
    fullName: "",
    designation: "",
    joiningDate: "",
    team: "",
  };
  const validationSchema = Yup.object({
    fullName: Yup.string().required("This Feild is required"),
    designation: Yup.string().required("This Feild is required"),
    joiningDate: Yup.string().required("This Feild is required"),
    team: Yup.string().required("This Feild is required"),
  });
  const onSubmit = (value) => {
    dispatch(addUser(value));
  };
  return (
    <div>
      {/* POPUP  ADD USER*/}
      <div>
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5">
          <div className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300"></div>
          <div className="relative w-full max-w-lg origin-top rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
            <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
              <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
                Add Employee
              </h3>
              <button className="btn -mr-1.5 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4.5 w-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="px-4 py-4 sm:px-5">
              <div className="mt-4 space-y-4">
                <Formik
                  initialValues={intailValue}
                  validateOnChange={false}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {(Formik) => {
                    return (
                      <Form>
                        <UserInputForm
                          label="Full Name"
                          type="text"
                          placeholder="Full Name"
                          name={"fullName"}
                        />
                        <UserInputForm
                          label="Current Designation"
                          type="text"
                          placeholder="Enter Current Designation"
                          name={"designation"}
                        />
                        <UserInputForm
                          label="Joining Date"
                          type="date"
                          placeholder="Enter Joining Date"
                          name={"joiningDate"}
                        />
                        <UserSelectForm
                              label="Choose Team"
                              name="team"
                              option={[
                                {
                                  Team: "Choose Your Team",
                                  value: "",
                                },
                                {
                                  Team: "Js",
                                  value: "js",
                                },
                                {
                                  Team: "Python",
                                  value: "python",
                                },
                                {
                                  Team: "PHP",
                                  value: "php",
                                },
                                {
                                  Team: "Design",
                                  value: "design",
                                },
                                {
                                  Team: "HR",
                                  value: "hr",
                                },
                                {
                                  Team: "BD",
                                  value: "bd",
                                },
                              ]}
                            />
                            <div className="space-x-2 text-center mt-5">
                            <button
                                className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                                type="submit"
                            >
                                Add Employee
                            </button>
                            </div>
                      </Form>
                    );
                  }}
                </Formik>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUserModal;
