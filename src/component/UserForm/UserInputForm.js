import { Field } from "formik";
import React from "react";
import FormError from "../ErrorFolder/FormError";

function UserInputForm(props) {
    // console.log(props);
  return (
    <div>
      <label class="block">
        <span>{props.label}</span>
        <Field
          type={props.type}
          placeholder={props.placeholder}
          className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
          name={props?.name}
        />
        <FormError name={props.name} />
      </label>
    </div>
  );
}

export default UserInputForm;
