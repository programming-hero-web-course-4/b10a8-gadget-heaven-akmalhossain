import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import cart from '../../src/assets/icons/cart2.svg';
import love from '../../src/assets/icons/love.svg';
import { addStoredCartList } from '../utility/addToDB';

const Details = () => {

    const { id } = useParams();
    const clickedId = parseInt(id);

    const data = useLoaderData();

    const product = data.find(product => product.id === clickedId);

    const { product_id, product_title, product_image, category, price, description, Specification, availability, rating } = product;

   
    const handleAddToCart=()=>{
        addStoredCartList(id)
        console.log(id)
    }

    return (
        <>
            <section>
                <div className='bg-primary w-full text-center pt-8 pb-40 space-y-6'>
                    <h2 className='text-3xl font-bold text-white'>Product Details</h2>
                    <p className='text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                </div>
                <div className='w-8/12 rounded-2xl p-8 mx-auto bg-white flex -mt-32'>
                    <div className='w-2/5'>
                        <img className='w-full' src={product_image} alt={product_title} />
                    </div>

                    <div className='w-3/5'>
                        <h1 className='font-semibold text-dark text-3xl'>{product_title}</h1>
                        <p className='font-semibold text-dark80 text-xl mt-3'>Price: $ {price}</p>
                        <p className='bg-green-50 border border-green-600 w-fit text-green-600 px-3 rounded-full mt-4'>
                            {availability ? 'In Stock' : 'Not in Stock'}
                        </p>
                        <p className='mt-4'>{description}</p>
                        <ul className='list-inside mt-6'>
                            <h1 className='font-bold text-dark text-lg'>Specification</h1>
                            {Specification.map((i, idx) => <li key={idx} className='list-decimal'>{i}</li>)}
                        </ul>
                        <h1 className='font-bold text-dark text-lg'>Rating <span><img src="" alt="" /></span></h1>
                        <div className='mt-4'>
                            <span>rating pore korbo</span>
                            <span>{rating}</span>
                        </div>

                        <div className='mt-8 flex gap-4'>
                            <button onClick={()=> handleAddToCart(id)} className='flex gap-2 bg-primary py-3 px-5 rounded-full text-white text-lg font-bold ga'>Add To Card <span><img src={cart} alt="" /></span></button>
                            <button className='rounded-full border border-gray-400 py-4 px-4'><img className='w-6 h-6' src={love} alt="" /> </button>
                        </div>

                    </div>

                </div>

            </section>
        </>

    );
};

export default Details;