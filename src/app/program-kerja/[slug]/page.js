import { getProkerContent, getProkerBySlug, getAllProker } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const prokers = getAllProker();
  return prokers.map((proker) => ({
    slug: proker.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const proker = getProkerBySlug(slug);

  if (!proker) {
    return { title: 'Tidak Ditemukan' };
  }

  return {
    title: `${proker.title} — Program Kerja KKN 46 Tondomulo`,
    description: proker.excerpt,
  };
}

export default async function ProkerDetailPage({ params }) {
  const { slug } = await params;
  const proker = await getProkerContent(slug);

  if (!proker) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-green-800 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          {proker.tags && proker.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {proker.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-green-700 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{proker.title}</h1>
          <div className="text-green-200 text-sm">
            Dipublikasikan pada {new Date(proker.date).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Back link */}
        <Link
          href="/program-kerja"
          className="inline-flex items-center text-green-600 hover:text-green-800 font-medium mb-8"
        >
          &larr; Kembali ke daftar program kerja
        </Link>

        {/* Content */}
        <div
          className="prose-custom text-gray-800"
          dangerouslySetInnerHTML={{ __html: proker.contentHtml }}
        />
      </div>
    </article>
  );
}
