import Link from 'next/link';

const footerLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/profil-desa', label: 'Profil Desa' },
  { href: '/program-kerja', label: 'Program Kerja' },
  { href: '/anggota', label: 'Anggota KKN' },
];

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">KKN 46 Tondomulo</h3>
            <p className="text-green-200 text-sm mb-4 leading-relaxed">
              Website resmi program Kuliah Kerja Nyata (KKN) 46 di Desa Tondomulo, Kec. Kedungadem, Kab. Bojonegoro, Jawa Timur.
            </p>
            <p className="text-green-300 text-xs font-semibold">
              DPL: ANISA FITRI, S.Pd, M.Pd &<br />Ir. AGUS SULISTIAWAN, S.Pd, M.T
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Pintasan</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-green-200">
                <span>📍</span>
                <span>Ds. Tondomulo, Kec. Kedungadem, Kab. Bojonegoro, Jawa Timur</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-green-200">
                <span>📧</span>
                <span>kkn46.tondomulo@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-green-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-green-300">
          <p>© {new Date().getFullYear()} KKN 46 Desa Tondomulo. Hak Cipta Dilindungi.</p>
          <p>Pengabdian Masyarakat Terintegrasi</p>
        </div>
      </div>
    </footer>
  );
}
