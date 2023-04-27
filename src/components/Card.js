import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import UserContext from "../contexts/userContext";
import { useContext } from "react";

function Card({ avatar }) {
  const { count, setCount } = useContext(UserContext);

  const incrementCount = () => {
    setCount((prevVal) => prevVal + 1);
  };

  return (
    <>
      <div className=' h-[405px] shadow-2xl hover:bg-slate-100 flex flex-col gap-0.5 p-1  w-64'>
        <div className='w-full h-64 relative'>
          <img
            src={avatar.avatarImage}
            alt='avatar'
            className='object-contain rounded-md'
          />
          <div className='cart-button absolute right-2 top-2 bg-blue-600 text-white text-xs flex justify-center items-center rounded-md p-2 gap-2'>
            <BsCartPlus />
            <button onClick={incrementCount}>Add</button>
          </div>
        </div>
        <Link to={`/product/${avatar.id}`}>
          <div className='font-medium text-[16px] leading-none w-full '>
            {avatar.name}
          </div>
          <div className='info  flex justify-between items-center  text-[15px]'>
            <div className='text-yellow-500 flex items-center'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span className='text-gray-500 px-2 text-xs'>
                {avatar.ratings} & {avatar.likes}Likes
              </span>
            </div>
            <span className='text-gray-500 px-2 text-lg font-medium'>
              <AiOutlineHeart />
            </span>
          </div>
          <div className='info flex justify-between items-center  text-[15px]'>
            <div className='text-yellow-500 flex items-center'>
              <div className='w-6 h-6'>
                <img
                  src={avatar.authorImage}
                  alt='authorImage'
                  className='object-contain rounded-full'
                />
              </div>
              <span className='text-gray-500 px-2 text-xs'>
                {avatar.author}
              </span>
            </div>
          </div>
          <div className='info  flex justify-start items-center text-sm'>
            <span>$</span>
            <span>{avatar.price}</span>
          </div>
          <div className='info  flex justify-between items-center  text-[15px]'>
            <div className='text-black flex items-center'>
              <div className='w-4 h-4 bg-blue-300 rounded-full'></div>
              <span className='px-2 text-xs font-medium'>
                {avatar.platform}
              </span>
            </div>
          </div>
          <div className='info flex justify-between items-center text-[15px]'>
            <span className='text-xs leading-none font-medium'>
              {avatar.description}
            </span>
            <span className='text-gray-500 px-2 text-lg font-medium'>
              <FiShare />
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
