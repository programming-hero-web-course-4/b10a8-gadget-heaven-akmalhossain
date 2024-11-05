import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const Sidebar = ({ categories }) => {




    return (
        <div className='flex flex-col py-12 px-10 space-y-6'>
            <NavLink 
            to={'/'}
            className={({isActive})=>`rounded-full py-4 px-6  ${isActive?'bg-primary text-white':'bg-dark05'}`}
            >All Product</NavLink>
            {categories.map(category =>
                
                <NavLink
                    key={category.category_id}
                    category={category.category_name}
                    to={`/${category.category_name}`}
                   
                    // className='rounded-full py-6 px-4 bg-dark05'
                    className={({isActive})=>`rounded-full py-4 px-6  ${isActive?'bg-primary text-white':'bg-dark05'}`}
                    >
                    {category.category_name}
                </NavLink>

            )}
        </div>
    );
};

export default Sidebar;