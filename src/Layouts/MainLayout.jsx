import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import NavBar from '../Components/Navbar';

const MainLayout = () => {
   return (
      <div>
         <NavBar></NavBar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default MainLayout;