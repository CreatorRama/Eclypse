import { CartItem, Totals } from '../types';

export const calculateTotal = (cartItems: CartItem[]): Totals => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 200;
  const tax = Math.round(subtotal * 0.18);
  return {
    subtotal,
    shipping,
    tax,
    total: subtotal + shipping + tax
  };
};