import { useEffect, useState } from 'react';
import { CheckoutPage } from './pages/CheckoutPage';
import { fetchImages } from './services/imageService';
import { calculateTotal } from './utils/calculations';
import { CartItem, ShippingForm, Page } from './types';
import { HomePage } from './pages/homepage';

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [images, setImages] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Silhouette No. 1 – Vermilion',
      price: 7999,
      quantity: 1,
      image: ''
    }
  ]);

  const [shippingForm, setShippingForm] = useState<ShippingForm>({
    firstName: '',
    lastName: '',
    streetAddress: '',
    aptNumber: '',
    state: '',
    zip: ''
  });

  useEffect(() => {
    const loadImages = async () => {
      const imageData = await fetchImages();
      setImages(imageData);
    };
    loadImages();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingForm({
      ...shippingForm,
      [name]: value
    });
  };

  const totals = calculateTotal(cartItems);

  return (
    <div className="min-h-screen">
      {currentPage === 'home' ? (
        <HomePage 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          images={images}
        />
      ) : (
        <CheckoutPage 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          shippingForm={shippingForm}
          handleInputChange={handleInputChange}
          totals={totals}
        />
      )}
    </div>
  );
};

export default App;