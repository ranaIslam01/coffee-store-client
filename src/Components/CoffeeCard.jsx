import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, price, photo, quantity, supplier } = coffee;

  const handleDelete = (_id) => {
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
        fetch(
          `https://coffee-store-server-1-t0pq.onrender.com/coffees/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });

              // remove the deleted coffee from the UI
              const remainingCoffees = coffees.filter(
                (coffee) => coffee._id !== _id
              );
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#F5F4F1] rounded-lg p-3 md:p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
      {/* Coffee Info */}
      <div className="flex items-start md:items-center gap-3 md:gap-4 flex-1">
        <img
          src={photo}
          alt={name}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-lg flex-shrink-0"
        />
        <div className="flex flex-col gap-1 md:gap-2">
          <p className="text-xs sm:text-sm md:text-lg font-semibold text-[#1B1A1A]">
            Name:{" "}
            <span className="text-xs sm:text-sm md:text-base text-[#5C5B5B] font-normal">
              {name}
            </span>
          </p>
          <p className="text-xs sm:text-sm md:text-lg font-semibold text-[#1B1A1A]">
            Price:{" "}
            <span className="text-xs sm:text-sm md:text-base text-[#5C5B5B] font-normal">
              {price}
            </span>
          </p>
          <p className="text-xs sm:text-sm md:text-lg font-semibold text-[#1B1A1A]">
            Supplier:{" "}
            <span className="text-xs sm:text-sm md:text-base text-[#5C5B5B] font-normal">
              {supplier}
            </span>
          </p>
          <p className="text-xs sm:text-sm md:text-lg font-semibold text-[#1B1A1A]">
            Quantity:{" "}
            <span className="text-xs sm:text-sm md:text-base text-[#5C5B5B] font-normal">
              {quantity}
            </span>
          </p>
        </div>
      </div>

      {/* Action Buttons UI only */}
      <div className="flex md:flex-col flex-row gap-2 md:gap-4 items-center w-full md:w-auto md:mr-2">
        <Link to={`/coffee/${_id}`} className="flex-1 md:flex-none">
          <button className="p-2 md:p-3 rounded-lg cursor-pointer bg-[#D2B48C] text-lg md:text-xl text-white w-full md:w-auto hover:bg-[#c9a876] duration-300">
            <FaEye />
          </button>
        </Link>
        <Link to={`/updateCoffee/${_id}`} className="flex-1 md:flex-none">
          <button className="p-2 md:p-3 rounded-lg cursor-pointer bg-[#3C393B] text-lg md:text-xl text-white w-full md:w-auto hover:bg-[#2a2729] duration-300">
            <MdEdit />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="p-2 md:p-3 rounded-lg cursor-pointer bg-[#EA4744] text-lg md:text-xl text-white flex-1 md:flex-none w-full md:w-auto hover:bg-[#d63d3a] duration-300"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
