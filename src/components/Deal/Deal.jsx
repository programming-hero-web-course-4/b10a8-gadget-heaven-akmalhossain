import React from 'react';

const Deal = ({ data }) => {
    const { id, title, description, originalPrice, discountedPrice, startDate, endDate, image } = data;
    return (
        <div>
            
            <div className='flex gap-10 items-center border rounded-xl border-dark05 p-6'>
                <img className='w-64 rounded-xl' src={image} alt="" />
                <div className='space-y-2 text-dark'>
                    <h1 className='text-3xl font-bold text-dark'>{title}</h1>
                    <p>{description}</p>
                    <p > Original Price: <span className='font-bold'>{originalPrice}</span></p>
                    <p className='text-dark'>After discount price will: <span className='font-bold text-primary'> {discountedPrice}</span> </p>
                    <p>Start from: {startDate}</p>
                    <p>Deal end date: {endDate}</p>
                    <button className='bg-primary text-white px-6 rounded-full py-3'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Deal;