import { useEffect, useState } from 'react';
import { ChevronLeft, ShoppingCart, Heart } from 'lucide-react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type ShippingForm = {
  firstName: string;
  lastName: string;
  streetAddress: string;
  aptNumber: string;
  state: string;
  zip: string;
};

type Page = 'home' | 'checkout';

type Totals = {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
};

const EclypseEcommerce = () => {
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
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/images');
        const data = await response.json();
        if (data.data && Array.isArray(data.data)) {
          setImages(data.data);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingForm({
      ...shippingForm,
      [name]: value
    });
  };

  const calculateTotal = (): Totals => {
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

  const Header = () => (
    <header className="flex justify-between items-center p-6 bg-black text-white">
      <div className="flex items-center">
        <img src="/images/Frame 8.svg" alt="Eclypse Logo" />
        <span className="text-xl font-light">Eclypse</span>
      </div>
      <nav className="flex space-x-8">
        <button
          onClick={() => setCurrentPage('home')}
          className="text-gray-300 hover:text-white transition-colors"
        >
          About Us
        </button>
        <button className="text-gray-300 hover:text-white transition-colors">
          Waitlist
        </button>
        <button
          onClick={() => setCurrentPage('checkout')}
          className="text-white border-b border-white pb-1"
        >
          Cart
        </button>
      </nav>
    </header>
  );

  const HomePage = () => (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-light mb-6">
                Eclypse<sup className="text-sm">®</sup>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-md">
                Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
              </p>
              <button className="text-gray-300 hover:text-white transition-colors flex items-center">
                Learn more about Eclypse →
              </button>
            </div>
            <div className="relative">
              <img
                src="/images/modal.svg"
                alt="Model in red dress"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 px-1 py-1 rounded text-sm">
             
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, i) => (
              <img src={src} key={i} alt={`Gallery item ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light mb-8">Silhouette No. 1 – Vermilion</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src="/images/vermillion.png"
                alt="Silhouette No. 1 – Vermilion"
                className="w-full h-auto rounded-lg mb-4"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">Please select a size:</span>
                <span className="text-sm text-gray-400">Size Guide</span>
              </div>
              <div className="flex space-x-2">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className="border border-gray-600 px-4 py-2 text-sm hover:border-white transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage('checkout')}
                className="w-full bg-white text-black py-3 px-6 rounded hover:bg-gray-100 transition-colors"
              >
                Buy
              </button>
              <div className="space-y-4">
                <details className="border-t border-gray-800 pt-4">
                  <summary className="cursor-pointer text-sm text-gray-300 hover:text-white">
                    Size & Fit
                  </summary>
                </details>
                <details className="border-t border-gray-800 pt-4">
                  <summary className="cursor-pointer text-sm text-gray-300 hover:text-white">
                    Delivery & Returns
                  </summary>
                </details>
                <details className="border-t border-gray-800 pt-4">
                  <summary className="cursor-pointer text-sm text-gray-300 hover:text-white">
                    How This Was Made
                  </summary>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Review */}
      <section className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-8">Our Customers</h3>
            <blockquote className="text-2xl font-light mb-6 max-w-2xl mx-auto">
              "Understated, but unforgettable. It feels like it was made for me"
            </blockquote>
            <div className="flex justify-center items-center space-x-4">
              <div className="flex space-x-2">
                {['images/Ellipse 3.svg', 'images/Ellipse 4.svg', 'images/Ellipse 5.svg'].map((src, i) => (
                  <img key={i} src={src} alt={`Customer ${i + 1}`} className="w-8 h-8 bg-gray-600 rounded-full" />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">Random Woman</p>
            <span className='text-xs text-[#535353]'>NY, USA</span>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start">
            <div className="flex space-x-16">
              <div>
                <h3 className="text-lg font-light mb-4">
                  Eclypse<sup className="text-xs">®</sup>
                </h3>
                <nav className="text-sm text-gray-400 space-y-2">
                  <div className='hover:text-red-500 cursor-pointer'>Home</div>
                  <div className='hover:text-red-500 cursor-pointer'>About</div>
                  <div className='hover:text-red-500 cursor-pointer'>Buy</div>
                  <div className='hover:text-red-500 cursor-pointer'>Our Customers</div>
                  <div className='hover:text-red-500 cursor-pointer'>Contacts</div>
                </nav>
              </div>
              <div>
                <h4 className="text-sm text-gray-400 mb-2">CONTACT</h4>
                <div className="text-sm text-gray-300">+91 123-456-7890</div>
                <h4 className="text-sm text-gray-400 mt-4 mb-2">EMAIL</h4>
                <div className="text-sm text-gray-300">eclypse@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-xs text-gray-400">© Eclypse 2025</div>
              <button onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <svg width="16" height="16"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14L12 9L17 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

  const CheckoutPage = () => {
    const totals = calculateTotal();

    return (
      <div className="bg-white min-h-screen">
        <Header />

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center mb-8">
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center text-gray-600 hover:text-black"
            >
              <ChevronLeft size={20} className="mr-2" />
            </button>
            <h1 className="text-2xl font-light">Shipping Address</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Shipping Form */}
            <div className="border border-gray-300 rounded-lg p-6">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 border-2 border-red-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <h2 className="text-lg font-medium">Add New Address</h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={shippingForm.firstName}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={shippingForm.lastName}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={shippingForm.streetAddress}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-black"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apt Number
                    </label>
                    <input
                      type="text"
                      name="aptNumber"
                      value={shippingForm.aptNumber}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={shippingForm.state}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Zip
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={shippingForm.zip}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div className="flex space-x-4 pt-6">
                  <button
                    type="button"
                    className="flex-1 border border-gray-300 py-3 px-6 rounded hover:bg-gray-50 transition-colors"
                  >
                    cancel
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors"
                  >
                    Save This Address
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="text-sm text-gray-600 p-4 bg-gray-50 rounded">
                By placing your order, you agree to our company{' '}
                <span className="text-black font-medium">Privacy policy</span> and{' '}
                <span className="text-black font-medium">Conditions of use</span>.
              </div>

              <div className="border border-gray-300 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-6">Order Summary</h3>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Items - Silhouette No. 1 – Vermilion</span>
                    <span>{totals.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping and handling:</span>
                    <span>{totals.shipping}</span>
                  </div>
                  <div className="flex justify-between border-t pt-4">
                    <span className="text-gray-600">Before tax:</span>
                    <span>{(totals.subtotal - totals.tax).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax Collected:</span>
                    <span>{totals.tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg font-medium border-t pt-4">
                    <span>Order Total:</span>
                    <span>{totals.total.toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-3 px-6 rounded mt-6 hover:bg-gray-800 transition-colors">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'home' ? <HomePage /> : <CheckoutPage />}
    </div>
  );
};

export default EclypseEcommerce;