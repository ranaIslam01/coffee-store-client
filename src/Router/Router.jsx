import { createBrowserRouter } from "react-router";
import Home from '../components/Home';
import AddCoffee from '../components/AddCoffee';
import UpdateCoffee from '../components/UpdateCoffee';
import CoffeeDetails from '../components/CoffeeDetails';
import ErrorPage from '../components/ErrorPage';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Users from '../components/Users';
import Root from "../Layout/Root";
import PrivetRoute from "./PrivetRoute";
import Loading from "../components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        loader: () => fetch('https://coffee-store-server-one-psi.vercel.app/coffees'),
        Component: Home
      },
      {
        path: 'addCoffee',
        element: <PrivetRoute>
            <AddCoffee></AddCoffee>
        </PrivetRoute>
      },
      {
        path: 'updateCoffee/:id',
        loader: ({params}) => fetch(`https://coffee-store-server-one-psi.vercel.app/coffees/${params.id}`),
        element: <PrivetRoute>
            <UpdateCoffee></UpdateCoffee>
        </PrivetRoute>
      },
      {
        path: 'coffee/:id',
        loader: ({params}) => fetch(`https://coffee-store-server-one-psi.vercel.app/coffees/${params.id}`),
        element: <PrivetRoute>
            <CoffeeDetails></CoffeeDetails>
        </PrivetRoute>
      },
      {
        path: '*',
        Component: ErrorPage
      },
      {
        path: 'signin',
        Component: SignIn
      },
      {
        path: 'signup',
        Component: SignUp
      },
      {
        path: 'users',
        loader: () => fetch('https://coffee-store-server-one-psi.vercel.app/users'),
        element: <PrivetRoute>
            <Users></Users>
        </PrivetRoute>
      }
    ]
  },
]);

export default router;