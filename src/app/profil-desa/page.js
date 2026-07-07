import { getDesaData } from '@/lib/data';

export const metadata = {
  title: 'Profil Desa — KKN 46 Tondomulo',
  description: 'Informasi lengkap mengenai sejarah, letak geografis, visi misi, dan potensi Desa Tondomulo.',
};

export default function ProfilDesaPage() {
  const desa = getDesaData();

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-green-800 text-white py-16 md:py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Profil Desa</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto px-4">
          Kenali lebih dekat {desa.nama}, potensi, dan keunikan yang dimilikinya.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Info Box */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 mb-12 shadow-sm text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{desa.nama}</h2>
          <p className="text-gray-600 mb-6 font-medium">
            {desa.kecamatan}, {desa.kabupaten}, {desa.provinsi}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-200 pt-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Luas Wilayah</p>
              <p className="font-semibold text-gray-900">{desa.luasWilayah}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Jumlah Penduduk</p>
              <p className="font-semibold text-gray-900">{desa.jumlahPenduduk} Jiwa</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Jumlah KK</p>
              <p className="font-semibold text-gray-900">{desa.jumlahKK} KK</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Ketinggian</p>
              <p className="font-semibold text-gray-900">{desa.ketinggian}</p>
            </div>
          </div>
        </div>

        {/* Content Tabs / Sections */}
        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500 inline-block">
              Sejarah
            </h3>
            <div className="prose-custom max-w-none text-gray-700">
              <p>{desa.sejarah}</p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500 inline-block">
              Visi & Misi
            </h3>
            <div className="bg-green-50 p-6 rounded-xl border border-green-100 mb-6">
              <h4 className="font-bold text-green-900 mb-2">Visi:</h4>
              <p className="text-gray-800 italic">"{desa.visi}"</p>
            </div>
            <div className="prose-custom text-gray-700">
              <h4 className="font-bold text-gray-900 mb-3">Misi:</h4>
              <ul className="list-disc pl-5 space-y-2">
                {desa.misi.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-green-500 inline-block">
              Potensi Desa
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {desa.potensi.map((p, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm flex items-start gap-4">
                  <div className="text-3xl bg-gray-50 w-12 h-12 flex items-center justify-center rounded-lg">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{p.nama}</h4>
                    <p className="text-sm text-gray-600">{p.deskripsi}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
