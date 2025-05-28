export const Footer: React.FC = () => (
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
);
