/* eslint-disable react/prop-types */

import { FaStar,FaStarHalfAlt } from "react-icons/fa";
const Card2 = ({ title, imageUrl, time, rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="card2 rounded-lg w-[300px] h-[300px] flex flex-col  cursor-pointer bg-zinc-600 p-4 hover:scale-110 transition-all duration-300">
      <img
        className="rounded-lg w-full h-[175px] object-cover border-2 "
        src={imageUrl}
        alt={title}
      />
      <div className='flex justify-between '>
      <div className='flex flex-col items-left'>
      <h3 className="py-2 text-lg font-semibold">{title}</h3>
      
      <div className="flex items-center ">
        <p className='pr-2 font-semibold text-yellow-500'>{rating}</p>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar className='text-yellow-500' key={ index } />
        ))}

        {hasHalfStar && (
          
            <FaStarHalfAlt className='text-yellow-500' />
          
        )}

        {[...Array(5 - Math.ceil(rating))].map((_, index) => (
          
          <FaStar key={ index } className='text-zinc-800' />
          
        ))}

      </div>
      </div>

      <div className='flex flex-col justify-center h-full items-left pl-8'>
        <p className='font-semibold'>Prep Time</p>
        <p className="">{time} min</p>
      </div>
      </div>
      
    </div>
  );
};

export default Card2;
