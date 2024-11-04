import React from 'react';

const SingleProduct = ({singleProduct}) => {
    const {product_id,  product_title,  product_image, category,  price,  description, Specification, availability,rating}=singleProduct;
    console.log(singleProduct);
    return (
        <div className='p-5 rounded-xl bg-white space-y-6'>
            <div className=''>
            <img className='mx-auto' src={product_image} alt="" />
            </div>
            <div className='space-y-3'>
            <h4 className='font-semibold text-2xl text-dark'>{product_title}</h4>
            <h5 className='font-medium text-dark60 text-xl'>Price: {price}k</h5>
            </div>
            <button className='border border-primary px-6 py-3 rounded-full text-primary font-bold'>View Details</button>
        </div>
    );
};

export default SingleProduct;