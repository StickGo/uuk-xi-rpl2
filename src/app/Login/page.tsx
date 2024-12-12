import React from "react";
import Image from "next/image";
import invt from "@/assets/Pict Inventory.png";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <div>
        <Navbar/>
        <div className="flex items-center justify-center min-h-screen bg-blue-50">
          <div className="flex bg-white rounded-lg shadow-lg w-[70%] h-[500px] items-center p-8">
            {/* Logo Section */}
            <div className="flex flex-col items-center w-1/2">
              <Image src={invt} alt="Inventory" width={200} height={200} />
            </div>

            {/* Form Section */}
            <div className="w-1/2 flex flex-col items-center">
              <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
                Login
              </h2>
              <form className="w-full flex flex-col items-center">
                <div className="mb-4 w-[80%]">
                  <input
                    type="text"
                    id="username"
                    className="w-full px-4 py-2 mt-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-4 w-[80%]">
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 mt-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-[50%] py-2 mt-4 text-white bg-sky-600  rounded-full hover:bg-blue-600"
                >
                  Login
                </button>
              </form>
              <div className="mt-4 text-center">
                <span className="text-sm text-gray-600">New user? </span>
                <a
                  href="/register"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
