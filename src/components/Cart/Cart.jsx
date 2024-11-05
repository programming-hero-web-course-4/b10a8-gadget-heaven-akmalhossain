import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getCartData } from '../../utility/addToDB';
import CartProduct from '../CartProduct/CartProduct';

const Cart = () => {

    const allProducts = useLoaderData();

    // console.log(allProducts);
    const [readList, setReadList]=useState([])
    useEffect(()=>{
        const storedCartList = getCartData();
        const storedCartListInt = storedCartList.map(id => parseInt(id))
        // console.log(storedCartListInt.length);
        // 
        const readProductList = allProducts.filter(product => storedCartListInt.includes(product.id));
        console.log(readProductList);
        setReadList(readProductList)
        
    },[])

    return (
        <div className='w-8/12 mx-auto mt-10'>
            <div className='flex items-center justify-between'>
                <h4 className='text-2xl text-dark font-bold'>Cart</h4>
                <div className='flex items-center gap-5'>
                    <h1 className='text-2xl text-dark font-bold'>Total Cost: {readList.length}</h1>
                    <button className='btn btn-border'>Sort by Price </button>
                    <button className='btn'>Purchase </button>
                </div>
            </div>
            <div className='space-y-8 mt-10'>
                {
                    readList.map(product =><CartProduct key={product.id} product={product}></CartProduct>)
                }
            </div>
        </div>
    );
};

export default Cart;