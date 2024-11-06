import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getCartData, removeFromCartList } from '../../utility/addToDB';
import CartProduct from '../CartProduct/CartProduct';

const Cart = () => {

    const allProducts = useLoaderData();

    // console.log(allProducts);
    const [readList, setReadList] = useState([]);


    const [totalPrice, setTotalPrice] = useState(0);

    


    useEffect(() => {
        const storedCartList = getCartData();
        const storedCartListInt = storedCartList.map(id => parseInt(id))

        // 
        // const readProductList = allProducts.filter(product => storedCartListInt.includes(product.id));

        const readProductList = storedCartList.map(id => {
            return allProducts.find(product => product.id === id)
        })


        setReadList(readProductList)

    }, []);



    useEffect(() => {

        const calculateTotalPrice = () => {

            const cartIds = JSON.parse(localStorage.getItem('cart-list')) || [];


            const total = cartIds.reduce((sum, id) => {

                const product = allProducts.find(product => product.id === id);


                return product ? sum + product.price : sum;
            }, 0);


            setTotalPrice(total);
        };


        calculateTotalPrice();
    }, [allProducts]);

    const handleRemoveCart = (id) => {
        const newPCart = readList.filter((p, idx) => p.id !== id);
        const newPrice = readList.filter((p) => p.id === id);
        setTotalPrice(totalPrice - newPrice[0].price)

        console.log(newPCart);
        setReadList(newPCart);
        removeFromCartList(id);
    }

    const handleSort = ()=>{
        
        const sortedReadList = [...readList].sort((a,b)=>b.price - a.price);
        setReadList(sortedReadList);
    }

    return (
        <div className='w-8/12 mx-auto mt-10'>
            <div className='flex items-center justify-between'>
                <h4 className='text-2xl text-dark font-bold'>Cart</h4>
                <div className='flex items-center gap-5'>
                    <h1 className='text-2xl text-dark font-bold'>Total Cost: ${totalPrice}</h1>
                    <button onClick={()=>{handleSort()}} className='btn btn-border'>Sort by Price </button>
                    <button className='btn'>Purchase </button>
                </div>
            </div>
            <div className='space-y-8 mt-10'>
                {
                    readList.map(product => <CartProduct key={product.id} product={product} handleRemoveCart={handleRemoveCart}></CartProduct>)
                }
            </div>
        </div>
    );
};

export default Cart;