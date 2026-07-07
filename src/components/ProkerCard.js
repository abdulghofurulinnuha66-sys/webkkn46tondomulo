import Link from 'next/link';

export default function ProkerCard({ proker }) {
  return (
    <Link href={`/program-kerja/${proker.slug}`} className="block h-full group">
      <article className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col overflow-hidden">
        {/* Thumbnail Placeholder */}
        <div className="h-48 bg-green-100 relative overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 flex items-center justify-center text-green-300">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          {proker.image && (
            <img
              src={proker.image}
              alt={proker.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {proker.tags && proker.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {proker.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2 line-clamp-2">
            {proker.title}
          </h3>

          <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
            {proker.excerpt}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <time className="text-xs text-gray-500 font-medium">
              {new Date(proker.date).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <span className="text-sm font-semibold text-green-600 group-hover:text-green-700">
              Baca selengkapnya &rarr;
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
