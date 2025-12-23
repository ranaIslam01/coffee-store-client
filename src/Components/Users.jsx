import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const startUsers = useLoaderData();
  const [users, setUsers] = useState(
    Array.isArray(startUsers) ? startUsers : []
  );

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-1-t0pq.onrender.com/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handelUpdate = () => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "This Service Not Available Right Now !",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="py-10">
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
                key={user._id}
                className="border-b hover:bg-[#F9F7F3] duration-200"
              >
                <th className="border p-2 md:p-3">{idx + 1}</th>

                <td className="border p-2 md:p-3">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-8 w-8 md:h-12 md:w-12 flex justify-center items-center">
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

                <td className="border p-2 md:p-3 hidden sm:table-cell text-center text-xs md:text-base truncate">
                  {user.email}
                </td>
                <td className="border p-2 md:p-3 hidden md:table-cell text-xs text-center md:text-base">
                  {user.number}
                </td>

                <td className="border p-2 md:p-3">
                  <div className="flex items-center justify-center gap-1 md:gap-3 flex-wrap">
                    <button className="p-1.5 md:p-2.5 bg-[#D2B48C] rounded-lg text-xs md:text-lg text-white hover:bg-[#c9a876] duration-300">
                      <FaEye />
                    </button>
                    <button
                      onClick={handelUpdate}
                      className="p-1.5 md:p-2.5 bg-[#3C393B] rounded-lg text-xs md:text-lg text-white hover:bg-[#2a2729] duration-300"
                    >
                      <MdModeEdit />
                    </button>
                    <button
                      onClick={() => handelDelete(user._id)}
                      className="p-1.5 md:p-2.5 bg-[#EA4744] rounded-lg text-xs md:text-lg text-white hover:bg-[#d63d3a] duration-300"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
