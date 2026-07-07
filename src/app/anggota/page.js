import AnggotaCard from '@/components/AnggotaCard';
import { getAnggotaData } from '@/lib/data';

export const metadata = {
  title: 'Profil Anggota — KKN 46 Tondomulo',
  description:
    'Kenali anggota Tim KKN 46 yang mengabdi di Desa Tondomulo, Kecamatan Kedungadem, Kabupaten Bojonegoro.',
};

export default function AnggotaPage() {
  const anggotaList = getAnggotaData();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-green-800 text-white py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Tim KKN 46</h1>
          <p className="text-green-100 text-lg max-w-xl mx-auto">
            {anggotaList.length} mahasiswa yang berdedikasi untuk
            membangun dan memberdayakan masyarakat Desa Tondomulo.
          </p>
        </div>
      </section>

      {/* Anggota Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {anggotaList.map((anggota) => (
              <AnggotaCard key={anggota.id} anggota={anggota} />
            ))}
          </div>
        </div>
      </section>

      {/* KKN Info */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="p-8 md:p-10 rounded-2xl bg-gray-50 border border-gray-200">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              KKN 46 Bojonegoro
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-lg mx-auto">
              Program Kuliah Kerja Nyata (KKN) 46 merupakan bentuk pengabdian kepada
              masyarakat yang dilaksanakan di Desa Tondomulo, Kecamatan Kedungadem, Kabupaten Bojonegoro.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
