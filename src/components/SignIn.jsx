import React, { use } from 'react';
import coffeeBg from '../assets/images/more/coffeeBg.png'
import { Link, useNavigate } from 'react-router';
import { IoMdArrowBack } from 'react-icons/io';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const SignIn = () => {
    const navigate = useNavigate();
    const {signInUser, setUser} = use(AuthContext);

    const handleSignIn = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
        .then(result => {
            console.log(result.user)
            setUser(result.user);
            const signInInfo = {
                email, 
                lastSignInTime : result.user?.metadata?.lastSignInTime
            }

            fetch('https://coffee-store-server-one-psi.vercel.app/users', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(signInInfo)
            })
            .then(res => res.json())
            .then(result => {
                console.log('after update patch',result)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your account Sign in successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                navigate('/')

            })
        })
        .catch(error => {
            console.log(error);
        })

        console.log("Sign is ")
    }
    return (
        <div className='pt-18'>
            <div className='px-[15%] py-[50px]' style={{background: `url(${coffeeBg})`}}>
                <button onClick={() => navigate('/')}  className='flex gap-3 items-center px-5 py-3 rounded-xl hover:bg-[#E3B577] duration-500 cursor-pointer'>
                    <IoMdArrowBack className='text-xl'></IoMdArrowBack>
                    <p className='text-xl rancho text-[#374151] my-text '>Back To Home</p>
                </button>
                <div className='px-10 w-2/3 mx-auto py-[70px] bg-[#F4F3F0] mt-8 rounded-2xl'>
                    <h1 className='text-center text-[56px] text-[#374151] my-text rancho'>Sign in Now!</h1>
                    <form onSubmit={handleSignIn} className='flex  flex-col gap-6'>
                        <div className='grid grid-cols-1 gap-6'>
                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold  my-text rancho text-lg text-[#1B1A1ACC]'>Email</label>
                                <input required className='py-3 px-3 bg-white rounded-lg w-full outline-none' type="text" name="email" placeholder='Enter Your Email' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold my-text rancho text-lg text-[#1B1A1ACC]'>Password</label>
                                <input required className='py-3 px-3 bg-white rounded-lg w-full outline-none' type="text" name="password" placeholder='Enter Your Password' />
                            </div>
                        </div>
                        <button type='submit' className='text-xl text-[#331A15] my-text border-2 border-[#331A15] rancho w-full py-3 rounded-lg bg-[#D2B48C] cursor-pointer'>Sign in</button>

                        <h3 className='text-center font-medium'>You don't have account? <Link to='/signup'>
                            <span  className='rancho my-text cursor-pointer hover:underline'>Sign Up</span>
                        </Link></h3>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;