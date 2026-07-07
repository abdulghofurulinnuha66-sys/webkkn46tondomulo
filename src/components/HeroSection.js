import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background Image Placeholder / Color Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-green-900/80 mix-blend-multiply z-10" />
        <img
          src="/images/hero-bg.jpg"
          alt="Desa Tondomulo"
          className="w-full h-full object-cover"
        />
        {/* Solid fallback if image fails */}
        <div className="absolute inset-0 bg-green-800" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-semibold tracking-wider mb-6">
          KKN 46 Bojonegoro 2026
        </span>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Membangun Desa Tondomulo Bersama
        </h1>
        
        <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto mb-10 leading-relaxed">
          Mengabdi, belajar, dan berkontribusi nyata untuk kemajuan Desa Tondomulo,
          Kecamatan Kedungadem, Kabupaten Bojonegoro melalui program kerja yang berkelanjutan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/program-kerja"
            className="px-8 py-3 rounded-lg bg-green-600 text-white font-bold hover:bg-green-500 transition-colors shadow-lg shadow-green-900/20"
          >
            Program Kerja
          </Link>
          <Link
            href="/profil-desa"
            className="px-8 py-3 rounded-lg bg-white text-green-900 font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-black/10"
          >
            Profil Desa
          </Link>
        </div>
      </div>
    </section>
  );
}
