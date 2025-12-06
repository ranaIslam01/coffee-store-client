import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Root = () => {
    return (
        <div className='relative'>
            <div className='fixed top-0 left-0 z-50  right-0' >
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;