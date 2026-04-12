'use client';
import { useState } from "react";
import { Cart } from "./Cart";

interface Product {
  new: boolean;
  name: string;
  description: string;
  price: number;
}

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);  

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div>
      {product.new && (
        <p className='relative font-normal text-sm tracking-[10px] uppercase text-[#D87D4A] mb-4 md:mb-6'>
          New Product
        </p>
      )}
      <h1 className='text-[28px] md:text-[40px] font-bold mb-6 md:mb-8 uppercase tracking-[1px] md:tracking-[1.5px] leading-tight'>
        {product.name}
      </h1>
      <p className='text-[15px] leading-[25px] text-black/50 mb-6 md:mb-8'>
        {product.description}
      </p>
      <p className='text-[18px] font-bold mb-8 tracking-[1.3px]'>
        {product.price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </p>

      <div className='flex gap-4'>
        <div className='flex items-center bg-[#F1F1F1]'>
          <button onClick={handleDecrement} className='px-4 py-2 text-black/25 hover:text-[#D87D4A] font-bold transition-colors cursor-pointer'>
            -
          </button>
          <span className='px-6 py-4 font-bold text-[13px] tracking-[1px]'>
            {quantity}
          </span>
          <button onClick={handleIncrement} className='px-5 py-4 text-black/25 hover:text-[#D87D4A] font-bold transition-colors cursor-pointer'>
            +
          </button>
        </div>

        <button onClick={() => setIsCartOpen(true)} className='bg-[#D87D4A] text-white uppercase font-normal py-3 px-6 hover:bg-[#FBAF85] cursor-pointer'>
          Add to Cart
        </button>
      </div>
      {isCartOpen && (
        <Cart />
      )}
    </div>
  )
}
