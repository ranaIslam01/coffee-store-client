import React, { use } from 'react';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const{name, price, photo, quantity, supplier, _id} = coffee;
    const {user} = use(AuthContext);
    const navigate = useNavigate();
    // console.log(coffee);

    const handelDelete = (_id) =>{
        console.log('item Delete', _id);
        if(!user){
            return navigate('/signin')
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed);
            if (result.isConfirmed) {
                // start deleting the coffee
                fetch(`https://coffee-store-server-one-psi.vercel.app/coffees/${_id}`, {
                    method:"Delete"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                        });
                        // remove the coffee from the state
                        const remainingCoffees = coffees.filter((coff) => coff._id !== _id);
                        setCoffees(remainingCoffees);
                    }
                });
                
            }
        });
    }

    return (
        <div className='bg-[#F5F4F1] rounded-lg p-4 flex justify-between items-center'>
            <div className='flex items-center gap-0'>
                <img src={photo} alt="" />
                <div className='flex flex-col gap-2'>
                    <p className='text-lg font-semibold text-[#1B1A1A]'>Name : <span className='text-base text-[#5C5B5B] font-normal'>{name}</span></p>
                    <p className='text-lg font-semibold text-[#1B1A1A]'>Price : <span className='text-base text-[#5C5B5B] font-normal'> {price}</span></p>
                    <p className='text-lg font-semibold text-[#1B1A1A]'>Supplier : <span className='text-base text-[#5C5B5B] font-normal'>{supplier}</span></p>
                    <p className='text-lg font-semibold text-[#1B1A1A]'>Quantity : <span className='text-base text-[#5C5B5B] font-normal'>{quantity}</span></p>
                </div>
            </div>
            <div className='flex flex-col gap-4 items-center mr-8'>
                <Link to={`/coffee/${_id}`}>
                    <button className='p-3 rounded-lg cursor-pointer bg-[#D2B48C] text-xl text-white'><FaEye></FaEye></button>
                </Link>
                <Link to={`/updateCoffee/${_id}`}>
                    <button className='p-3 rounded-lg cursor-pointer bg-[#3C393B] text-xl text-white'><MdEdit></MdEdit></button>
                </Link>
                <button onClick={() => handelDelete(_id)} className='p-3 rounded-lg cursor-pointer bg-[#EA4744] text-xl text-white'><MdDelete></MdDelete></button>
            </div>
        </div>
    );
};

export default CoffeeCard;