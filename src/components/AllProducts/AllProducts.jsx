import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import Sidebar from '../Sidebar/Sidebar';
import { useLoaderData, useParams } from 'react-router-dom';

const AllProducts = () => {
   

    const { category } = useParams()
    
    const allProductsData = useLoaderData();
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        if (category) {
            const filteredCategory = [...allProductsData].filter(product => product.category === category)
            setAllProducts(filteredCategory);
        }
        else if(category==='All-Product'){
            setAllProducts(allProductsData.slice(0, 9))
        }



        else {
            setAllProducts(allProductsData.slice(0, 9))
        }
    }, [category, allProductsData])

    return (


        <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-6'>

            {
                allProducts.map(singleProduct => <SingleProduct key={singleProduct.id} singleProduct={singleProduct}> </SingleProduct>)
            }
        </div>

    );
};

export default AllProducts;