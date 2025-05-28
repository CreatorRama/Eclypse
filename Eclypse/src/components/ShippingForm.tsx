import { ShippingForm as ShippingFormType } from '../types';

interface ShippingFormProps {
  shippingForm: ShippingFormType;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ShippingFormComponent: React.FC<ShippingFormProps> = ({ 
  shippingForm, 
  handleInputChange 
}) => (
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
);
