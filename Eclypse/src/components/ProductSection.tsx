import { Page } from '../types';

interface ProductSectionProps {
  setCurrentPage: (page: Page) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ setCurrentPage }) => (
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
);
