import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredWishListData } from '../../utility/addToDB';
import WishCard from '../WishCard/WishCard';

const Wishlist = () => {
    const allProduct = useLoaderData()

    const [readList, setReadList] = useState([]);

    useEffect(() => {
        const storedWList = getStoredWishListData();
        //   const storedWListInt = storedWList.map(id=>parseInt(id))
        console.log(storedWList)
        const readWProduct = allProduct.filter(product => storedWList.includes(product.id));
        setReadList(readWProduct)
    }, [])


    return (
        <>
            <div className='w-8/12 mx-auto mt-10'>
                <h1 className='text-2xl text-dark font-bold'>WishList {readList.length}</h1>
                <div className='mt-10 space-y-8'>
                    {readList.map(product => <WishCard key={product.id} product={product}></WishCard>)}
                </div>
            </div>

        </>
    );
};

export default Wishlist;