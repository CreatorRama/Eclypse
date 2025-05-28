interface ImageGridProps {
  images: string[];
}

export const ImageGrid: React.FC<ImageGridProps> = ({ images }) => (
  <section className="px-6 py-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img src={src} key={i} alt={`Gallery item ${i + 1}`} />
        ))}
      </div>
    </div>
  </section>
);
