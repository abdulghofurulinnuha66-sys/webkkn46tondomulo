'use client';

const galleryItems = [
  { title: 'Pelatihan UMKM', icon: '💼' },
  { title: 'Pertanian Organik', icon: '🌾' },
  { title: 'Posyandu', icon: '🏥' },
  { title: 'Gotong Royong', icon: '🤝' },
  { title: 'Kesenian Desa', icon: '🎭' },
  { title: 'Bersama Warga', icon: '👨‍👩‍👧‍👦' },
];

export default function GallerySection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Galeri Kegiatan</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className="h-40 md:h-48 bg-gray-100 flex items-center justify-center">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
              </div>
              <div className="p-4 text-center border-t border-gray-100">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
