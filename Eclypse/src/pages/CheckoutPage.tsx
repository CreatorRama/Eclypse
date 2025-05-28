import { ChevronLeft } from 'lucide-react';
import { Header } from '../components/Header';
import { ShippingFormComponent } from '../components/ShippingForm';
import { OrderSummary } from '../components/OrderSummary';
import { Page, ShippingForm, Totals } from '../types';

interface CheckoutPageProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  shippingForm: ShippingForm;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  totals: Totals;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  currentPage,
  setCurrentPage,
  shippingForm,
  handleInputChange,
  totals
}) => (
  <div className="bg-white min-h-screen">
    <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

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
        <ShippingFormComponent 
          shippingForm={shippingForm} 
          handleInputChange={handleInputChange} 
        />
        <OrderSummary totals={totals} />
      </div>
    </div>
  </div>
);