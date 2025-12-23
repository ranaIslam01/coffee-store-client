import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home";
import AddCoffee from "../Components/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import Users from "../Components/Users";
import CoffeeDetails from "../Components/CoffeeDetails";
import ErrorPage from "../Components/ErrorPage";

// একটি প্রফেশনাল রিঅ্যাক্ট স্পিনার কম্পোনেন্ট
const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      {/* Tailwind CSS Spinner */}
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-600"></div>
      <h2 className="mt-4 text-xl font-semibold text-gray-700">কফি শপ লোড হচ্ছে...</h2>
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    // HydrateFallback এখানে লোডিং স্পিনারটি সেট করা হয়েছে
    HydrateFallback: LoadingSpinner,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://coffee-store-server-1-t0pq.onrender.com/coffees"),
        Component: Home,
      },
      {
        path: "addCoffee",
        Component: AddCoffee,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
      {
        path: "coffee/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-1-t0pq.onrender.com/coffees/${params.id}`
          ),
        Component: CoffeeDetails,
      },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-1-t0pq.onrender.com/coffees/${params.id}`
          ),
        Component: UpdateCoffee,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "users",
        loader: () =>
          fetch(`https://coffee-store-server-1-t0pq.onrender.com/users`),
        Component: Users,
      },
    ],
  },
]);