import Auth from "directsecondyearadmission/Layout/Auth";
import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <Auth>
      <form className="lg:w-2/6 md:w-1/2 bg-gray-100  p-8 flex flex-col md:ml-auto w-full  md:mt-0">
        <h2 className="text-gray-900 font-bold text-center text-lg title-font mb-5">
          Welcome Back !
        </h2>
        <h2 className="text-gray-900 text-lg text-center font-medium title-font mb-5">
          Sign In
        </h2>
        <div className="relative mb-4">
          <label for="Username" className="leading-7 text-sm text-gray-600">
            Username & Email
          </label>
          <input
            type="text"
            id="Username"
            name="Username"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label for="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button className=" border-0 py-2 px-8 focus:outline-none pBtn rounded text-lg">
          Sign In
        </button>
        <p className="text-xs text-center text-gray-500 mt-3">
          <Link href="/Register">
            <a> Create a New Accouunt</a>
          </Link>
        </p>
      </form>
    </Auth>
  );
};

export default Login;
