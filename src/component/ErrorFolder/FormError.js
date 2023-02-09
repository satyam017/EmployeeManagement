import { ErrorMessage } from "formik";
import React from "react";


function FormError(prop) {
  return (
    <div className="error text-left text-red-500	">
      <ErrorMessage name={prop.name} />
    </div>
  );
}

export default FormError;
