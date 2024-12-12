"use client";

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


const AddAccountPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    age: "",
    type: "Admin",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <div className="flex">
          <Sidebar />
          <div className="flex-1 bg-gray-50">
            <div className="max-w-5xl mx-auto p-8">
              <div className="bg-white rounded-lg shadow-md p-12">
                <div className="text-center mb-12">
                  <h1 className="text-5xl text-customBlue font-semibold mb-6">
                    Add Account
                  </h1>
                  <div className="w-full border-b border-gray-300"></div>
                </div>

                <div className="flex justify-center gap-32">
                  <div className="w-40 pt-1">
                    <h2 className="text-xl font-medium">Account</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="w-[500px]">
                    <div className="space-y-5">
                      <div>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          className="w-full p-3 border border-gray-200 rounded-md bg-gray-100"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          className="w-full p-3 border border-gray-200 rounded-md bg-gray-100"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email ID"
                          className="w-full p-3 border border-gray-200 rounded-md bg-gray-100"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          className="w-full p-3 border border-gray-200 rounded-md bg-gray-100"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <input
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          className="w-full p-3 border border-gray-200 rounded-md bg-gray-100"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          name="gender"
                          placeholder="Gender"
                          className="w-full p-3 border border-gray-200 rounded-md bg-gray-100"
                          value={formData.gender}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <input
                          type="number"
                          name="age"
                          placeholder="Age"
                          className="w-full p-3 border border-gray-200 rounded-md bg-gray-100"
                          value={formData.age}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="mt-6">
                        <p className="mb-3 text-gray-700">Type</p>
                        <div className="flex gap-8">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="type"
                              value="Admin"
                              checked={formData.type === "Admin"}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            Admin
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="type"
                              value="Employee"
                              checked={formData.type === "Employee"}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            Employee
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 flex justify-center">
                      <button
                        type="submit"
                        className="w-64 bg-customBlue text-white py-1 text-3xl rounded-full px-12"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAccountPage;
