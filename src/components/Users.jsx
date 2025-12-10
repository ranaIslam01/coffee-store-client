import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { FaEye } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';

const Users = () => {
    const startUsers = useLoaderData();
    const [users, setUsers] = useState(Array.isArray(startUsers) ? startUsers : []);

    const handelDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-client-eta-one.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(result => {
                    if(result.deletedCount){
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }

    const handelUpdate = () =>  {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "This Service Not Available Right Now !",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <div className='pt-22'>
            <h2 className='text-center text-[56px] rancho my-text'>Users : {users.length}</h2>
            <div className="px-[5%]">
                <table className="table">
                    <thead>
                        <tr>
                            <th>number</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user, idx) => (
                            <tr key={idx}>
                                <th>{idx + 1}</th>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photo}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.address}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>{user.email}</td>
                                <td>{user.number}</td>

                                <th className='flex items-center gap-5'>
                                    <button className="p-2.5 bg-[#D2B48C] rounded-lg text-lg text-white">
                                        <FaEye />
                                    </button>

                                    <button onClick={handelUpdate} className="p-2.5 bg-[#3C393B] rounded-lg text-lg text-white">
                                        <MdModeEdit />
                                    </button>

                                    <button onClick={() => handelDelete(user._id)} className="p-2.5 bg-[#EA4744] rounded-lg text-lg text-white">
                                        <MdDelete />
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Users;
