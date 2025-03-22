import React from 'react'
import ReviewSlider from './ReviewSlider'

type Props = {
  id?: string; // Add this line
};

const Review = ({id}:Props) => {
  return (
    <div id={id} className='pt-16 pb-16'>
        <h1 className='text-2xl sm:text-3xl text-center text-gray-800 font-bold dark:text-white '>
            500+ Customers Trusts Us
        </h1>
        <span className='w-16 h-1 bg-[#A67B5B] mx-auto mt-3 block'></span>
        <div className='w-[90%] sm:w-[80%] mx-auto mt-16 lg:w-[60%]'>
            {/* ReviewSlider */}
            <ReviewSlider/>
        </div>
        </div>
  )
}

export default Review