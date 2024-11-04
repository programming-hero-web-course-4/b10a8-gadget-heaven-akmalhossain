import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = () => {
    const [allProduct, setAllProduct] = useState([]);

    useEffect(() => {
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=>setAllProduct(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-6'>
            
            {
               allProduct.map(singleProduct => <SingleProduct key={singleProduct.id} singleProduct={singleProduct}> </SingleProduct>)
            }
        </div>
    );
};

export default AllProducts;