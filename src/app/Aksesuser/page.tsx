import React from "react";
import Sidebar from "../components/Sidebar";
import { Trash2, Pencil } from "lucide-react";
import Navbar from "../components/Navbar";

const UserPage = () => {
  const users = [
    {
      name: "Pat Black",
      status: "Admin",
      email: "bill.berry@example.com",
      age: 28,
    },
    {
      name: "Angel Jones",
      status: "Admin",
      email: "glen.ramirez@example.com",
      age: 36,
    },
    {
      name: "Max Edwards",
      status: "Employee",
      email: "renee.hughes@example.com",
      age: 27,
    },
    {
      name: "Bruce Fox",
      status: "Employee",
      email: "craig.kelley@example.com",
      age: 43,
    },
    {
      name: "Devon Fisher",
      status: "Employee",
      email: "joy.ramos@example.com",
      age: 32,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="p-6 bg-gray-50 flex-1">
          <div className="flex justify-between items-center mb-14">
            <h1 className="text-2xl font-semibold text-customBlue">All User</h1>
            <button className="px-6 py-1 text-customBlue rounded-md border-customBlue border hover:bg-blue-700 transition-colors">
              Add
            </button>
          </div>

          <div className="bg-white rounded-lg shadow">
            <table className="w-full pt-4">
              <thead>
                <tr className="border-b pb-6">
                  <th className="px-3 py-1 text-left font-bold text-customBlue"></th>
                  <th className="px-3 py-1 text-left font-bold text-customBlue"></th>
                  <th className="px-3 py-1 text-left font-bold text-customBlue">
                    Name
                  </th>
                  <th className="px-3 py-1 text-left font-bold text-customBlue">
                    Access Status
                  </th>
                  <th className="px-3 py-1 text-left font-bold text-customBlue">
                    Email
                  </th>
                  <th className="px-3 py-1 text-left font-bold text-customBlue">
                    Age
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className=" py-4">
                      <Pencil className="cursor-pointer" />
                    </td>
                    <td className=" py-4">
                      <Trash2 className="cursor-pointer" />{" "}
                    </td>
                    <td className="px-3 py-4">{user.name}</td>
                    <td className="px-3 py-4">{user.status}</td>
                    <td className="px-3 py-4">{user.email}</td>
                    <td className="px-3 py-4">{user.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
