import React, { useState } from 'react';
import {useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const AllCoffee = () => {
    const loadedCoffees=useLoaderData()
    const[coffees,setCoffees]=useState(loadedCoffees)
    return (
        <div>
            

            
         

<div className='grid grid-cols-2 mx-auto container gap-5'>
    {
        coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee}
        coffees={coffees}
        setCoffees={setCoffees}></CoffeeCard>)
    }
</div>
        </div>
    );
};

export default AllCoffee;