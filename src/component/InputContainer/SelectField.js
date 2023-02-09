import React from "react";
import { Field } from "formik";
import FormError from "../ErrorFolder/FormError";
function SelectFeild(prop) {
    console.log(prop.option);
  return (
    <div className="mt-8">
      <div className="text-sm font-bold text-gray-700 tracking-wide text-left ...">
        {prop.label}
        
      </div>
      <Field
        as="select"
        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 bg-white"
        placeholder={prop.placeholder}
        name={prop.name}
       
      >
        
        {
          
             prop.option.map((el) => <option key={Date.now() + Math.floor(Math.random() * 100 + 62 * 62)} value={el.value}>{el.role}</option>)
        }
      </Field>
      <FormError name={prop.name}/>
    </div>
  );
}

export default SelectFeild;
