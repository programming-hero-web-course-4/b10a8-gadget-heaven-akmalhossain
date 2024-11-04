import React from 'react';
import cart from '../../assets/icons/cart.svg';
import love from '../../assets/icons/love.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const links = <>
        
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/'>Statistics</NavLink></li>
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                
    </>

    return (
        <div className="navbar bg-primary w-11/12 mx-auto mt-16 py-7 rounded-t-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 text-dark rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-white text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-white px-1">
                    
                {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <div className='bg-white rounded-full p-4'>
                <img  className='w-6' src={cart} alt="" />
                </div>
                <div className='bg-white rounded-full p-4'>
                <img className='w-6' src={love} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;