'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { OrderConfirmationModal } from '@/components/OrderConfirmationModal';

export default function ConfirmationPage() {
  const router = useRouter();
  const [orderData, setOrderData] = useState<any>(null);

  useEffect(() => {
    const lastOrder = sessionStorage.getItem('lastOrder');
    
    if (!lastOrder) {
      router.push('/');
      return;
    }

    setOrderData(JSON.parse(lastOrder));
  }, [router]);

  if (!orderData) {
    return null;
  }

  return (
    <OrderConfirmationModal
      orderNumber={orderData.orderNumber}
      items={orderData.items}
      grandTotal={orderData.grandTotal}
    />
  );
}