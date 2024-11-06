
import { useLoaderData, useParams } from 'react-router-dom';
import cart from '../../src/assets/icons/cart2.svg';
import love from '../../src/assets/icons/love.svg';
import { addStoredCartList, addWishList, getStoredWishListData } from '../utility/addToDB';
import { useEffect, useState } from 'react';


import star from '../assets/icons/icons8-star-48.png'

// 

// 




const Details = () => {

    const [inWiseList, setInWiseList] = useState(false)

    useEffect(()=>{
        document.title = 'Details'
    },[])

    const { id } = useParams();
    const clickedId = parseInt(id);

    const data = useLoaderData();

    const product = data.find(product => product.id === clickedId);

    const {id:pid, product_id, product_title, product_image, category, price, description, Specification, availability, rating } = product;

    useEffect(()=>{
        const wishlistid = getStoredWishListData();
        
       const findId =  wishlistid.find(id => id === pid);
       if(findId){setInWiseList(true)}
       else{setInWiseList(false)}
    },[])

   
    const handleAddToCart=(pid)=>{
        // console.log(pid)
    addStoredCartList(pid);
    
    
  }

  const handleAddWishList=(pid)=>{
    addWishList(pid);
    setInWiseList(true);
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
                            <h1 className='font-bold text-dark text-lg mt-4'>Specification</h1>
                        <ul className='list-inside mt-2'>
                            {Specification.map((i, idx) => <li key={idx} className='list-decimal'>{i}</li>)}
                        </ul>
                        <h1 className='font-bold text-dark text-lg mt-4'>Rating <span><img src="" alt="" /></span></h1>
                        <div className='mt-2 flex gap-2 items-center'>
                            <span>
                                <img className='w-6' src={star} alt="" />
                            </span>
                            <span>{rating}</span>
                        </div>

                        <div className='mt-8 flex gap-4'>
                            <button 
                            onClick={()=> handleAddToCart(pid)} 
                            className='flex gap-2 bg-primary py-3 px-5 rounded-full
                             text-white text-lg font-bold ga'>Add To Card <span>
                                <img src={cart} alt="" /></span>
                                </button>
                            <button onClick={()=> handleAddWishList(pid)} 
                            disabled={inWiseList}
                            className='rounded-full border border-gray-400 py-4 px-4'>
                                <img className='w-6 h-6' src={love} alt="" /> 
                                </button>
                        </div>
                       

                    </div>

                </div>

            </section>
            
        </>

    );
};

export default Details;