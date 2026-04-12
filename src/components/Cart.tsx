import { useState } from 'react'
export const Cart = () => {
  const [quantity, setQuantity] = useState(0)
  return (
    <section className='top-28 right-1/7 absolute max-w-[377px] bg-white shadow-lg rounded-lg min-h-[488px] py-3 px-2'>
        <div className='flex justify-between'>
      <h2 className='font-bold text-lg'>CART ({quantity})</h2>
      <p className='font-normal text-[15px] text-black/50 underline hover:text-[#D87D4A]'>Remove all</p>
        </div>
      <p>Your cart is empty.</p>
    </section>
  )
}
