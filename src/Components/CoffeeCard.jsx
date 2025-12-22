import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, price, photo, quantity, supplier } = coffee;

  const handleDelete = (_id) => {
    console.log("Delete coffee:", name);
    console.log("Coffee ID:", _id);
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
        // start deleting the coffee
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#F5F4F1] rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
      {/* Coffee Info */}
      <div className="flex items-start md:items-center gap-4">
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-[#1B1A1A]">
            Name:{" "}
            <span className="text-base text-[#5C5B5B] font-normal">{name}</span>
          </p>
          <p className="text-lg font-semibold text-[#1B1A1A]">
            Price:{" "}
            <span className="text-base text-[#5C5B5B] font-normal">
              {price}
            </span>
          </p>
          <p className="text-lg font-semibold text-[#1B1A1A]">
            Supplier:{" "}
            <span className="text-base text-[#5C5B5B] font-normal">
              {supplier}
            </span>
          </p>
          <p className="text-lg font-semibold text-[#1B1A1A]">
            Quantity:{" "}
            <span className="text-base text-[#5C5B5B] font-normal">
              {quantity}
            </span>
          </p>
        </div>
      </div>

      {/* Action Buttons UI only */}
      <div className="flex md:flex-col flex-row gap-4 items-center md:items-center md:mr-8 mt-4 md:mt-0">
        <Link to={`/coffee/${_id}`}>
          <button className="p-3 rounded-lg cursor-pointer bg-[#D2B48C] text-xl text-white">
            <FaEye />
          </button>
        </Link>
        <Link>
          <Link to={`/updateCoffee/${_id}`}>
          <button className="p-3 rounded-lg cursor-pointer bg-[#3C393B] text-xl text-white">
            <MdEdit />
          </button>
          </Link>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="p-3 rounded-lg cursor-pointer bg-[#EA4744] text-xl text-white"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
