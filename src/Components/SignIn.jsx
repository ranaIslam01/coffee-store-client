import { useContext } from "react";
import coffeeBg from "../assets/images/more/coffeeBg.png";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import { AuthContext } from "../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize navigate

  const handleSignIN = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        // Success Toast
        toast.success("SignIn Successful!");
        
        // Corrected object structure
        const signInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        // Update last sign in to the database
        fetch("https://coffee-store-server-1-t0pq.onrender.com/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signInInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Database updated:", data);
            
            // Navigate to home after successful DB update and login
            // Using a slight delay or direct call
            setTimeout(() => {
                navigate('/');
            }, 100); 
          });
      })
      .catch((error) => {
        console.error("Login Error:", error);
        toast.error(error.message); // Show actual firebase error
      });
  };

  return (
    <div className="">
      <ToastContainer />
      <div
        className="px-4 sm:px-6 md:px-[10%] lg:px-[15%] py-8 md:py-12.5"
        style={{
          backgroundImage: `url(${coffeeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')} // Added click handler to navigate back
          className="flex gap-3 items-center px-5 py-3 rounded-xl hover:bg-[#E3B577] duration-500 cursor-pointer"
        >
          <IoMdArrowBack className="text-xl" />
          <span className="text-sm md:text-xl rancho text-[#374151] my-text">
            Back To Home
          </span>
        </button>

        {/* SignIn Form */}
        <div className="px-4 sm:px-6 md:px-10 w-full sm:w-5/6 md:w-2/3 mx-auto py-4 md:py-10 bg-[#F4F3F0] mt-8 rounded-2xl shadow-lg">
          <h1 className="text-center text-2xl sm:text-4xl md:text-[56px] text-[#374151] my-text rancho">
            Sign in Now!
          </h1>
          <form
            onSubmit={handleSignIN}
            className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6"
          >
            <div className="flex flex-col gap-2 md:gap-4">
              <label className="font-semibold my-text rancho text-sm md:text-lg text-[#1B1A1ACC]">
                Email
              </label>
              <input
                required
                className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none text-sm md:text-base border border-transparent focus:border-[#D2B48C]"
                type="email" // Changed type to email
                name="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <label className="font-semibold my-text rancho text-sm md:text-lg text-[#1B1A1ACC]">
                Password
              </label>
              <input
                required
                className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none text-sm md:text-base border border-transparent focus:border-[#D2B48C]"
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />
            </div>
            <button
              type="submit"
              className="text-base md:text-xl text-[#331A15] my-text border-2 border-[#331A15] rancho w-full py-2 md:py-3 rounded-lg bg-[#D2B48C] cursor-pointer hover:bg-[#c9a876] duration-300"
            >
              Sign in
            </button>

            <h3 className="text-center font-medium mt-2 md:mt-4 text-sm md:text-base">
              You don't have an account?{" "}
              <Link to="/signup">
                <span className="rancho my-text cursor-pointer hover:underline text-orange-900">
                  Sign Up
                </span>
              </Link>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;