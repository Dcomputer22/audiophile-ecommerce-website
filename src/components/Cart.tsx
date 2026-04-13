'use client';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const Cart = () => {
  const { items, isCartOpen, closeCart, updateQuantity, clearCart, totalPrice } = useCart();
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      <div className='bg-black/50 fixed inset-0 z-40' onClick={closeCart} aria-hidden='true' />
      {/* Modal */}
      <div className='fixed top-[90px] right-0 left-0 md:left-auto md:right-10 lg:right-40 z-50 max-w-[377px] mx-auto md:mx-0'>
        <div className='bg-white rounded-lg p-8 shadow-xl'>
          {/* Header */}
          <div className='flex items-center justify-between mb-8'>
            <h2 className='text-[18px] font-bold tracking-[1.3px] uppercase'>
              CART ({items.length})
            </h2>
            <button
              onClick={clearCart}
              className='text-[15px] text-black/50 hover:text-[#D87D4A] underline transition-colors'
            >
              Remove all
            </button>
          </div>

          {/* Cart Items */}
          {items.length === 0 ? (
            <div className='text-center py-8'>
              <p className='text-black/50 mb-4'>Your cart is empty</p>
              <button
                onClick={closeCart}
                className='text-[#D87D4A] hover:text-[#FBAF85] font-bold'
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className='space-y-6 max-h-[340px] overflow-y-auto mb-8'>
                {items.map((item) => (
                  <div key={item.id} className='flex items-center gap-4'>
                    {/* Product Image */}
                    <div className='w-16 h-16 bg-[#F1F1F1] rounded-lg overflow-hidden shrink-0'>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='w-full h-full object-cover'
                      />
                    </div>

                    {/* Product Info */}
                    <div className='flex-1 min-w-0'>
                      <h3 className='text-[15px] font-bold truncate'>
                        {item.name.replace(' Headphones', '').replace(' Speaker', '').replace(' Earphones', '')}
                      </h3>
                      <p className='text-[14px] text-black/50 font-bold'>
                        $ {item.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className='flex items-center bg-[#F1F1F1] shrink-0'>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className='px-3 py-2 text-black/25 hover:text-[#D87D4A] font-bold transition-colors'
                      >
                        -
                      </button>
                      <span className='px-3 py-2 font-bold text-[13px] min-w-5 text-center'>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className='px-3 py-2 text-black/25 hover:text-[#D87D4A] font-bold transition-colors'
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className='flex items-center justify-between mb-6'>
                <span className='text-[15px] text-black/50 uppercase'>Total</span>
                <span className='text-[18px] font-bold'>
                  $ {totalPrice.toLocaleString()}
                </span>
              </div>

              {/* Checkout Button */}
              <Link href='/checkout' onClick={closeCart}>
                <button className='w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-4 uppercase text-[13px] font-bold tracking-[1px] transition-colors duration-200'>
                  CHECKOUT
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart
