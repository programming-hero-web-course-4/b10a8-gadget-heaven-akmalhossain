import React, { createContext, useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import Heading from '../components/Heading/Heading';
import AllProducts from '../components/AllProducts/AllProducts';
import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet, useLoaderData } from 'react-router-dom';

export const testContext = createContext(

)

const Home = () => {
    const categories = useLoaderData()
    // console.log(categories);
    useEffect(()=>{
        document.title = 'Home'
    },[])
    return (
        <>
        
            <Banner></Banner>
            <main className='w-10/12 mx-auto'>
            <Heading title={'Explore Cutting-Edge Gadgets'}></Heading>
            <section className='flex justify-between gap-6 mt-12'>
                <div className='w-1/4 bg-white rounded-2xl'>
                    <Sidebar categories={categories}></Sidebar>
                </div>
                <div className='w-3/4'>
                {/* <AllProducts></AllProducts> */}
                <Outlet></Outlet>
                </div>
            </section>
            
            </main>
        </>
    );
};

export default Home;