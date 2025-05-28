
export const HeroSection: React.FC = () => (
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
);
