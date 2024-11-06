import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mx-auto bg-white mt-20'>
            <div className=' w-8/12 mx-auto pt-24 pb-10 space-y-4'> 

            <h1 className='text-center font-bold text-dark text-4xl'>Gadget Heaven</h1>
            <p className='text-center text-dark60'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <footer className=" flex w-8/12 mx-auto text-center text-base-content p-10">
            
                <nav className='flex flex-col gap-4 mx-auto items-center'>
                    <h6 className="text-xl font-bold text-dark">Services</h6>
                    <div className='flex flex-col gap-3'>
                    <Link to={'productsupport'} className="link  link-hover text-dark60">Product Support</Link>
                    <Link to={'ordertrack'} className="link link-hover text-dark60">Order Tracking</Link>
                    <Link to={'shipping'} className="link link-hover text-dark60">Shipping & Delivery</Link>
                    <Link to={'returns'} className="link link-hover text-dark60">Returns</Link>
                    </div>
                </nav>
                <nav className='flex flex-col gap-4 mx-auto items-center'>
                    <h6 className="text-xl font-bold text-dark">Company</h6>
                    <div className='flex flex-col gap-3'>
                    <Link to={'about'} className="link  link-hover text-dark60">About Us</Link>
                    <Link to={'carrers'} className="link link-hover text-dark60">Careers</Link>
                    <Link to={'contact'} className="link link-hover text-dark60">Contact</Link>
                    
                    </div>
                </nav>
                <nav className='flex flex-col gap-4 mx-auto items-center'>
                    <h6 className="text-xl font-bold text-dark">Legal</h6>
                    <div className='flex flex-col gap-3'>
                    <Link to={'terms'} className="link  link-hover text-dark60">Terms Of Service</Link>
                    <Link to={'privacy'} className="link link-hover text-dark60">Privacy</Link>
                    <Link to={'cookie'} className="link link-hover text-dark60">Cookie Policy</Link>
                    
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;