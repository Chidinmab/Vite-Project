import React from 'react';
import productImage from "../assets/Headphonees.png.png";
import Button from '../pages/Button';

const ProductCard = () => {
    
  return (
    <div className='bg-white w-[350px] h-fit p-4 rounded-xl'>
<div className='w-full relative p-12'>
    <div className='bg-purple-300 text-black px-2 py-1 w-fit absolute top-0 left-0 '>Nearest Seller</div>
    <img className='size-[200px] m-auto' src={productImage} alt='image' />
</div>

<div className='flex flex-col'>
    <h3 className='text-2xl font-bold mb-3'>
        Wireless bluetooth headset
    </h3>
    <small className='text-sm text-grey-500'>Shipped in 3-4 days</small>
    <b className='text-md font-bold'>$35.99</b>
</div>

<div className='flex gap-3'>
    <Button label='Add to cart ' className='bg-gray-100 w-full'/>
    <Button label='Buy now' className='bg-purple-400 w-full text-white'/>
</div>
</div>
  )
};

export default ProductCard;