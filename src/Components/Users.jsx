import React from "react";
import { FaEye } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Contuct from "./Contuct";

const Users = () => {
  // Static placeholder data
  const users = [
    {
      _id: "1",
      name: "Rana Islam",
      email: "rana@example.com",
      number: "+8801840248746",
      address: "Rangpur, Bangladesh",
      photo: "https://via.placeholder.com/50",
    },
    {
      _id: "2",
      name: "John Doe",
      email: "john@example.com",
      number: "+8801912345678",
      address: "Dhaka, Bangladesh",
      photo: "https://via.placeholder.com/50",
    },
    {
      _id: "3",
      name: "Jane Smith",
      email: "jane@example.com",
      number: "+8801723456789",
      address: "Chittagong, Bangladesh",
      photo: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="pt-10 md:pt-22">
      <h2 className="text-center text-2xl sm:text-4xl md:text-[56px] rancho my-text px-4">
        Users : {users.length}
      </h2>
      <div className="px-4 sm:px-6 md:px-[5%] mb-8 md:mb-10 mt-6 md:mt-0 overflow-x-auto">
        <table className="table w-full border-collapse border border-gray-300 text-xs sm:text-sm md:text-base">
          <thead>
            <tr className="bg-[#F4F3F0]">
              <th className="border p-2 md:p-3">#</th>
              <th className="border p-2 md:p-3">Name</th>
              <th className="border p-2 md:p-3 hidden sm:table-cell">Email</th>
              <th className="border p-2 md:p-3 hidden md:table-cell">Phone</th>
              <th className="border p-2 md:p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, idx) => (
              <tr
                key={idx}
                className="border-b hover:bg-[#F9F7F3] duration-200"
              >
                <th className="border p-2 md:p-3">{idx + 1}</th>

                <td className="border p-2 md:p-3">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-8 w-8 md:h-12 md:w-12">
                        <img src={user.photo} alt={user.name} />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-xs md:text-base truncate">
                        {user.name}
                      </div>
                      <div className="text-xs opacity-50 hidden md:block truncate">
                        {user.address}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="border p-2 md:p-3 hidden sm:table-cell text-xs md:text-base truncate">
                  {user.email}
                </td>
                <td className="border p-2 md:p-3 hidden md:table-cell text-xs md:text-base">
                  {user.number}
                </td>

                <td className="border p-2 md:p-3">
                  <div className="flex items-center gap-1 md:gap-3 flex-wrap">
                    <button className="p-1.5 md:p-2.5 bg-[#D2B48C] rounded-lg text-xs md:text-lg text-white hover:bg-[#c9a876] duration-300">
                      <FaEye />
                    </button>

                    <button className="p-1.5 md:p-2.5 bg-[#3C393B] rounded-lg text-xs md:text-lg text-white hover:bg-[#2a2729] duration-300">
                      <MdModeEdit />
                    </button>

                    <button className="p-1.5 md:p-2.5 bg-[#EA4744] rounded-lg text-xs md:text-lg text-white hover:bg-[#d63d3a] duration-300">
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Contuct />
      </div>
    </div>
  );
};

export default Users;
