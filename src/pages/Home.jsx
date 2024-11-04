import React from 'react';
import Banner from '../components/Banner/Banner';
import Heading from '../components/Heading/Heading';
import AllProducts from '../components/AllProducts/AllProducts';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <main className='w-10/12 mx-auto'>
            <Heading title={'Explore Cutting-Edge Gadgets'}></Heading>
            <section className='flex justify-between gap-6 mt-12'>
                <div className='w-1/4 bg-slate-200'>
                    sidebar
                </div>
                <div className='w-3/4'>
                <AllProducts></AllProducts>
                </div>
            </section>
            
            </main>
        </>
    );
};

export default Home;