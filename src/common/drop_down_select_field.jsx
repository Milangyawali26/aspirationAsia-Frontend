// components/SelectField.jsx
import { useField } from "formik";
import React from "react";

const DropDownSelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="">
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium text-grey-700"
      >
        {label}
      </label>
      <select
        {...field}
        {...props}
        className=" w-full px-4 py-2 border focus:border-none rounded-lg focus:outline-none focus:ring-2  focus:ring-blue-500"
      >
        <option value="">{props.placeholder}</option>
        {props.options && props.options.length > 0 ? (
          props.options.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))
        ) : (
          <option disabled>No options available</option>
        )}
      </select>
      {meta.touched && meta.error?(<div className="text-red-500 text-sm">{meta.error}</div>):null}
    </div>
  );
};

export default DropDownSelectField;
