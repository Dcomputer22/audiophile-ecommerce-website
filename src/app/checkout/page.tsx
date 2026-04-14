'use client';

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CheckoutFormData } from "../types/checkout";
import Link from "next/link";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    paymentMethod: 'e-money',
    eMoneyNumber: '',
    eMoneyPin: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const shipping = 50;
  const vat = Math.round(totalPrice * 0.2);
  const grandTotal = totalPrice + shipping + vat;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Wrong format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP Code is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';

    if (formData.paymentMethod === 'e-money') {
      if (!formData.eMoneyNumber.trim()) newErrors.eMoneyNumber = 'e-Money Number is required';
      if (!formData.eMoneyPin.trim()) newErrors.eMoneyPin = 'e-Money PIN is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // TODO: This is where you'll call Convex later
      // For now, just simulate submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Clear cart
      clearCart();

      // Redirect to confirmation (we'll build this next)
      router.push('/confirmation');
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <>
        <div className="max-w-[1110px] mx-auto px-6 py-32 text-center">
          <h1 className="text-[32px] font-bold mb-8">Your cart is empty</h1>
          <Link href="/">
            <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white px-8 py-4 uppercase text-[13px] font-bold tracking-[1px] transition-colors">
              Continue Shopping
            </button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-[#F1F1F1] min-h-screen py-16 md:py-32">
        <div className="max-w-[1110px] mx-auto px-6">
          <Link
            href="/"
            className="inline-block text-[15px] text-black/50 hover:text-[#D87D4A] transition-colors mb-6"
          >
            Go Back
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-6 md:p-12">
                <h1 className="text-[28px] md:text-[32px] font-bold mb-10 uppercase tracking-[1.15px]">
                  CHECKOUT
                </h1>

                <form onSubmit={handleSubmit}>
                  {/* Billing Details */}
                  <div className="mb-8">
                    <h2 className="text-[#D87D4A] text-[13px] font-bold tracking-[1px] uppercase mb-4">
                      Billing Details
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[12px] font-bold mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Alexei Ward"
                          className={`w-full px-6 py-4 border rounded-lg text-[14px] font-bold focus:outline-none focus:border-[#D87D4A] ${errors.name ? 'border-[#CD2C2C]' : 'border-[#CFCFCF]'
                            }`}
                        />
                        {errors.name && (
                          <p className="text-[#CD2C2C] text-[12px] font-medium mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="block text-[12px] font-bold">
                            Email Address
                          </label>
                          {errors.email && (
                            <span className="text-[#CD2C2C] text-[12px] font-medium">
                              {errors.email}
                            </span>
                          )}
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="alexei@mail.com"
                          className={`w-full px-6 py-4 border rounded-lg text-[14px] font-bold focus:outline-none focus:border-[#D87D4A] ${errors.email ? 'border-[#CD2C2C]' : 'border-[#CFCFCF]'
                            }`}
                        />
                      </div>

                      <div>
                        <label className="block text-[12px] font-bold mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 202-555-0136"
                          className={`w-full px-6 py-4 border rounded-lg text-[14px] font-bold focus:outline-none focus:border-[#D87D4A] ${errors.phone ? 'border-[#CD2C2C]' : 'border-[#CFCFCF]'
                            }`}
                        />
                        {errors.phone && (
                          <p className="text-[#CD2C2C] text-[12px] font-medium mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-[#D87D4A] text-[13px] font-bold tracking-[1px] uppercase mb-4">
                      Shipping Info
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-[12px] font-bold mb-2">
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="1137 Williams Avenue"
                          className={`w-full px-6 py-4 border rounded-lg text-[14px] font-bold focus:outline-none focus:border-[#D87D4A] ${errors.address ? 'border-[#CD2C2C]' : 'border-[#CFCFCF]'
                            }`}
                        />
                        {errors.address && (
                          <p className="text-[#CD2C2C] text-[12px] font-medium mt-1">
                            {errors.address}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[12px] font-bold mb-2">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          placeholder="10001"
                          className={`w-full px-6 py-4 border rounded-lg text-[14px] font-bold focus:outline-none focus:border-[#D87D4A] ${errors.zipCode ? 'border-[#CD2C2C]' : 'border-[#CFCFCF]'
                            }`}
                        />
                        {errors.zipCode && (
                          <p className="text-[#CD2C2C] text-[12px] font-medium mt-1">
                            {errors.zipCode}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[12px] font-bold mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="New York"
                          className={`w-full px-6 py-4 border rounded-lg text-[14px] font-bold focus:outline-none focus:border-[#D87D4A] ${errors.city ? 'border-[#CD2C2C]' : 'border-[#CFCFCF]'
                            }`}
                        />
                        {errors.city && (
                          <p className="text-[#CD2C2C] text-[12px] font-medium mt-1">
                            {errors.city}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[12px] font-bold mb-2">
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          placeholder="United States"
                          className={`w-full px-6 py-4 border rounded-lg text-[14px] font-bold focus:outline-none focus:border-[#D87D4A] ${errors.country ? 'border-[#CD2C2C]' : 'border-[#CFCFCF]'
                            }`}
                        />
                        {errors.country && (
                          <p className="text-[#CD2C2C] text-[12px] font-medium mt-1">
                            {errors.country}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Payment Details */}
                  <div>
                    <h2 className="text-[#D87D4A] text-[13px] font-bold tracking-[1px] uppercase mb-4">
                      Payment Details
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[12px] font-bold mb-2">
                          Payment Method
                        </label>
                      </div>

                      <div className="space-y-4">
                        <label className="flex items-center gap-4 px-6 py-4 border border-[#CFCFCF] rounded-lg cursor-pointer hover:border-[#D87D4A]">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="e-money"
                            checked={formData.paymentMethod === 'e-money'}
                            onChange={handleInputChange}
                            className="w-5 h-5 accent-[#D87D4A]"
                          />
                          <span className="text-[14px] font-bold">e-Money</span>
                        </label>

                        <label className="flex items-center gap-4 px-6 py-4 border border-[#CFCFCF] rounded-lg cursor-pointer hover:border-[#D87D4A]">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="cash"
                            checked={formData.paymentMethod === 'cash'}
                            onChange={handleInputChange}
                            className="w-5 h-5 accent-[#D87D4A]"
                          />
                          <span className="text-[14px] font-bold">Cash on Delivery</span>
                        </label>
                      </div>
                    </div>

                    {formData.paymentMethod === 'e-money' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <label className="block text-[12px] font-bold mb-2">
                            e-Money Number
                          </label>
                          <input
                            type="text"
                            name="eMoneyNumber"
                            value={formData.eMoneyNumber}
                            onChange={handleInputChange}
                            placeholder="238521993"
                            className={`w-full px-6 py-4 border rounded-lg text-[14px] font-bold focus:outline-none focus:border-[#D87D4A] ${errors.eMoneyNumber ? 'border-[#CD2C2C]' : 'border-[#CFCFCF]'
                              }`}
                          />
                          {errors.eMoneyNumber && (
                            <p className="text-[#CD2C2C] text-[12px] font-medium mt-1">
                              {errors.eMoneyNumber}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-[12px] font-bold mb-2">
                            e-Money PIN
                          </label>
                          <input
                            type="text"
                            name="eMoneyPin"
                            value={formData.eMoneyPin}
                            onChange={handleInputChange}
                            placeholder="6891"
                            className={`w-full px-6 py-4 border rounded-lg text-[14px] font-bold focus:outline-none focus:border-[#D87D4A] ${errors.eMoneyPin ? 'border-[#CD2C2C]' : 'border-[#CFCFCF]'
                              }`}
                          />
                          {errors.eMoneyPin && (
                            <p className="text-[#CD2C2C] text-[12px] font-medium mt-1">
                              {errors.eMoneyPin}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {formData.paymentMethod === 'cash' && (
                      <div className="flex items-start gap-8 mt-8">
                        <div className="w-12 h-12 shrink-0">
                          <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H9.844a1.406 1.406 0 0 0 0 2.812h2.719c.777 0 1.406.63 1.406 1.406 0 .776-.63 1.406-1.406 1.406H9.844a1.406 1.406 0 0 0 0 2.813h32.656a1.406 1.406 0 0 0 0-2.813H39.78c-.777 0-1.406-.63-1.406-1.406 0-.776.63-1.406 1.406-1.406h2.719a1.406 1.406 0 0 0 0-2.812H39.78c-.777 0-1.406-.631-1.406-1.407 0-.776.63-1.406 1.406-1.406h3.13a11.225 11.225 0 0 1 7.047 2.499 1.406 1.406 0 0 0 1.772-2.185 14.053 14.053 0 0 0-7.824-3.089v-15.6c0-.776-.63-1.406-1.407-1.406h-9.531V10.97c0-.776-.63-1.406-1.407-1.406h-6.344c1.596-1.013 3.434-1.738 5.406-2.084.652-.116 1.078-.721.962-1.375a1.407 1.407 0 0 0-1.375-.962 17.506 17.506 0 0 0-8.532 3.145H19.25c-.777 0-1.406.63-1.406 1.406v9.938H11.25v-15.6a1.406 1.406 0 0 0-1.406-1.407H1.406a1.406 1.406 0 0 0 0 2.813h7.032v15.6c0 .776.63 1.406 1.406 1.406h9.656c.777 0 1.406-.63 1.406-1.406V11.375h5.625c.777 0 1.406-.63 1.406-1.406 0-.776-.63-1.406-1.406-1.406h-5.625V7.032h8.906c.777 0 1.406-.63 1.406-1.406 0-.776-.63-1.406-1.406-1.406h-8.906c.777 0 1.406-.63 1.406-1.407 0-.776-.63-1.406-1.406-1.406h-5.625c.777 0 1.406-.631 1.406-1.407V0h21.656c.777 0 1.407-.63 1.407-1.406a1.406 1.406 0 0 0-1.407-1.407h-24.47c-.776 0-1.405.63-1.405 1.407V5.22c0 .777.629 1.406 1.406 1.406h5.625v1.407h-5.625c-.777 0-1.406.63-1.406 1.406v1.407h-5.625c-.777 0-1.406.63-1.406 1.406v18.75c0 .777.63 1.407 1.406 1.407h32.219c.777 0 1.406-.63 1.406-1.407v-18.75c0-.776-.63-1.406-1.406-1.406z"
                              fill="#D87D4A"
                            />
                          </svg>
                        </div>
                        <p className="text-[15px] text-black/50 leading-[25px]">
                          The 'Cash on Delivery' option enables you to pay in cash when our delivery
                          courier arrives at your residence. Just make sure your address is correct so
                          that your order will not be cancelled.
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-8 sticky top-8">
                <h2 className="text-[18px] font-bold tracking-[1.3px] uppercase mb-8">
                  SUMMARY
                </h2>

                <div className="space-y-6 mb-8">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#F1F1F1] rounded-lg overflow-hidden shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[15px] font-bold truncate">
                          {item.name.replace(' Headphones', '').replace(' Speaker', '').replace(' Earphones', '')}
                        </h3>
                        <p className="text-[14px] text-black/50 font-bold">
                          $ {item.price.toLocaleString()}
                        </p>
                      </div>
                      <span className="text-[15px] text-black/50 font-bold">
                        x{item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-2 mb-8">
                  <div className="flex justify-between">
                    <span className="text-[15px] text-black/50 uppercase">Total</span>
                    <span className="text-[18px] font-bold">
                      $ {totalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[15px] text-black/50 uppercase">Shipping</span>
                    <span className="text-[18px] font-bold">$ {shipping}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[15px] text-black/50 uppercase">VAT (Included)</span>
                    <span className="text-[18px] font-bold">$ {vat.toLocaleString()}</span>
                  </div>
                </div>

                {/* Grand Total */}
                <div className="flex justify-between mb-8">
                  <span className="text-[15px] text-black/50 uppercase">Grand Total</span>
                  <span className="text-[18px] font-bold text-[#D87D4A]">
                    $ {grandTotal.toLocaleString()}
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-4 uppercase text-[13px] font-bold tracking-[1px] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'PROCESSING...' : 'CONTINUE & PAY'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
