import { getAllProker } from '@/lib/markdown';
import ProkerCard from '@/components/ProkerCard';

export const metadata = {
  title: 'Program Kerja — KKN 46 Tondomulo',
  description: 'Daftar program kerja unggulan yang dilaksanakan oleh Tim KKN 46 di Desa Tondomulo.',
};

export default function ProgramKerjaPage() {
  const prokerList = getAllProker();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-green-800 text-white py-16 md:py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Program Kerja</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto px-4">
          Inisiatif dan kegiatan yang kami lakukan untuk memajukan Desa Tondomulo.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {prokerList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prokerList.map((proker) => (
              <ProkerCard key={proker.slug} proker={proker} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Belum ada program kerja yang dipublikasikan.</p>
          </div>
        )}
      </div>
    </div>
  );
}
