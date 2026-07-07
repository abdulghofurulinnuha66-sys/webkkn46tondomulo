import HeroSection from '@/components/HeroSection';
import ProfilKKNSection from '@/components/ProfilKKNSection';
import StatsSection from '@/components/StatsSection';
import GallerySection from '@/components/GallerySection';
import ProkerCard from '@/components/ProkerCard';
import { getStatsData, getDesaData } from '@/lib/data';
import { getAllProker } from '@/lib/markdown';
import Link from 'next/link';

export default function HomePage() {
  const stats = getStatsData();
  const prokerList = getAllProker();
  const desa = getDesaData();

  return (
    <>
      <HeroSection />
      <ProfilKKNSection desa={desa} />
      <StatsSection stats={stats} />

      {/* Program Kerja Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Kerja Terbaru</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai program kerja yang telah kami laksanakan untuk membangun dan memberdayakan masyarakat Desa Tondomulo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prokerList.slice(0, 3).map((proker) => (
              <ProkerCard key={proker.slug} proker={proker} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/program-kerja"
              className="inline-block px-6 py-3 rounded-lg border-2 border-green-600 text-green-700 font-bold hover:bg-green-50 transition-colors"
            >
              Lihat Semua Program &rarr;
            </Link>
          </div>
        </div>
      </section>

      <GallerySection />

      {/* CTA Section */}
      <section className="py-20 bg-green-800 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Kenali Lebih Dekat Desa Tondomulo</h2>
          <p className="text-green-100 text-lg mb-8 leading-relaxed">
            Pelajari sejarah, potensi, dan keunikan Desa Tondomulo yang terletak di Kecamatan Kedungadem, Kabupaten Bojonegoro.
          </p>
          <Link
            href="/profil-desa"
            className="inline-block px-8 py-4 rounded-lg bg-white text-green-900 font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Jelajahi Profil Desa
          </Link>
        </div>
      </section>
    </>
  );
}
