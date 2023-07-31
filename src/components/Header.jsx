import React from "react";
// import logo from "./images/logo.png";
// import personImg from "/images/person.png";
import { useContext } from "react";
import UserContext from "../contexts/userContext";
import {
  AiOutlineBell,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link } from "react-router-dom";
function Header() {
  const { count } = useContext(UserContext);
  return (
    <header className=' p-0 md:p-4 py-2 bg-header bg-no-repeat bg-cover flex justify-between items-center mb-12'>
      <div className=' w-40 hidden md:block'>
        <img src={"/images/logo.png"} alt='logo' className='object-contain' />
      </div>

      <div className='right flex flex-col md:flex-row items-center justify-between lg:items-start text-4xl gap-4 '>
      <div className=' w-40 block md:hidden'>
        <img src={"/images/logo.png"} alt='logo' className='object-contain' />
      </div>
      <div className="flex flex-row gap-2 md:gap-4">
      <div className='w-full lg:w-96 h-7 relative text-xl'>
          <input type='text' className='w-full h-full rounded-md ' />
          <AiOutlineSearch className='absolute bottom-1 right-2' />
        </div>
        <div className='bell relative  w-10 md:w-12'>
          <AiOutlineBell className='bg-gray-800 text-white p-1 rounded-lg' />
          <span className='w-4 h-4 bg-red-500 rounded-full text-xs text-white p-2 absolute -top-1 -right-2 text-center flex justify-center items-center'>
            0
          </span>
        </div>
        <div className='bell relative w-10 md:w-12'>
          <AiOutlineShoppingCart className='bg-gray-800 text-white p-1 rounded-lg' />
          <span className='w-4 h-4 bg-red-500 rounded-full text-xs text-white p-2 absolute -top-1 -right-2 text-center flex justify-center items-center'>
            {count}
          </span>
        </div>
        <div className='w-10  h-9 bg-white rounded-lg flex justify-center p-1'>
          <img
            src={"/images/person.png"}
            alt='person'
            className='object-contain'
          />
        </div>
      </div>
        

       

        
      </div>
    </header>
  );
}

export default Header;
