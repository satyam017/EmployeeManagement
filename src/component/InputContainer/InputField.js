import React from "react";
import { Field } from "formik";
import FormError from "../ErrorFolder/FormError";
export default function InputFeild(prop) {
  return (
    <div className={prop?.mainDiv}>
      <div className="text-sm font-bold text-gray-700 tracking-wide text-left ...">
        {prop.label}
      </div>
      
      <Field
        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
        type={prop.type}
        placeholder={prop.placeholder}
        name={prop.name}
      />
      
      <FormError name={prop.name} />
    </div>
  );
}
