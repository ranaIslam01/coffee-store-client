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
    <div className="pt-22">
      <h2 className="text-center text-[56px] rancho my-text">
        Users : {users.length}
      </h2>
      <div className="px-[5%] mb-10">
        <table className="table w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#F4F3F0]">
              <th className="border p-3">#</th>
              <th className="border p-3">Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Phone</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, idx) => (
              <tr key={idx} className="border-b">
                <th className="border p-3">{idx + 1}</th>

                <td className="border p-3">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.photo} alt={user.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.address}</div>
                    </div>
                  </div>
                </td>

                <td className="border p-3">{user.email}</td>
                <td className="border p-3">{user.number}</td>

                <td className="border p-3 flex items-center gap-3">
                  <button className="p-2.5 bg-[#D2B48C] rounded-lg text-lg text-white">
                    <FaEye />
                  </button>

                  <button className="p-2.5 bg-[#3C393B] rounded-lg text-lg text-white">
                    <MdModeEdit />
                  </button>

                  <button className="p-2.5 bg-[#EA4744] rounded-lg text-lg text-white">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Contuct/>
      </div>
    </div>
  );
};

export default Users;
