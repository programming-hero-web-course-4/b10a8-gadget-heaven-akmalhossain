import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='w-full text-center bg-primary text-white p-8 space-y-8'>
            <div className='space-y-4'>
                <h1 className='font-bold text-4xl '>Dashboard</h1>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className='flex gap-6 items-center justify-center'>
                
                <NavLink 
                
                className={({isActive})=>
                    `rounded-full py-2 px-6  border-2 border-white font-bold ${isActive?'bg-white text-primary':''}`}
                >Cart</NavLink>
                <NavLink 
                className={({isActive})=>
                    `rounded-full py-2 px-6  border-2 border-white font-bold ${isActive?'bg-white text-primary':''}`}
                >WishList</NavLink>
                
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;