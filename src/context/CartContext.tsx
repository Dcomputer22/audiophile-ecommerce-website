'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";


interface CartItem {
    id: string;
    slug: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    category: string;
}

interface CartContextType {
    items: CartItem[];
    isCartOpen: boolean;
    addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
      const storedCart = localStorage.getItem('audiophile-cart');
      if (storedCart) {
        try {
          setItems(JSON.parse(storedCart));

        } catch (error) {
          toast.error('Failed to load cart.');
        }
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('audiophile-cart', JSON.stringify(items));
    }, [items]);

    const addItem = (item: Omit<CartItem, 'quantity'>, quantity = 1) => {
      setItems((prev) => {
        const existingItem = prev.find((i) => i.id === item.id);
        if (existingItem) {
          existingItem.quantity += quantity;
          return [...prev];
        }
        return [...prev, {...item, quantity}];
      });
      setIsCartOpen(true);
    }

    const removeItem = (id: string) => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }

    const updateQuantity = (id: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(id);
        return;
      }
      setItems((prev) => prev.map((item) => item.id === id ? {...item, quantity} : item))
    }

    const clearCart = () => {
      setItems([]);
      localStorage.removeItem('audiophile-cart');
    }

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);
    const toggleCart = () => setIsCartOpen((prev) => !prev);

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <CartContext.Provider
    value={{
      items,
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
      totalItems,
      totalPrice,
    }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}