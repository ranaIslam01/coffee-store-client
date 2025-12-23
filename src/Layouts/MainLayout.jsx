import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import NavBar from '../Components/Navbar';

const MainLayout = () => {
   return (
      <div className="flex flex-col min-h-screen">
         <NavBar></NavBar>
         <div className="grow">
            <Outlet></Outlet>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default MainLayout;