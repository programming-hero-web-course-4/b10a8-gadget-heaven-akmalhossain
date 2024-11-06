import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Deal from '../components/Deal/Deal';

const Deals = () => {
    const allData = useLoaderData()
    return (
        <div className='mx-auto'>
            <div className='bg-primary py-16'>
                <h1 className='font-bold text-5xl text-center text-white'>Deals & Discounts</h1>
            </div>

            <div className='w-8/12 mx-auto p-10 space-y-20'>
            <h1 className='font-semibold text-2xl'>Recent Deals</h1>
                {
                    allData.map(data => <Deal key={data.id} data={data}></Deal>)
                }
            </div>

        </div>
    );
};

export default Deals;