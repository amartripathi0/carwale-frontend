import Image from 'next/image';
import React from 'react'

type FeaturedCarCardProps = {
    imgSrc : string;
    carTitle : string;
    price : string;
}
function FeaturedCarCard({imgSrc , carTitle , price } : FeaturedCarCardProps) {
  return (
    <div className='border flex flex-col justify-between '>
        <Image 
        src = {imgSrc}
        height = {2000}
        width = {2000}
        alt='car-image'
        className = "w-full h-1/2 object-cover"
        
        />
        <div className='h-1/2 w-full bg-[#F9F9F9] flex flex-col gap-2 p-4'>
            <h1>{carTitle}</h1>
            <h1 className='font-semibold'>Rs. {price} Lakh <span className='text-gray-400 font-medium text-xs'>onwards</span></h1>
            <p className='text-xs text-gray-600'>Avg. Ex-Showroom price</p>
            <button className='p-2 text-[#3AC1B6] border-[#3AC1B6] font-semibold w-40 text-xs border'>Show price in my city</button>
        </div>
    </div>
  )
}

export default FeaturedCarCard
