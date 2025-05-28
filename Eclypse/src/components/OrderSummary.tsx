import { Totals } from '../types';

interface OrderSummaryProps {
  totals: Totals;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ totals }) => (
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
);