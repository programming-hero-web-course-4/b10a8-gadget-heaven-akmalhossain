import React, { useEffect, useState } from 'react';
import cart from '../../assets/icons/cart.svg';
import love from '../../assets/icons/love.svg';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import { getCartData } from '../../utility/addToDB'

const Navbar = () => {

    const location = useLocation();
    const [cartList, setCartList] = useState([])
    useEffect(() => {
        const storedCartList = getCartData();
        setCartList(storedCartList);
    }, [])

    const links = <>

        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/deals'>Deals</NavLink></li>
        

    </>

    return (

        <div className=
            {location.pathname === '/' ?
                'navbar bg-primary w-11/12 mx-auto lg:px-8 py-7 rounded-t-2xl'
                : 'navbar bg-[##F6F6F6] w-11/12 mx-auto lg:px-8 py-7 rounded-t-2xl'
            }>
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
                <a className={location.pathname === '/' ? "btn btn-ghost text-white text-xl" : "btn btn-ghost text-dark text-xl"}>Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className={location.pathname === '/' ? "menu menu-horizontal text-white px-1" : "menu menu-horizontal text-dark px-1"}>
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex  gap-4">
                <Link to={'/dashboard/cart'} className={location.pathname === '/' ? 'bg-white relative rounded-full p-4' : 'bg-white relative border border-gray-300 rounded-full p-4'}>

                    <img className='w-6' src={cart} alt="" />


                    <div className='absolute right-0 bg-white rounded-full w-6 h-6 text-center shadow-lg border top-0'>
                        {cartList.length}
                        </div>
                </Link>

                <Link to={'/dashboard/wishlist'} className={location.pathname === '/' ? 'bg-white rounded-full p-4' : 'bg-white border border-gray-300 rounded-full p-4'}>
                    <img className='w-6' src={love} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;