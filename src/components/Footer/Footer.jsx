import React from 'react';

const Footer = () => {
    return (
        <div className='mx-auto'>
            <footer className=" flex w-8/12 mx-auto text-center text-base-content p-10">
                <nav className='flex flex-col gap-4 mx-auto items-center'>
                    <h6 className="text-xl font-bold text-dark">Services</h6>
                    <div className='flex flex-col gap-3'>
                    <a className="link  link-hover text-dark60">Product Support</a>
                    <a className="link link-hover text-dark60">Order Tracking</a>
                    <a className="link link-hover text-dark60">Shipping & Delivery</a>
                    <a className="link link-hover text-dark60">Returns</a>
                    </div>
                </nav>
                <nav className='flex flex-col gap-4 mx-auto items-center'>
                    <h6 className="text-xl font-bold text-dark">Company</h6>
                    <div className='flex flex-col gap-3'>
                    <a className="link  link-hover text-dark60">About Us</a>
                    <a className="link link-hover text-dark60">Careers</a>
                    <a className="link link-hover text-dark60">Contact</a>
                    
                    </div>
                </nav>
                <nav className='flex flex-col gap-4 mx-auto items-center'>
                    <h6 className="text-xl font-bold text-dark">Legal</h6>
                    <div className='flex flex-col gap-3'>
                    <a className="link  link-hover text-dark60">Terms Of Service</a>
                    <a className="link link-hover text-dark60">Privacy</a>
                    <a className="link link-hover text-dark60">Cookie Policy</a>
                    
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;