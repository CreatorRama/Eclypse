export const CustomerReview: React.FC = () => (
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
);
