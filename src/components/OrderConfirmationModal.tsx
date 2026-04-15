'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface OrderItem {
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface OrderConfirmationModalProps {
    orderNumber: string;
    items: OrderItem[];
    grandTotal: number;
}

export const OrderConfirmationModal = ({
    orderNumber,
    items,
    grandTotal,
}: OrderConfirmationModalProps) => {
    const router = useRouter();
    const [showAll, setShowAll] = useState(false);

    const displayItems = showAll ? items : items.slice(0, 1);
    const remainingCount = items.length - 1;

    const handleBackToHome = () => {
        sessionStorage.removeItem('lastOrder');
        router.push('/');
    };

    return (
        <>
            <div className="fixed inset-0 bg-black/50 z-50" />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                <div className="bg-white rounded-lg max-w-[540px] w-full p-8 md:p-12">
                    <div className="w-16 h-16 rounded-full bg-[#D87D4A] flex items-center justify-center mb-8">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M9 12L11 14L15 10"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <h1 className="text-[24px] md:text-[32px] font-bold mb-6 uppercase tracking-[1px]">
                        THANK YOU
                        <br />
                        FOR YOUR ORDER
                    </h1>

                    <p className="text-[15px] text-black/50 mb-8">
                        You will receive an email confirmation shortly.
                    </p>

                    {/* Order Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-5 rounded-lg overflow-hidden mb-8">
                        <div className="md:col-span-3 bg-[#F1F1F1] p-6">
                            {displayItems.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-white rounded-lg overflow-hidden shrink-0">
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

                            {remainingCount > 0 && !showAll && (
                                <button
                                    onClick={() => setShowAll(true)}
                                    className="text-[12px] text-black/50 font-bold border-t border-black/10 pt-4 w-full text-center hover:text-[#D87D4A]"
                                >
                                    and {remainingCount} other item{remainingCount > 1 ? 's' : ''}
                                </button>
                            )}

                            {showAll && (
                                <button
                                    onClick={() => setShowAll(false)}
                                    className="text-[12px] text-black/50 font-bold border-t border-black/10 pt-4 w-full text-center hover:text-[#D87D4A]"
                                >
                                    View less
                                </button>
                            )}
                        </div>

                        <div className="md:col-span-2 bg-black text-white p-6 flex flex-col justify-end">
                            <p className="text-[15px] text-white/50 uppercase mb-2">
                                GRAND TOTAL
                            </p>
                            <p className="text-[18px] font-bold">
                                $ {grandTotal.toLocaleString()}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={handleBackToHome}
                        className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-4 uppercase text-[13px] font-bold tracking-[1px] transition-colors duration-200"
                    >
                        BACK TO HOME
                    </button>
                </div>
            </div>
        </>
    );
};