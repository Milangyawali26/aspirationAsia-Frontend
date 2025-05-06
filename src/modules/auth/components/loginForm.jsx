import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import InputField from "../../../common/input_field.jsx";
import { submitLogin } from "../controller/authController.js";

const LoginForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema  = Yup.object({
    username: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Must be at least 6 characters")
      .required("Required"),
  });

  const handleSubmit = async (values) => {
    //navigate('/dashboard')
    await submitLogin({
      values,
      // rememberMe,
      navigate,
    });
  };

  return (
    <div>
      <div className="bg-white rounded-xl flex flex-col p-5 lg:p-10 justify-center align-center">
        <p className="text-2xl md:text-3xl text-blue-500 font-semibold text-center ">
          Login
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema ={validationSchema }
          onSubmit={handleSubmit}
        >
          <Form className=" flex flex-col gap-4">
            <InputField
              label="Email"
              type="email"
              id="username"
              name="username"
              placeholder="Enter your email"
            />

            {/* Password Input */}
            <div className="mb-4">
              <InputField
                label="Password"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex flex-row justify-between">
              <div className="flex items-center hover:cursor-pointer hover:bg-gray-100 p-1 rounded">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2 hover:cursor-pointer"
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600 hover:cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <div className="hover:cursor-pointer hover:text-blue-500">
                Forgot password?
              </div>
            </div>

            {/* login btn */}
            <button
              type="submit"
              className="w-full py-2 mb-4 hover:cursor-pointer bg-blue-600 text-white rounded-lg mt-4 hover:bg-blue-500"
            >
              Login
            </button>
          </Form>
        </Formik>
        {/* Google Sign In Button */}
        <button className="w-full py-2 hover:cursor-pointer bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
          Sign in with Google
        </button>

        <div className="text-center mt-4">
          <h4>
            Don't have an account?{" "}
            <button className="font-bold hover:cursor-pointer text-blue-500 ml-2">
              Sign up
            </button>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
