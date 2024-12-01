import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links=<>
  <NavLink to='/'>Home</NavLink>
   <NavLink to='/addCoffee'>Add Coffee</NavLink>
   <NavLink to='/signin'>Sign In</NavLink>
 <NavLink to='/signup'>Sign Up</NavLink>
 <NavLink to='/users'>Users</NavLink>
    
    </>
    return (
        <div>
            <header
                className="bg-[url('https://i.ibb.co.com/Z6R2P08/15.jpg')] bg-cover bg-center text-white"
            >
                <div className=" py-4 ">
                    <div className="container mx-auto flex items-center justify-center">
                        {/* Icon */}
                        <div className="flex items-center">
                            <img
                                src="https://i.ibb.co/mcsmmFq/logo1.png"
                                alt="Coffee Icon"
                                className="w-10 h-10 mr-2"
                            />
                            {/* Title */}
                            <h1 className="text-2xl font-bold font-serif">
                                Espresso Emporium
                            </h1>
                        </div>
                    <div className='ml-10 space-x-5'>
                    {links}
                    </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
