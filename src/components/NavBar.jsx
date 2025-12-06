import React, { use } from 'react';
import logo from '../assets/images/more/logo1.png';
import navbg from '../assets/images/more/navbg.jpg';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const NavBar = () => {
    const {user, logOut, setUser} = use(AuthContext);

    const handelSignOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to Sign out your Account",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sign Out"
            }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                .then(result => {
                    console.log(result);
                    Swal.fire({
                        title: "Sign Out",
                        text: "Your account has been signout.",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setUser(null)
                })
                
            }
        });
    }

    const links =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/addCoffee'>Add Coffee</NavLink></li>
            <li><NavLink to='/users'>Users</NavLink></li>
        </>
    return (
        <nav style={{ backgroundImage: `url(${navbg})` }} className='flex justify-between items-center px-[5%]' >
            <Link to='/' className="flex items-center  gap-2 bg-cover bg-center">
                <img className="h-14" src={logo} alt="Not Found" />
                <h1 className="rancho my-text text-[48px] text-white">Espresso Emporium</h1>
            </Link>
            <ul className='flex items-center gap-6 text-white font-semibold rancho'>
                {links}
            </ul>
            {
                user ? 
                    <Link >
                        <div className='flex items-center gap-3'>
                            {/* <img className='bg-white h-10 w-10 object-cover rounded-full' src={user.photoURL} alt="not found" /> */}
                            <button onClick={handelSignOut} className='py-3 px-10 cursor-pointer bg-white rancho my-text rounded-full'>Log Out</button>
                        </div>
                    </Link>
                    :
                <div>
                    <div className='flex items-center gap-4'>
                        <Link to='/signin'>
                            <button className='py-3 px-10 cursor-pointer bg-white rancho my-text rounded-full'>Sign In</button>
                        </Link>
                        <Link to='/signup'>
                            <button className='py-3 px-10 cursor-pointer bg-white rancho my-text rounded-full'>Sign Up</button>
                        </Link>
                    </div>
                </div>
            }

        </nav>
    );
};

export default NavBar;
