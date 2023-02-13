import { Field } from "formik";
import React from "react";
import FormError from "../ErrorFolder/FormError";

function UserSelectForm(props) {
  // console.log(props);
  return (
    <div>
      <label className="block">
        <span>{props.label}</span>
        <Field
          as="select"
          className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
          name={props.name}
        >
          {
            props.option.map((el,index)=>{
              return(
                <option value={el.value} key={index+1}>{el.Team}</option>
              )
            })
          }
        </Field>
        <FormError name={props.name} />
      </label>
    </div>
  );
}

export default UserSelectForm;
