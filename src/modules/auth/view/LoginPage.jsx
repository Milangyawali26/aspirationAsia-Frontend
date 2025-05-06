import React, { useState } from "react";
import loginImg from "../../../assets/login_img.jpg";
import LogInForm from "../components/loginForm";


const LoginPage = () => {
  return (
    <section
      className="relative h-[100vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${loginImg})`,
      }}
    >
      <div className="absolute  m-auto inset-x-0 grid sm:grid-cols-1 lg:grid-cols-2 h-[90vh] w-[90vw] rounded-xl px-5 ">
        {/* Left div (transparent with black opacity) */}
        <div
          className="flex flex-col justify-between p-6 rounded-xl z-5 "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <p className="text-xl lg:text-3xl font-extrabold text-blue-600 self-start ">
            Aspire Ledger
          </p>
          <p className="text-white md:text-2xl font-semibold italic self-start mt-auto">
            “The world is a book, and those who do not travel read only one
            page.”
            <br />— Saint Augustine
          </p>
        </div>

        {/* Right div (toggles between Login and Signup) */}
        <div className="bg-white rounded-xl flex flex-col lg:p-10 justify-center align-center">
         <LogInForm />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
