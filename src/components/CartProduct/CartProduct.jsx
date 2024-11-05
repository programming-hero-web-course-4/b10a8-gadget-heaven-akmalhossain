import React from 'react';

const CartProduct = ({ product }) => {
    const { product_id, product_title, product_image, category, price, description, Specification, availability, rating } = product;
    return (
            <>
            <div className='flex  items-center  justify-between p-8 rounded-3xl bg-white'>
               <div className='flex items-center'>
               <img src={product_image} alt="" />
                <div className='bg-white space-y-6'>
                    <h4 className='font-semibold text-2xl'>{product_title}</h4>
                    <p>{description}</p>
                    <p>Price: $ {price}</p>
                </div>
               </div>
                <button className='text-red-700'>Remove</button>
            </div>
            </>
    );
};

export default CartProduct;