export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type ShippingForm = {
  firstName: string;
  lastName: string;
  streetAddress: string;
  aptNumber: string;
  state: string;
  zip: string;
};

export type Page = 'home' | 'checkout';

export type Totals = {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
};