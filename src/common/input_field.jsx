import { useField } from "formik";
import React from "react";

const InputField = ({ label,...props}) => {
  const [field,meta]=useField(props);
  return (
    <div className="">
      <label htmlFor={props.id} className="block text-sm font-medium text-grey-700">
        {label}
      </label>
      <input
        className=" w-full px-4 py-2 border focus:border-none rounded-lg focus:outline-none focus:ring-2  focus:ring-blue-500"
       {...field}{...props}
      />
      {meta.touched && meta.error?(
        <div className="text-red-500 text-sm">{meta.error}</div>
      ):null}
    </div>
  );
};

export default InputField;
